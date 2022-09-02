import "./button.css";
import Icon from "./icon";

interface ButtonProps {
  variant?: "default" | "outline" | "text";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  disableShadow = false,
  disabled = false,
  size = "md",
  color = "default",
  startIcon,
  endIcon,
  children,
}: ButtonProps) {
  let className = "button";
  className += ` button--variant-${variant}`;
  className += disableShadow ? " button--disable-shadow" : "";
  className += disabled ? " button--disabled" : "";
  className += ` button--size-${size}`;
  className += ` button--color-${color}`;

  return (
    <button className={className} type="button">
      {startIcon && <Icon iconName={startIcon} />}
      {children}
      {endIcon && <Icon iconName={endIcon} />}
    </button>
  );
}
