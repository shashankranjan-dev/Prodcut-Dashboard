import React from "react";
import Hero from "../../components/Dashboard/Hero";
import Card from "../../components/Dashboard/Card";
import Render from "../../components/Dashboard/Render";
import Box from "../../components/Dashboard/Box";

function Dashboard() {
  return (
    <div>
      <Hero />
      <Card />
      <Render />
      <Box />
    </div>
  );
}

export default Dashboard;
