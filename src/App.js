import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  const [saplingIn_Out, setSaplingIn_Out] = useState([]);
  const [saplingMaster, setSaplingMaster] = useState([]);

  useEffect(() => {
    fetch("/saplinginwardoutward.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response is not coming");
        }
        return response.json();
      })
      .then((data) => {
        setSaplingIn_Out(data);
      })
      .catch((error) =>
        console.error("Error fetching saplinginwardoutward.json:", error)
      );

    fetch("/saplings_master.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response is not coming");
        }
        return response.json();
      })
      .then((data) => {
        setSaplingMaster(data);
      })
      .catch((error) =>
        console.error("Error fetching saplings_master.json:", error)
      );
  }, []);

  return (
    <div className="w-[100%] my-[100px] mx-auto">
      <Header />
      <Container
        sapling_master_data={saplingMaster}
        saplingIn_Out_data={saplingIn_Out}
      />
    </div>
  );
};

export default App;
