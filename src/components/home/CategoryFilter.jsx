const categories = [
  "All",
  "Music",
  "Tech",
  "Sports",
  "Arts",
  "Business",
];

function CategoryFilter() {
  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full border text-sm ${
            category === "All"
              ? "bg-green-700 text-white"
              : "bg-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
