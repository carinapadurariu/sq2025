import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { MyNavBar } from "../components/NavBar";
import { Presentation } from "../components/Presentation";

export default function Home() {
  return (
    <>
      <MyNavBar />
      <Banner />
      <Presentation />
      <Footer />
    </>
  );
}
