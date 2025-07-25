import React from 'react';
import profilePic from '../assets/deepthi.jpg';

export default function Home() {
  return (
    <div className="page">
      <img src={profilePic} alt="Profile" className="profile" />
      <h1 className="text-4xl font-bold mt-4">Deepthi Naradasu</h1>
      <p className="text-lg mt-2">Passionate Software Engineer skilled in Full Stack Development</p>
      <p className="mt-4">I love to build creative and scalable products. Currently exploring AI integration in web platforms.</p>
    </div>
  );
}