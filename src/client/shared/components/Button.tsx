import Link from "next/link";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "primary-outline"
  | "secondary-outline"
  | "tertiary-outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: "full" | "fit";
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-foreground-dark hover:bg-primary-600",
  secondary: "bg-secondary-500 text-foreground-dark hover:bg-secondary-600",
  tertiary: "bg-tertiary-500 text-foreground-dark hover:bg-tertiary-600",
  "primary-outline":
    "border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-foreground-dark",
  "secondary-outline":
    "border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-foreground-dark",
  "tertiary-outline":
    "border border-tertiary-500 text-tertiary-500 hover:bg-tertiary-500 hover:text-foreground-dark",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  width = "fit",
  ...props
}: ButtonProps) => {
  const baseClasses = [
    "rounded-md",
    "font-medium",
    "transition-colors",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    width === "full" ? "w-full" : "w-fit",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
