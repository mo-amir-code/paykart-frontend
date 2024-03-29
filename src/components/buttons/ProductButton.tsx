import { GiElectric } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { memo } from "react";

const ProductButton = ({
  text,
  btnAction,
  icon,
}: {
  text: string;
  btnAction: Function;
  icon: string;
}) => {
  return (
    <button
      onClick={() => btnAction(icon)}
      className="flex items-center gap-1 text-text-color justify-center w-full smooth_transition md:hover:shadow-md bg-primary-color font-poppins border rounded-sm py-2 font-bold max-md:text-xs max-md:font-semibold"
    >
      {(() => {
        switch (icon) {
          case "buy":
            return <GiElectric size={20} />;
          case "cart":
            return <FaCartShopping size={20} />;
          default:
            return;
        }
      })()}
      <span>{text}</span>
    </button>
  );
};

export default memo(ProductButton);
