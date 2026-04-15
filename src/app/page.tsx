import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0f1623] px-6 text-center">
      <Image
        src="/assets/images/logo.svg"
        alt="Comply Guide Advisory"
        width={280}
        height={75}
        priority
        className="mb-10"
      />

      <h1 className="text-3xl font-semibold text-white sm:text-4xl">
        Coming Soon
      </h1>

      <p className="mt-4 max-w-md text-base text-zinc-400">
        We&apos;re working on something great. Stay tuned for expert compliance
        guidance and advisory services.
      </p>

      <div className="mt-10 flex items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-11 w-64 rounded-lg border border-zinc-700 bg-zinc-800 px-4 text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-500 sm:w-72"
        />
        <button className="h-11 rounded-lg bg-white px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200">
          Notify me
        </button>
      </div>
    </main>
  );
}
