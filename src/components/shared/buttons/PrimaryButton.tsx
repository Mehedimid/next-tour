import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<typeof Button> {
  label: string;
  fromColor?: string;  
  toColor?: string;    
  textColor?: string; 
}

const PrimaryButton = ({
  label,
  className = "",
  fromColor = "bg-black",
  toColor = "bg-orange-500",
  textColor = "text-white",
  ...props
}: ButtonProps) => {
  return (
    <Button
      className={clsx(
        "cursor-pointer group relative overflow-hidden rounded-full transition-all duration-300 ease-in-out",
        fromColor,
        textColor,
        className
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
      <div className="relative z-10 flex items-center justify-center px-6 py-3">
        <span className="mr-2">{label}</span>
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </Button>
  );
};

export default PrimaryButton;
