import "./button.css";

interface ButtonProps {
  variant: "default" | "outline" | "text";
  disableShadow: boolean;
  disabled: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant,
  disableShadow,
  disabled,
  children,
}: ButtonProps) {
  let className = "button";
  className += ` button--variant-${variant}`;
  className += disableShadow ? " button--disable-shadow" : "";
  className += disabled ? " button--disabled" : "";

  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}
