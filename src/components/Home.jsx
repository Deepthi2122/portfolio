import React from "react";
import profileImage from "../assets/deepthi.jpg";

export default function Home() {
  return (
    <div className="page">
      <img src={profileImage} alt="Deepthi Naradasu" className="profile" />
      <h1>Deepthi Naradasu</h1>
      <p>Software Engineer | Full-Stack Developer</p>
      <p>Guntur, India</p>
    </div>
  );
}