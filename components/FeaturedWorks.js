import Image from "next/image";
import { featuredWorks } from "../lib/featuredWorks";

export default function FeaturedWorks() {
  return (
    <section className="min-w-full lg:px-24 md:16 px-4 py-10" id="featured">
      <div className="text-center italic gap-y-6 py-8">
        <h1 className="text-4xl mb-2">Featured Works</h1>
        <p className="">“Various works from various artist from the studio”</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid lg:gap-16 gap-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {featuredWorks.map(item => (
            <div key={item.id}>
              <Image src={item.img} alt={item.img} width={230} height={320} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
