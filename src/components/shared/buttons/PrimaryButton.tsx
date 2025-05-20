import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<typeof Button> {
  label: string;
  fromColor?: string;
  toColor?: string;
  textColor?: string;
  padding?:string
}

const PrimaryButton = ({
  label,
  className = "",
  fromColor = "bg-black",
  toColor = "bg-orange-500",
  textColor = "",
  padding="",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "cursor-pointer group relative overflow-hidden rounded-full transition-all duration-300 ease-in-out ",
        fromColor,
        textColor || "text-white",
        className,
        padding || "md:px-6 py-1 md:py-2"
      )}
      {...props}
    >
      {/* Animated hover background */}
      <div
        className={clsx(
          "absolute inset-0 z-0 transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0",
          toColor
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-6">
        <span className="mr-2">{label}</span>
        <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
};

export default PrimaryButton;
