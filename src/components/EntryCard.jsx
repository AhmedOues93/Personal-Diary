const EntryCard = ({ entry, onDelete }) => {
  return (
    <div className="bg-black/40 text-white shadow-md rounded-xl p-4 backdrop-blur-sm relative">
      <button
        onClick={() => onDelete(entry.date)}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition"
        title="Delete entry"
      >
        🗑️
      </button>
      <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
      <p className="text-sm text-gray-300 mb-1">📅 {entry.date}</p>
      <p className="whitespace-pre-wrap text-gray-100">{entry.content}</p>
    </div>
  );
};

export default EntryCard;
