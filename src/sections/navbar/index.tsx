"use client";
import { mobileNavbar } from "@/data";
import { HiHome, HiBell } from "react-icons/hi";
import { HiWallet, HiUserCircle } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { memo, useCallback, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectDesktop,
  setMobileProfileMenu,
  setProfile,
} from "@/redux/slices/app/appSlice";

const MobileNavbar = () => {
  const [selected, setSelected] = useState(0);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(selectDesktop);

  const handleMobileNavbar = useCallback(
    ({ target }: { target: string }) => {
      if (target === "home" || target === "cart" || target === "profile") {
        dispatch(setProfile({ profile: "profile" }));
        dispatch(setMobileProfileMenu({ isProfileMenuOpen: true }));
        return;
      }

      dispatch(setProfile({ profile: target }));
      dispatch(setMobileProfileMenu({ isProfileMenuOpen: false }));
    },
    [selected]
  );

  useLayoutEffect(() => {
    if (pathname === "/") setSelected(0);
    if (pathname === "/user/cart") setSelected(4);
    else if (pathname.startsWith("/user/")) {
      switch (profile) {
        case "profile":
          setSelected(3);
          break;
        case "notification":
          setSelected(1);
          break;
        case "dashboard":
          setSelected(2);
          break;
        default:
          setSelected(3);
      }
    }
  }, [pathname, profile]);

  return (
    <nav
      className={`fixed md:hidden bottom-0 left-0 w-full z-30 p-4 border-t border-secondary-color bg-white ${
        pathname === "/search" && "hidden"
      }`}
    >
      <ul className="flex items-center justify-between">
        {mobileNavbar.map((nav, idx) => (
          <li
            onClick={() => setSelected(idx)}
            key={nav.name}
            className={`cursor-pointer ${
              selected === idx ? "text-primary-color" : ""
            } smooth_transition`}
          >
            <Link href={nav.path}>
              {(() => {
                switch (nav.name) {
                  case "Home":
                    return (
                      <HiHome
                        onClick={() => handleMobileNavbar({ target: "home" })}
                        size={24}
                      />
                    );
                  case "Notifications":
                    return (
                      <HiBell
                        onClick={() =>
                          handleMobileNavbar({ target: "notification" })
                        }
                        size={24}
                      />
                    );
                  case "Wallet":
                    return (
                      <HiWallet
                        onClick={() =>
                          handleMobileNavbar({ target: "dashboard" })
                        }
                        size={24}
                      />
                    );
                  case "User":
                    return (
                      <HiUserCircle
                        onClick={() =>
                          handleMobileNavbar({ target: "profile" })
                        }
                        size={24}
                      />
                    );
                  case "Cart":
                    return (
                      <FaCartShopping
                        onClick={() => handleMobileNavbar({ target: "cart" })}
                        size={24}
                      />
                    );
                  default:
                    return;
                }
              })()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(MobileNavbar);
