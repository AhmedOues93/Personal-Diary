

import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import Fotter from "./components/Fotter";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(storedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    const exist = entries.some((e) => e.date === newEntry.date);
    if (exist) {
      alert("There is already an entry with this date, Write another!");
      return;
    }
    const update = [newEntry, ...entries];
    setEntries(update);
    setShowForm(false);
  };

  const deleteEntry = (date) => {
    const updated = entries.filter((entry) => entry.date !== date);
    setEntries(updated);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/qlzj8wW.jpg')" }}
    >
      {/* Hero Section */}
      {!showForm && (
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl text-gray-800 font-bold">
                Welcome to Your Personal Diary
              </h1>
              <p className="mb-5 text-3xl">
                Write your daily thoughts, emotions, and stories.
              </p>
              <button className="btn btn-primary" onClick={() => setShowForm(true)}>
                Add New Entry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main App Section */}
      {showForm && (
        <div className="bg-black/50 min-h-screen px-4 py-6 backdrop-blur-sm">
          <Header onAdd={() => setShowForm(true)} />
          <EntryForm onSave={addEntry} onCancel={() => setShowForm(false)} />
          <EntryList entries={entries} onDelete={deleteEntry} />
          <Fotter />
        </div>
      )}

      {/* Show entries even if form not showing */}
      {!showForm && entries.length > 0 && (
        <div className="bg-black/40 px-4 py-6 backdrop-blur-sm">
          <EntryList entries={entries} onDelete={deleteEntry} />
          <Fotter />
        </div>
      )}
    </div>
  );
};

export default App;
