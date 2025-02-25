import { useEffect } from "react";
import Navigation from "@/components/Navigation";

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
      {/* ✅ Navbar stays at the top */}
      <Navigation />

      {/* ✅ Push the form lower so navbar remains visible */}
      <div className="mt-[120px] flex-grow flex items-center justify-center">
        <div data-tf-live="01JMZ4C3700NCPQPVENYYNSDPN"></div>
        <script src="//embed.typeform.com/next/embed.js"></script> {/* ✅ New Typeform Embed */}
      </div>
    </div>
  );
};

export default FormPage;
