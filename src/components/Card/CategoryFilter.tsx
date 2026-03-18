type Props = {
  category: string;
  setCategory: (value: string) => void;
};

export default function CategoryFilter({ category, setCategory }: Props) {
  const categories = ["All", "Starters", "Pasta", "Pizza", "Desserts"];

  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-2 py-1 rounded-xl border text-sm ${
            category === cat
              ? "bg-primary-light text-primary border-primary"
              : "text-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
