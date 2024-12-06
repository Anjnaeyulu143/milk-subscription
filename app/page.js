import AboutFreshMilk from "@/components/AboutFreshMilk";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MilkPromoCard from "@/components/MilkPromoCard";
import PlanCard from "@/components/PlanCard";
import SubscriptionContainer from "@/components/SubscriptionContainer";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <MilkPromoCard />
      <Hero />
      <AboutFreshMilk />
      <SubscriptionContainer />
      <Footer />
    </div>
  );
};

export default Home;
