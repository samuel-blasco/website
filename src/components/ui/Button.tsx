import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-[#0F7EA8] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#096785] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}