import React from "react";
import { Button } from "flowbite-react";
import classNames from "classnames";

interface CustomButtonProps {
  hoverBgColor?: string; // Tailwind hover bg color class, e.g., "hover:bg-red-500"
  className?: string; // Additional custom classes
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  hoverBgColor = "!hover:bg-accent", // Default hover color
  className,
  children,
  ...props
}) => {
  return (
    <Button
      size="sm"
      className={classNames(
        "bg-secondary transition duration-300 ease-in-out", // Optional for smooth hover effect
        hoverBgColor,
        className // Allow combining other classes
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
