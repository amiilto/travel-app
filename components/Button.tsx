import Image from "next/image";

interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className={`flexCenter gap-3 rounded-full border ${props.variant}`}
    >
      {props.icon && (
        <Image src={props.icon} alt={props.icon} width={24} height={24} />
      )}
      <label className="bold-16 whitespace-nowrap">{props.title}</label>
    </button>
  );
}
