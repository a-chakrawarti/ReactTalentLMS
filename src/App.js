import "./App.css";
import Review from "./components/Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our clients</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
