import { ListType } from "@/components/filter/FilterField";
import { ReadonlyURLSearchParams } from "next/navigation";

export const shortProductTitle = ({ title }: { title: string }) => {
  return `${title.slice(0, 18)}...`;
};

export const calculateDiscountedPrice = (price:number | undefined, discount:number | undefined) => {
    try {
      if(price && discount){
        const finalPrice = parseFloat((price - (discount*price)/100).toFixed(2));
        return finalPrice;
      }
    } catch (error) {
      console.log(error);
    }
  }

export const checkIsSelected = ({
  list,
  value,
}: {
  list: [ListType];
  value: string;
}) => {
  const isFound = list.find((item) => item.value === value);
  if (isFound) {
    return true;
  }
  return false;
};

export interface HandleSelectUtilType {
  isSort: boolean;
  setSelected: Function;
  selected: ListType | ListType[];
  target: ListType;
}

export const handleSelectUtil = ({
  isSort,
  setSelected,
  selected,
  target,
}: HandleSelectUtilType) => {

  if (isSort) {
    setSelected(target);
  } else {
    const newSelected = [...(selected as [ListType])];
    const isExist = newSelected.find((item) => item.value === target.value);

    if (!isExist) {
      newSelected.push({...target});
      setSelected(newSelected);
    } else {
      const filtered = newSelected.filter(
        (item) => item.value !== target.value
      );
      setSelected(filtered);
    }
  }
};

export const createURL = (pathname:string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length? "?" : ""}${paramsString}`
  return `${pathname}${queryString}`
}

export const isItemExist = (productId:string, items:string[]):boolean => {
  const isExist = items.find((item) => productId == item);
  return isExist? true : false
}