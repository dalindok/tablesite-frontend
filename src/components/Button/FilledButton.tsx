"use client";
interface FilledButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const FilledButton = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: FilledButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      //   className={`${baseClasses} ${variants[variant]} ${
      //     disabled ? "opacity-50 cursor-not-allowed" : ""
      //   }`}
      className="bg-primary hover:bg-primary-hover text-sm text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 cursor-pointer "
    >
      {label}
    </button>
  );
};

export default FilledButton;
