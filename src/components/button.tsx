import "./button.css";

interface ButtonProps {
  variant: "default" | "outline" | "text";
  disableShadow: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant,
  disableShadow,
  children,
}: ButtonProps) {
  let className = "button";
  className += ` button--variant-${variant}`;
  className += disableShadow
    ? " button--disable-shadow"
    : " button--enable-shadow";

  return (
    <button className={className} type="button">
      {children}
    </button>
  );
}
