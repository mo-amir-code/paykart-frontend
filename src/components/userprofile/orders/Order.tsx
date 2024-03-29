import orderImg from "@/assets/productsImage/dummy2.png"
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";


const Order = ({isFirst}:{isFirst?:boolean}) => {
  return (
    <div className={`flex items-center py-4 gap-4 border-b ${isFirst && "border-t"} relative smooth_transition group md:hover:bg-tertiary-color px-2`} >
        <div className="w-[60px] max-sm:w-[40px]" >
            <Image src={orderImg} alt="order" />
        </div>
        <div>
            <span className="text-secondary-color max-sm:text-sm" >Delivery on Jan 16</span>
            <p className="text-sm text-gray-500 max-sm:text-xs" >Ultra Smartwatch with ulimited battery</p>
        </div>
        <span className="absolute top-1/2 group-hover:bg-tertiary-color -translate-y-1/2 right-2 bg-white p-4" >
           <MdKeyboardArrowRight size={20} />
        </span>
    </div>
  )
}

export default Order