import React, { useState, useEffect } from "react";
import VehicleModelSelector from "./VehicleModelSelector";
import styles from './styles.module.css'
import './style.css'

const MAKES_URL = "/api/v1/vehicle_makes"

function VehicleSelector() {
  const [makes, setmakes] = useState([]);
  const [make, setMake] = useState(null);

  useEffect(() => {
    fetch(MAKES_URL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setmakes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="rrr">
      <select
        onChange={(e) => setMake(e.target.value)}
        name="makes"
        value={make || ""}
        id="makes"
      > .
        <option value="">Select Make</option>
        {makes.map((make) => (
          <option key={make.id} value={make.id}>
            {make.name}
          </option>
        ))}
      </select>
      {make && <VehicleModelSelector id={make} />}
    </div>
  );
}

export default VehicleSelector;
