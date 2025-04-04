import React, { useEffect, useState } from "react";

const MODELS_URL = "api/v1/vehicle_makes/1/vehicle_models";

function VehicleModelSelector({ id }) {
  const [models, setModels] = useState([]);
  const [model, setModel] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(MODELS_URL)
        .then((res) => res.json())
        .then((res) => {
          setModels(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);
  return (
    <select
      onChange={(e) => setModel(e.target.value)}
      name="makes"
      value={model || ""}
      id="makes"
    >
      <option value="">Select Model</option>
      {models.map((model) => (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
    </select>
  );
}

export default VehicleModelSelector;
