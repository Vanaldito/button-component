interface IconProps {
  iconName: string;
}

export default function Icon({ iconName }: IconProps) {
  return <span className="material-icons">{iconName}</span>;
}
