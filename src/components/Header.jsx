const Header = ({ onAdd }) => {
  return (
    <header className="flex justify-between items-center m-20">
      <h1 className="text-5xl font-bold ">My Personal Diary</h1>
      <button
        onClick={onAdd}
        className="btn btn-wide bg-blue-500 font-bold text-xl">
      
        Add Entry
      </button>
    </header>
  );
};

export default Header;
