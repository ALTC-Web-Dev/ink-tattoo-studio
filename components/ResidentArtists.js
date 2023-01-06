import Image from "next/image";

export default function ResidentArtists() {
  return (
    <section className="min-w-full lg:px-24 md:16 px-4 py-10">
      <div className="text-center italic gap-y-6 py-16">
        <h1 className="text-4xl mb-2">Resident Artists</h1>
        <p className="">“Professional artists with experiences to provide the best designs”</p>
        <hr className="w-[250px] mx-auto my-4" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex justify-around items-center w-full lg:w-1/2 md:w-3/4">
          <Image src="/artists/artist-1.webp" alt="Artist Marcus" width={245} height={350} />
          <div className="text-center italic px-3">
            <h2 className="text-4xl mb-2">Artist Marus</h2>
            <p>“A man without tattoo is invisible. Time to go get some.”</p>
          </div>
        </div>
        <div className="flex justify-around items-center w-full lg:w-1/2 md:w-3/4">
          <div className="text-center italic px-3">
            <h2 className="text-4xl mb-2">Artist Glen</h2>
            <p>“It is said that once you experience tattoo, <br /> it becomes an addiction, a drug. True or false?”</p>
          </div>
          <Image src="/artists/artist-2.webp" alt="Artist Glen" width={245} height={350} />
        </div>
        <div className="flex justify-around items-center w-full lg:w-1/2 md:w-3/4">
          <Image src="/artists/artist-3.webp" alt="Artist Jessica" width={245} height={350} />
          <div className="text-center italic px-3">
            <h2 className="text-4xl mb-2">Artist Jessica</h2>
            <p>“Never hide your ink, otherwise you’re <br /> hiding yourself from all to see and love.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
