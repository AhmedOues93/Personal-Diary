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
    <div className=" bg-opacity-50 p-4  border-2 rounded shadow mt-4">
      <h2 className="text-lg  text-white font-bold mb-2">Add New Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Title"
          className="w-full border  text-white p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="w-full border text-white  p-2 rounded"
          
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border   text-white p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          placeholder="Content"
          className="w-full border text-white  p-2 rounded"

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
  );
};

export default EntryForm;
