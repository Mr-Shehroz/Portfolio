import About from "./components/about";
import Conatct from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Work from "./components/work";

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Work/>
      <Conatct/>
      <Footer/>
    </div>
  );
}
