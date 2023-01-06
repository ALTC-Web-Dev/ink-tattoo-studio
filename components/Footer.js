import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <section className="min-w-full lg:px-24 md:16 px-4 py-10">
      <div className="text-center italic gap-y-6 py-16">
        <h1 className="text-4xl mb-2">Let&#39;s Design Your First Tattoo</h1>
        <p className="">“There are no bad designs in the world, just bad artist.”</p>
        <hr className="w-[250px] mx-auto my-4" />
      </div>
      <div className="bg-neutral-800 rounded-lg px-4 py-16">
        <h2 className="text-center italic text-xl">
          Drop us a message with your designs through our social media <br /> platforms and give us some time for us to get back to you.
        </h2>
        <div className="flex gap-x-6 justify-center items-center pt-12">
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
        <hr className="w-[250px] mx-auto my-4" />
      </div>
    </section>
  );
}
