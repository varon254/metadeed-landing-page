// components/PageLoader.jsx
import Lottie from "lottie-react";
import cube from "../../assets/lottie/cube.json";

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="w-48 h-48">
        <Lottie
          loop={true}
          animationData={cube}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
