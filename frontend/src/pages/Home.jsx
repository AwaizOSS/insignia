import { useState } from "react";
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [displayCreate, setDisplayCreate] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const navigateTo = useNavigate();

  const addDestination = (event) => {
    const selectedDestination = event.target.value;
    setDestinations([...destinations, selectedDestination]);
  };
  return displayCreate ? (
    <>
      <p>add a destination</p>
      {destinations.length ? (
        <ul>
          {destinations.map((destination, index) => (
            <li key={index}>{destination}</li>
          ))}
        </ul>
      ) : null}
      <select onChange={addDestination}>
        <option value="">Select destination</option>
        <option value="twitter">twitter</option>
        <option value="instagram">instagram</option>
        <option value="facebook">facebook</option>
        <option value="youtube">youtube</option>
      </select>
      <button
        style={{ display: "block" }}
        onClick={() => navigateTo("/studio")}
      >
        {destinations.length ? "continue" : "continue without destination"}
      </button>
    </>
  ) : (
    <Dashboard setDisplayCreate={setDisplayCreate} />
  );
}

export default Home;
