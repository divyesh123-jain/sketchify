import { useStrokes } from "@/context/StrokesContext";
import { strokeColors, strokeTaperValues, strokeWidths } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

type props = {
  togglePopoverState: () => void;
};

const StylingPallete: React.FC<props> = ({ togglePopoverState }) => {
  const {
    updateStrokeColor,
    strokeColor,
    updateStrokeWidth,
    strokeWidth,
    strokeTaper,
    updateStrokeTaper,
  } = useStrokes();

  const handleClick = () => {
    setTimeout(() => {
      togglePopoverState();
    }, 500);
  };
  return (
    <div className="flex gap-4 flex-col">
      {/* stroke color */}
      <div className="flex flex-col">
        <h3 className="text-sm mb-1">Stroke Color</h3>
        <div className="flex gap-2">
          {strokeColors.map((color) => (
            <span
              className="w-8 h-8 rounded-md cursor-pointer flex justify-center items-center"
              style={{ backgroundColor: color }}
              key={color}
              onClick={() => {
                updateStrokeColor(color);
                handleClick();
              }}
            >
              {strokeColor === color && (
                <CheckCircle className="w-5 h-5 bg-inherit text-white" />
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm mb-1">Stroke Width</h3>
        <div className="flex gap-2">
          {strokeWidths.map((width) => (
            <span
              className={`w-8 h-8 rounded-md cursor-pointer border flex justify-center items-center ${
                width === strokeWidth ? "bg-primary" : ""
              }`}
              key={width}
              onClick={() => {
                updateStrokeWidth(width);
                handleClick();
              }}
            >
              {width}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm mb-1">Edge Sharpness</h3>
        <div className="flex gap-2">
          {strokeTaperValues.map((width) => (
            <span
              className={`w-8 h-8 rounded-md cursor-pointer border flex justify-center items-center ${
                width === strokeTaper ? "bg-primary" : ""
              }`}
              key={width}
              onClick={() => {
                updateStrokeTaper(width);
                handleClick();
              }}
            >
              {width}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StylingPallete;
