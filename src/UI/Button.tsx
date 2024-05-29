import { ReactNode } from "react";

type ButtonChildren = {
  children: string | ReactNode | undefined;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  disabled,
  onClick,
}: ButtonChildren) {
  return (
    <button
      className="rounded-full h-fit px-4 w-fit flex items-center gap-2 hover:bg-slate-200 p-2 border-solid border-2 border-slate-200"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
