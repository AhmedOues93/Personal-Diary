import EntryCard from "./EntryCard";

const EntryList = ({ entries, onDelete }) => {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
      {entries.map((entry) => (
        <EntryCard key={entry.date} entry={entry} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EntryList;