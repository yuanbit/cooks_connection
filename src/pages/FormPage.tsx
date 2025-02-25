import { useEffect } from "react";
import Navigation from "@/components/Navigation"; // ✅ Ensure correct import

const FormPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Keep the navigation fixed at the top */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navigation />
      </div>

      {/* ✅ Push the form down so it doesn't overlap the navbar */}
      <div className="mt-24 flex-grow flex items-center justify-center">
        <div data-tf-live="01JMZ4C3700NCPQPVENYYNSDPN" className="w-full h-screen"></div>
      </div>
    </div>
  );
};

export default FormPage;
