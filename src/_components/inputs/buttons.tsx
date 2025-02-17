import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export const MyButton: React.FC<ButtonType> = ({
  children,
  className,
  onClickHandler,
  type,
}) => {
  return (
    <Button
      type={type == "submit" ? "submit" : "button"}
      onClick={onClickHandler}
      className={`${className} py-4 hover:cursor-pointer`}
    >
      {children}
    </Button>
  );
};

interface ButtonType {
  type: string;
  children: ReactNode;
  className: string;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}
