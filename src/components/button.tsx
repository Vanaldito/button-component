import "./button.css";
import Icon from "./icon";

interface ButtonProps {
  variant: "default" | "outline" | "text";
  disableShadow: boolean;
  disabled: boolean;
  startIcon?: string;
  endIcon?: string;
  children: React.ReactNode;
}

export default function Button({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  children,
}: ButtonProps) {
  let className = "button";
  className += ` button--variant-${variant}`;
  className += disableShadow ? " button--disable-shadow" : "";
  className += disabled ? " button--disabled" : "";

  return (
    <button className={className} type="button">
      {startIcon && <Icon iconName={startIcon} />}
      {children}
      {endIcon && <Icon iconName={endIcon} />}
    </button>
  );
}
