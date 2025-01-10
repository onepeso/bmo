import {Footer} from "./core/footer/Footer";
import {ChooseUs} from "./core/sections/ChooseUs";
import HomePageCTA from "./core/sections/HomePageCTA";
import {Services} from "./core/sections/Services";
import {SocialMedia} from "./core/sections/SocialMedia";

export default function Home() {
  return (
    <main className="">
      <HomePageCTA/>
      <Services/>
      <ChooseUs/>
      <SocialMedia/>
      <Footer/>
    </main>
  );
}
