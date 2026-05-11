type Props = {
  categories: string[];
  category: string;
  setCategory: (value: string) => void;
};

export default function CategoryFilter({
  categories,
  category,
  setCategory,
}: Props) {
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
