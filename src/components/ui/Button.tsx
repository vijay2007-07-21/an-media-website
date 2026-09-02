import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AnchorProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-black",
  dark: "bg-ink text-white hover:bg-black",
  outline:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  ghost: "text-ink hover:opacity-60",
};

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: AnchorProps) {
  return (
    <a href={href} className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
