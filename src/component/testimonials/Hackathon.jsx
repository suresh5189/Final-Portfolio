import React from "react";
import "./testimonials.css";

const Hackathon = () => {
  return (
    <section id="testimonials">
      <h5>Education</h5>
      <h2>Certifications</h2>
      <h4>Hackathons</h4>
      <div className="container testimonials_container">
        <div className="certificate">
          <div className="certificate_title">
            <h3>SRM TECHNO Hackathon</h3>
            <div className="certificate_details">
            <a href="https://drive.google.com/file/d/1BRPugkQWYmkFe1pe9VUJDYMRpo8HQCps/view?usp=drivesdk" target="_blank" rel="noreferrer"><span>SRMIST</span></a> - 2023
            </div>
          </div>
        </div>
        <div className="certificate">
          <div className="certificate_title">
            <h3>Debunkathon</h3>
            <div className="certificate_details">
            <a href="https://unstop.com/certificate-preview/e9953a28-e094-4d7c-9eb8-bd81e76420eb" target="_blank" rel="noreferrer"><span> Indian Institute of Technology IIT, Madras</span></a> - 2023
            </div>
          </div>
        </div>
        <div className="certificate">
          <div className="certificate_title">
            <h3>Flipkart GRiD 4.0 - Software Development Challenge</h3>
            <div className="certificate_details">
            <a href="https://unstop.com/certificate-preview/62f0efd5-c524-4465-a1a4-b4ac64ed1a11" target="_blank" rel="noreferrer"><span>Flipkart</span></a> - 2022
            </div>
          </div>
        </div>
        <div className="certificate">
          <div className="certificate_title">
            <h3>Optum Stratethon: E-Track</h3>
            <div className="certificate_details">
            <a href="https://unstop.com/certificate-preview/fc4c4d12-49e5-4a36-b915-78b291d58df6" target="_blank" rel="noreferrer"><span>Optum</span></a> - 2022
            </div>
          </div>
        </div>
        <div className="certificate">
          <div className="certificate_title">
            <h3>Mesohacks</h3>
            <div className="certificate_details">
            <a href="https://certificate.givemycertificate.com/c/1c7c4fe8-4909-4af7-a491-9ea073de671a" target="_blank" rel="noreferrer"><span>Mesohacks</span></a> - 2022
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
