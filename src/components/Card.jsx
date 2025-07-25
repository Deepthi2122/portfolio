import React from "react";

export default function Card({ title, items = [], description }) {
  return (
    <div className="card">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      {description ? (
        <p>{description}</p>
      ) : (
        <ul className="list-disc list-inside">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}