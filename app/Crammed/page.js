import Image from "next/image";

export default function CrammidPage() {
  return (
    <main className="w-full ">
      <section className="w-full mt-25">
        {/* Top Banner Image */}
        <div className="w-full">
          <Image
            src="/cramid.webp"
            alt="Crammid Banner"
            width={1600}
            height={600}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* Bottom Footer/Strip Image */}
        <div className="w-full">
          <Image
            src="/cramid-footer.png"
            alt="Crammid Footer Strip"
            width={1600}
            height={200}
            className="w-full h-auto block"
          />
        </div>
      </section>
    </main>
  );
}