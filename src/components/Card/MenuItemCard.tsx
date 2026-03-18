type Props = {
  item: {
    img: string;
    name: string;
    description: string;
    price: string;
  };
};

export default function MenuItemCard({ item }: Props) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 flex gap-4">
      <div className="w-16 h-16  rounded-lg">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-text-muted">{item.description}</p>
        <p className="text-primary font-semibold mt-2">{item.price}</p>
      </div>
    </div>
  );
}
