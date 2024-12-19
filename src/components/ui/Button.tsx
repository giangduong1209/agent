import { ReactNode } from "react";

const Button = ({
  className,
  mode,
  children,
}: {
  className?: string;
  mode?: string;
  children: ReactNode;
}) => {
  return (
    <button
      className={`px-2 lg:px-5 py-2 bg-gradient-to-r from-[#676FC5]/50 from-5% to-[#676FC5] text-white rounded-[24px] ${
        mode === "default"
          ? "bg-none text-[#676FC5] border border-[#676FC5]"
          : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
