

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

  return (
    <div className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/qlzj8wW.jpg')" }}
    >
      {/* Hero Section */}
      {!showForm && (
        <div className="hero min-h-screen  ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl  text-gray-800 font-bold">Welcome to Your Personal Diary</h1>
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

      {/* Main App */}
      {showForm && (
        <div className="p-4  bg-opacity-50">
          <Header onAdd={() => setShowForm(true)} />
          <EntryForm onSave={addEntry} onCancel={() => setShowForm(false)} />
          <EntryList entries={entries} />
          <Fotter />
        </div>
      )}
    </div>
  );
};

export default App;