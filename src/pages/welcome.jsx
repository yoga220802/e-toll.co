import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/e toll logo.svg";
import Background from "../assets/background/bgImage.png";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-900 relative overflow-hidden">
      <img src={Background} alt="Background" className="absolute bottom-0 left-0 w-auto h-45 object-cover" />
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-160 h-160 flex items-center justify-center">
            <img src={Logo} alt="E Toll Logo" className="w-full h-full" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white">E-TOLL.CO</h1>
      </div>
    </div>
  );
};

export default WelcomePage;