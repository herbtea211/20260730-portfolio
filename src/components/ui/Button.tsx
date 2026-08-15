// import Image from "next/image";
import ActionArrow from "@/components/ui/ActionArrow"

interface ButtonProps {
  showLabel: boolean;
  label: string;
}

export default function Button ({showLabel, label}: ButtonProps) {
    return (
        <button
            type="button"
            className="
                flex items-center gap-2
                px-6 py-2
                rounded-full
                bg-primary
                text-background
                hover:bg-transparent
                hover:text-primary
                hover:shadow-[inset_0_0_0_2px_var(--primary)]"
        >
            {showLabel && (
                <span className="font-bold text-subContent leading-subContent tracking-subContent">
                    {label}
                    </span>)}
            <ActionArrow />
        </button>
    )
}