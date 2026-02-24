"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-heading font-semibold shadow-accent-glow hover:shadow-accent-glow-lg hover:brightness-110 active:brightness-90",
  outline:
    "border border-accent/50 text-accent bg-transparent hover:bg-accent/10 hover:border-accent active:bg-accent/15",
  ghost:
    "text-text bg-transparent hover:text-accent hover:bg-surface active:bg-surface",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2.5 text-xs tracking-wide min-h-[44px]",
  md: "px-6 py-3 text-sm tracking-wide min-h-[44px]",
  lg: "px-8 py-3.5 text-base tracking-wide min-h-[48px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase",
    "transition-all duration-200 ease-out",
    "disabled:opacity-40 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
