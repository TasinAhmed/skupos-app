import React from "react";
import BrandsSection from "./components/organisms/BrandsSection";
import ClientsSection from "./components/organisms/ClientsSection";
import EmailSection from "./components/organisms/EmailSection";
import FeaturedSection from "./components/organisms/FeaturedSection";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Navbar from "./components/organisms/Navbar";
import RetailersSection from "./components/organisms/RetailersSection";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Navbar />
        <Hero />
      </Header>
      <FeaturedSection />
      <ClientsSection />
      <EmailSection
        background="#fbd224"
        text="Skupos is sweeping the c-store nation. Send the latest stories to your
        inbox."
      />
      <BrandsSection />
      <EmailSection
        background="#F5F7FA"
        text="Never miss a captivating success story. Send the latest stories to your
        inbox."
      />
      <RetailersSection />
      <Footer />
    </>
  );
}

export default App;
