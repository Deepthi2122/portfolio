import React from "react";
import Card from "./Card";

export default function Skills() {
  return (
    <div className="content">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Languages" items={["Python", "C++", "JavaScript", "SQL"]} />
        <Card title="Web Development" items={["HTML", "CSS", "React", "Tailwind CSS"]} />
        <Card title="Other Skills" items={["Git", "Data Structures & Algorithms", "Problem Solving"]} />
      </div>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Languages I Speak</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="English" description="Full Professional Proficiency" />
        <Card title="Telugu" description="Native" />
        <Card title="Hindi" description="Working Proficiency" />
      </div>
    </div>
  );
}