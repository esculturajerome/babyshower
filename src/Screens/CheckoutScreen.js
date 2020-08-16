import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import GradientButton from "../components/GradientButton";
import WhiteButton from "../components/WhiteButton";
import Title from "../components/Title";
import AppDetails from "../components/AppDetails";
import Nav from "../components/Nav";

function CheckoutScreen() {
  const [checkout, setcheckout] = useState(true);
  const [day, setday] = useState(null);
  const [month, setmonth] = useState(null);
  const [year, setyear] = useState(null);

  useEffect(() => {
    getDate();
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handle = () => {
    setTimeout(() => setcheckout(!checkout), 700);
  };

  const getDate = () => {
    const newDate = new Date();
    let day = newDate.getDate();
    let year = newDate.getFullYear();

    setmonth(monthNames[newDate.getMonth()]);
    setday(day);
    setyear(year);
  };

  return (
    <div>
      <Nav back />
      <AppDetails />
      <Title title={`${month} ${day}`} caption={year} />
      <Cards />
      {/* {checkout && <GradientButton onClick={handle} />} */}
      {/* {!checkout && <WhiteButton />} */}
    </div>
  );
}

export default CheckoutScreen;
