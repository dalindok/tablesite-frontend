"use client";
interface FilledButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const FilledButton = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}: FilledButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-primary hover:bg-primary-hover text-sm text-white font-semibold px-6 py-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};

export default FilledButton;
