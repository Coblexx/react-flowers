import { ReactNode } from "react";

type ButtonChildren = {
  children: string | ReactNode | undefined;
  secondary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  secondary,
  disabled,
  onClick,
}: ButtonChildren) {
  const styles = `${
    secondary
      ? ""
      : "rounded-full h-fit px-4 w-fit flex items-center gap-2 hover:bg-slate-200 p-2 border-solid border-2 border-slate-200"
  }`;

  return (
    <button className={styles} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
