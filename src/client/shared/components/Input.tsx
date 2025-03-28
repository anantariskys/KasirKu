import React from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

const Input = ({
  label,
  error,
  className,
  size = "md",
  ...props
}: InputProps) => {
  const textSize = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  return (
    <div className="w-full">
      {label && (
        <label
          className={`block ${size === "sm" ? "text-xs" : "text-sm"} font-medium text-foreground-light mb-1`}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        className={`w-full rounded-md border border-tertiary-300 ${textSize} ${
          size === "sm" ? "p-1.5" : size === "lg" ? "p-3" : "p-2"
        } focus:outline-none focus:ring-2 focus:ring-primary-500 ${
          error ? "border-red-500" : ""
        } ${className || ""}`}
        {...props}
      />
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
