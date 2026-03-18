"use client";
interface DestinationCardProps {
  label: string;
  imageURL: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}
const DestinationCard1 = ({
  label,
  imageURL,
  onClick,
  variant = "primary",
  disabled = false,
}: DestinationCardProps) => {
  return (
    <div className="relative">
      <img
        src={imageURL}
        alt={label}
        className="w-[600] h-[360] object-cover rounded-3xl"
      />
      <div className=" absolute top-80 left-2 bg-emerald-50 px-2 py-1 rounded-2xl ">
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};

export default DestinationCard1;
