import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import Fotter from "./components/Fotter";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);

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
      alert("There is already an entry in  this date, Write it  another day!");
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
  {!showForm && (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to Your Personal Diary
          </h1>
          <p className="mb-5 text-3xl">
            Write your daily thoughts, emotions, and stories.
          </p>
          <div className="space-x-4">
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              ➕ Add New Entry
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShowList(!showList)}
            >
              📖 {showList ? "Hide Entries" : "Show Entries"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )}

  {showForm && (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className=" w-full max-w-xl">
        <Header onAdd={() => setShowForm(true)} />
        <EntryForm onSave={addEntry} onCancel={() => setShowForm(false)} />
      </div>
    </div>
  )}

  {showList && (
    <div className="flex justify-center p-4">
     <div className="p-4 sm:p-6 rounded-lg w-full">
  <EntryList entries={entries} onDelete={deleteEntry} />
</div>
    </div>
  )}

  <Fotter />
</div>

  );
};

export default App;
