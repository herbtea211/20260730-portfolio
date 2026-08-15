// import Image from "next/image";
import ActionArrow from "@/components/ui/ActionArrow"

interface ButtonProps {
  showLabel: boolean;
}

export default function Button ({ showLabel }: ButtonProps) {
    return (
        <button
            type="button"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary" 
        >
        {showLabel && <span>專案</span>}
        <ActionArrow />
        </button>
    )
}