import React from "react";
import Manage from "../components/home/Manage";
import Manage2 from "../components/home/Manage2";
import Logos from "../components/home/Logos";
import Features from "../components/home/Features";
import How from "../components/home/How";
import Make from "../components/home/Make";
import Clients from "../components/home/Clients";
import Faq from "../components/home/FAQ";
import Subscribe from "../components/home/Subscribe";

const Home = () => {
  return (
    <>
      <Manage />
      <Manage2 />
      <Logos />
      <Features />
      <How />
      <Make />
      <Clients />
      <Faq />
      <Subscribe />
    </>
  );
};

export default Home;
