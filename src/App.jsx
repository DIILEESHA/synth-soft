import Faq from "./components/nav/Faq";
import Navbar from "./components/nav/Navbar";
import Hero from "./pages/hero/Hero";
import "./index.css";
import WhatsAppButton from "./components/nav/WhatsAppButton";

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Hero />
      <WhatsAppButton />
    </div>
  );
}
