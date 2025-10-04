import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AdminAppointments from "./AdminAppointments";
function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AdminAppointments />
    </div>
  );
}

export default Home;
