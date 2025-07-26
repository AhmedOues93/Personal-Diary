import React from "react";

const EntryCard = ({ entry }) => {
  return (
    <div className="bg-black/40  bg-opacity-80 shadow-md rounded-lg p-4 m-10">
      <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
      <p className="text-sm text-gray-600 mb-1">🗓️ {entry.date}</p>
      <p className="text-gray-800 whitespace-pre-wrap">{entry.content}</p>
    </div>
  );
};

export default EntryCard;
