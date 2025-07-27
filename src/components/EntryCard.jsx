const EntryCard = ({ entry, onDelete }) => {
    
    if (!entry) return null;
  return (
    
    <div className=" text-white  bg-black/40  shadow-md rounded-xl p-4  relative">
        
      <button
        onClick={() => onDelete(entry.date)}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition"
        title="Delete entry"
      >
        🗑️
      </button>
       {entry.imageUrl && (
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
      )}
      <h2 className="text-xl font-bold mb-2">📝 {entry.title}</h2>

      <p className="text-sm text-gray-300 mb-1">📅 {entry.date}</p>
      <p className="whitespace-pre-wrap text-gray-100">{entry.content}</p>
    </div>
  );
};

export default EntryCard;
