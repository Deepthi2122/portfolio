import React from "react";

export default function Projects() {
  return (
    <div className="page">
      <h2>Projects</h2>

      <div className="project">
        <h3>Hotel Booking Website</h3>
        <p>
          A fully responsive hotel booking site built using HTML, CSS, and JavaScript.
          Users can browse available rooms, check availability with a calendar,
          and fill out a form to book their stay. The project focuses on smooth UI,
          real-time validation, and mobile-friendly layout.
        </p>
        <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript</p>
      </div>

      <div className="project">
        <h3>AI-Powered Python Quiz System</h3>
        <p>
          A command-line quiz application built in Python that leverages data structures
          like trees, heaps, and stacks. It dynamically generates questions based on
          user performance. Trees are used for topic organization, heaps for prioritizing
          difficulty levels, and stacks to allow navigation between questions.
        </p>
        <p><strong>Tech Stack:</strong> Python, Trees, Heaps, Stacks</p>
      </div>

      <div className="project">
        <h3>Firefighting Robot Simulation</h3>
        <p>
          A simulated firefighting robot designed using Tinkercad and programmed with
          Arduino logic. It uses IR sensors to detect fire sources and moves autonomously
          toward the flame. The robot is capable of simulating fire extinguishing using
          a virtual water pump mechanism.
        </p>
        <p><strong>Tech Stack:</strong> Tinkercad, Arduino IDE, IR Sensor, Motor Driver</p>
      </div>
    </div>
  );
}
