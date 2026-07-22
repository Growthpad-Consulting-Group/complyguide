const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

function loadEnv(filePath) {
  const env = {};
  if (!fs.existsSync(filePath)) return env;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let val = trimmed.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

(async () => {
  try {
    const repoRoot = path.resolve(__dirname, '..');
    const envFile = path.join(repoRoot, '.env.local');
    const env = loadEnv(envFile);
    Object.assign(process.env, env);

    const toAddress = process.argv[2] || process.env.SMTP_TO_EMAIL || 'kwamevaughan@gmail.com';

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP_HOST, SMTP_USER, or SMTP_PASS in .env.local');
      process.exit(2);
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
      secure: (process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified');

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: toAddress,
      subject: 'ComplyGuide SMTP test message',
      text: 'This is a test message sent from the local test script.',
      html: '<p>This is a <strong>test</strong> message sent from the local test script.</p>',
    });

    console.log('Message sent:', info.messageId || info.response || info);
    process.exit(0);
  } catch (err) {
    console.error('Error sending test email:', err && err.message ? err.message : err);
    process.exit(1);
  }
})();
