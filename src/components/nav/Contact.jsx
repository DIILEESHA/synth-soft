/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./contact.css";

import { Helmet } from "react-helmet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef();
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(
        selectedServices.filter((service) => service !== serviceName)
      );
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("selectedServices", selectedServices.join(", "));

    emailjs
      .sendForm(
        "service_45r525n",
        "template_xckj6nm",
        formRef.current,
        "c0OCPezx-EbyzmYf3"
      )
      .then(
        (result) => {
          console.log("ok");
          toast.success("Great! You're all set! Cheers!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          formRef.current.reset();
          setSelectedServices([]);
        },
        (error) => {
          toast.error("No Internet Connection, Try Again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  useEffect(() => {
    document.title = "Effortless Assignment Solutions for students - Synth soft solutions";
  }, []);

  return (
    <div>
    

      <div className="contact_form_section two">
        <ToastContainer />
        <div className="contact_grida">
       
          <div className="contact_sub_grida buha">
            <div className="sma_card">
              <div className="sma_sub_card">
                <div className="sma_details">
                  <h1 className="sma_title">You can Email Me Here</h1>
                  <h2 className="sma_email">
                    {" "}
                    <a
                      className="linka"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                      }}
                      // color={#d85040}
                      href=""
                    >
                     not updated
                    </a>
                  </h2>
                </div>
                <div className="sma_details2">
                  <img src="https://i.imgur.com/Ddm9Oz8.png" alt="" />
                </div>
              </div>
            </div>
            <div className="sma_card">
              <div className="sma_sub_card">
                <div className="sma_details">
                  <h1 className="sma_title">Location</h1>
                  <h2 className="sma_email">Malabe,Sri Lanka</h2>
                </div>
                <div className="sma_details2">
                  <img src="https://i.imgur.com/Ddm9Oz8.png" alt="" />
                </div>
              </div>
            </div>
            <div className="sma_card">
              <div className="sma_sub_card">
                <div className="sma_details">
                  <h1 className="sma_title">Give Me a Call on Whatsapp</h1>
                  <h2 className="sma_email">
                    <a
                      className="linka"
                      style={{
                        color: "inherit",
                        textDecoration: "underline",
                      }}
                      href="tel:+94721304013"
                    >
                      +94 78 421 8381
                    </a>
                  </h2>
                </div>
                <div className="sma_details2">
                  <img src="https://i.imgur.com/Ddm9Oz8.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
