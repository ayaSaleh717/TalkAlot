import { useEffect, useState } from "react";
import "./visit.css";



function Visit() {
  const [visits, setVisits] = useState(0);

  // Loading from localStorage
  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
    setVisits(storedVisits + 1);
  }, []);

  // Saving in localStorage
  useEffect(() => {
    localStorage.setItem("visitCounter", visits);
  }, [visits]);

  return <footer className="visit">Visitors {visits}</footer>;
}


export default Visit