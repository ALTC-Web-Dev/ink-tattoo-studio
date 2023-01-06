import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="min-w-full lg:px-24 md:16 px-4 py-10">
      <div className="bg-neutral-800 rounded-lg px-4 py-12">
        <div className="text-center italic gap-y-6 pb-8">
          <h1 className="text-4xl mb-2">Testimonials From Clients</h1>
          <p className="">“Quality and Cleanliness is our promise to you”</p>
          <hr className="w-[250px] mx-auto my-4" />
        </div>
        <div className="flex justify-between items-center gap-x-4 lg:px-12 md:px-6">
          <ArrowLeftCircle />
          <p className="text-center lg:text-lg italic">“Artist Glen is a perfectionist which focuses on <br /> Polynesian inks with utmost cleanliness.”</p>
          <ArrowRightCircle />
        </div>
      </div>
      <div className="text-center italic gap-y-6 py-16">
        <h1 className="text-4xl mb-2">Prestige</h1>
        <p className="">“Featured articles and awards achieved over the years”</p>
        <hr className="w-[250px] mx-auto my-4" />
      </div>
      <div className="flex justify-between items-center gap-x-4 lg:px-12 md:px-6">
        <ArrowLeftCircle />
        <div className="text-center">
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p className="italic font-bold text-xl text-amber-500">"The Something Times Newspaper"</p>
          <p className="text-center lg:text-lg italic">“Artist Glen was awarded First Place in Ink-Session Competition <br /> with the unique design and detailed outlines.”</p>
        </div>
        <ArrowRightCircle />
      </div>
    </section>
  );
}
