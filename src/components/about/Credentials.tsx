import Image from "next/image";

const credentials = [
  { src: "/assets/images/credentials/kra.svg", alt: "Kenya Revenue Authority" },
  { src: "/assets/images/credentials/cpak.svg", alt: "ICPAK" },
  { src: "/assets/images/credentials/lsk.svg", alt: "Law Society of Kenya" },
  { src: "/assets/images/credentials/ictap.svg", alt: "ICTAP" },
];

export default function Credentials() {
  return (
    <section className="pb-16 px-6 md:px-16 bg-white">
      <p className="text-lg font-display tracking-[0.2em] text-brand uppercase text-center mb-12">
        Credentials
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
        {credentials.map((cred) => (
          <div key={cred.alt} className="flex items-center justify-center transition-all duration-500 hover:-translate-y-2">
            <Image
              src={cred.src}
              alt={cred.alt}
              width={140}
              height={80}
              className="object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
