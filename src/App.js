import "./assets/App.css";
import BackToTopButton from "./components/elements/BackToTopButton";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <BackToTopButton />
    </div>
  );
}

export default App;
