"use client";

interface IOutlinedButton {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}
const OutlinedButton = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: IOutlinedButton) => {
  return (
    <button
      onClick={onClick}
      className="text-black font-semibold text-sm px-6 py-2 rounded-lg border border-gray-300 hover:border-primary hover:text-primary cursor-pointer"
    >
      {label}
    </button>
  );
};

export default OutlinedButton;
