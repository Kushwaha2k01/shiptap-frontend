"use client";

import Header from "./component/header";
import Home from "./component/home";
import About from "./component/about";
import Features from "./component/features";
import Benefits from "./component/benefits";
import Normal from "./component/normal";
import ChooseShipTap from "./component/chooseShipTap";
import Contact from "./component/contact";
import Footer from "./component/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Benefits />
      <Normal />
      <ChooseShipTap />
      <Contact />
      <Footer />
    </>
  );
}
