const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="search"
      className="px-4 py-3 mb-4 w-full bg-gray-100 rounded-md outline-1 outline-gray-300"
      placeholder="Search posts by title"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
