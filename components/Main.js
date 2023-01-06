import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <main>
      <div className="min-w-full lg:px-24 md:16 px-4 py-10 min-h-screen bg-home bg-cover bg-no-repeat flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="pb-32"
            alt="Ink Tattoo Studio"
            width={452}
            height={360}
            src="/logo.png"
          />
          <Link href="/#featured">
            <ArrowDownCircle className="animate-bounce w-10 h-10"  />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-x-8 italic pt-16 opacity-75 lg:text-lg md:text-md text-[12px] text-center">
          <p>"Award winning designs <br /> with accuracy"</p>
          <p>"Clean & Professional"</p>
          <p>"Ink-ing since 2002"</p>
        </div>
      </div>
    </main>
  );
}
