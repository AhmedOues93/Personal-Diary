import { useState } from "react";

const EntryForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!title || !date || !image || !content) {
      alert("Please fill in all fields.");
      return;
    }

    
    const newEntry = { title, date, image, content };
    onSave(newEntry);

    
    setTitle("");
    setDate("");
    setImage("");
    setContent("");
  };

 
   return (
  <div className="mt-4 p-0 rounded shadow -md">
    <div className="bg-black/40 backdrop-blur-md p-4 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-lg text-white font-bold mb-2">Add New Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Title"
          className="w-full border text-white p-2 rounded bg-transparent"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="w-full border text-white p-2 rounded bg-transparent"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border text-white p-2 rounded bg-transparent"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          placeholder="Content"
          className="w-full border text-white p-2 rounded bg-transparent"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div className="flex gap-2">
          <button className="btn btn-ghost font-bold bg-blue-500">Add</button>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-ghost font-bold bg-yellow-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
);

};

export default EntryForm;
