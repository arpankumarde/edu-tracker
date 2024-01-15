const SortButton = ({ sortBlogs }) => {
  return (
    <button
      className="p-2 mb-4 rounded-md w-full select-none bg-gray-800 text-white transition-all shadow-md hover:shadow-xl"
      onClick={sortBlogs}
    >
      Sort by Date
    </button>
  );
};

export default SortButton;
