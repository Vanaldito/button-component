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
  className += disableShadow
    ? " button--disable-shadow"
    : " button--enable-shadow";
  className += disabled ? " button--disabled" : " button-enabled";

  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}
