type Props = {
  title: string;
  value: string;
};

export default function InfoCard({ title, value }: Props) {
  return (
    <div className="bg-gray-100 rounded-xl p-5">
      <p className=" text-text-muted uppercase text-xs font-semibold">
        {title}
      </p>
      <p className="mt-2 font-semibold text-sm">{value}</p>
    </div>
  );
}
