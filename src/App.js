import React, { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    // console.log(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    <main>
      <Loading />
    </main>;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No destination found!</h2>
          <button onClick={fetchTours} className="btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
