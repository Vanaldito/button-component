import "./button.css";

interface ButtonProps {
  variant: "default" | "outline" | "text";
  children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  let className = "button";
  className += ` button--variant-${variant}`;

  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}
