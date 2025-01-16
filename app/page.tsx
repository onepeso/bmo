import { ChooseUs } from "./core/sections/ChooseUs";
import HomePageCTA from "./core/sections/HomePageCTA";
import { Services } from "./core/sections/Services";
import { SocialMedia } from "./core/sections/SocialMedia";

export default function Home() {
  return (
    <main className="">
      <HomePageCTA />
      <Services />
      <ChooseUs />
      <SocialMedia />
    </main>
  );
}
