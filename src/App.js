import { useEffect, useState } from "react";
import "./assets/App.css";
import BackToTopButton from "./components/elements/BackToTopButton";
import Home from "./pages/Home";
import PageLoader from "./components/context/pageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    let loadedCount = 0;

    if (images.length === 0) {
      setTimeout(() => setLoading(false), 300); // slight delay
      return;
    }

    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setTimeout(() => setLoading(false), 300); // delay after images are loaded
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.onload = checkAllImagesLoaded;
        img.onerror = checkAllImagesLoaded;
      }
    });
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <div
        className={`App transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Home />
        <BackToTopButton />
      </div>
    </>
  );
}

export default App;
