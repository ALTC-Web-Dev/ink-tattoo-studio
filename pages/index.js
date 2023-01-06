import Main from "../components/Main";
import FeaturedWorks from "../components/FeaturedWorks";
import Testimonials from "../components/Testimonials";
import ResidentArtists from "../components/ResidentArtists";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ink Tattoo Studio</title>
      </Head>
      <Main />
      <FeaturedWorks />
      <Testimonials />
      <ResidentArtists />
      <Footer />
    </>
  );
}
