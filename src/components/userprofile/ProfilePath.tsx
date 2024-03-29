"use client";
import { selectDesktop, setProfile } from "@/redux/slices/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { memo } from "react";
import useProfileIcons from "../customHooks/useProfileIcons";
import { logoutUser } from "@/redux/slices/auth/authSlice";
import { useRouter } from "next/navigation";

const ProfilePath = ({
  list,
  title,
  icon
}: {
  list?: [{ name: string; path: string }];
  title: string;
  icon:string
}) => {
  const dispatch = useAppDispatch();
  const desktop = useAppSelector(selectDesktop);
  const router = useRouter();

  const handleProfileNavigate = (target: string) => {
    let newTarget;
    switch (target) {
      case "My Orders":
        newTarget = "orders";
        break;
      case "Refer Dashboard":
        newTarget = "dashboard";
        break;
      case "Profile Information":
        newTarget = "profile";
        break;
      case "Manage Addresses":
        newTarget = "addresses";
        break;
      case "Log out":
        dispatch(logoutUser(null));
        router.push("/");
        break;
      case "Notifications":
        newTarget = "notification";
        break;
      case "Wishlist":
        newTarget = "wishlist";
        break;
      default:
        return;
    }

    if (newTarget) {
      dispatch(setProfile({ profile: newTarget }));
    }
  };

  const isThisSelected = ({
    selected,
    target,
  }: {
    selected: string;
    target: string;
  }) => {
    try {
      let newTarget;
      switch (target) {
        case "Profile Information":
          newTarget = "profile";
          break;
        case "Manage Addresses":
          newTarget = "addresses";
          break;
        case "Notifications":
          newTarget = "notification";
          break;
        case "Wishlist":
          newTarget = "wishlist";
          break;
        default:
          return false;
      }

      if (newTarget === selected) {
        return true;
      }
      return false;
    } catch (error) {
      console.log("Some Internal Error Occured!");
      return false;
    }
  };

  return (
    <div className="bg-white max-md:bg-tertiary-color rounded-lg">
      <div
        onClick={() => handleProfileNavigate(title)}
        className="flex items-center gap-2 p-2 cursor-pointer"
      >
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-primary-color">
          {useProfileIcons({icon})}
        </div>
        <span className="text-base text-gray-500 font-semibold font-lato">
          {title}
        </span>
      </div>
      {!!list && (
        <ul className="text-gray-500 pb-2">
          {list?.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleProfileNavigate(item.name)}
              className={`text-sm pl-[60px] ${
                isThisSelected({ selected: desktop.profile, target: item.name })
                  ? "text-primary-color bg-primary-color/5"
                  : "md:hover:text-primary-color md:hover:bg-primary-color/5"
              } font-medium py-[6px] cursor-pointer smooth_transition`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(ProfilePath);
