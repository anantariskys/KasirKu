import React from "react";
import { IconType } from "react-icons";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  width?: "w-full" | "w-fit";
  customWidth?: string;
  size?: "sm" | "md" | "lg";
  leftIcon?: IconType;
  rightIcon?: IconType;
}

const Input = ({
  label,
  error,
  className,
  size = "md",
  disabled = false,
  width = "w-full",
  customWidth,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}: InputProps) => {
  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  const iconSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size];

  return (
    <div className={`${customWidth} ${width} `}>
      {label && (
        <label
          className={`block ${size === "sm" ? "text-xs" : "text-sm"} font-medium ${disabled ? "text-gray-400" : "text-foreground-light"} mb-1`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LeftIcon className={`${iconSize} text-gray-400`} />
          </div>
        )}
        {RightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <RightIcon className={`${iconSize} text-gray-400`} />
          </div>
        )}
        <input
          type="text"
          disabled={disabled}
          className={`w-full rounded-md border disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200 border-tertiary-300 ${textSize} ${
            size === "sm" ? "p-1.5" : size === "lg" ? "p-3" : "p-2"
          } ${LeftIcon ? "pl-10" : ""} ${RightIcon ? "pr-10" : ""} focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            error ? "border-red-500" : ""
          } ${className || ""}`}
          {...props}
        />
      </div>
      {error && (
        <p
          className={`mt-1 ${size === "sm" ? "text-xs" : "text-sm"} text-red-500`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
