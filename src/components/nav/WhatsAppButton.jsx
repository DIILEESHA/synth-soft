
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "+94784218381"; // Replace with your phone number (with country code)
    const message = encodeURIComponent("Hello, I would like to know more about your services."); // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" ,zIndex:"1000"}}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#25D366", // WhatsApp green
          border: "none",
          borderRadius: "50%",
          padding: "15px",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <FaWhatsapp color="#fff" size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
