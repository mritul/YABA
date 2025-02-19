import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import { IconMail, IconNotification } from "../assets/icons";
import Logo from "../assets/images/logo.png";
import { IHeaderProps } from "../types/interface";

const Header: React.FC<IHeaderProps> = () => {
  // const linkNames = [
  //   "overview",
  //   "transaction",
  //   "analytics",
  //   "wallet",
  //   "invoice",
  //   "account",
  //   "settings",
  // ];
  return (
    <>
      <div className="navbar bg-base-100 z-10 sticky top-0 bg-none px-8">
        <div className="navbar-start">
          <NextLink href="/">
            <div className="pl-2 cursor-pointer">
              <Image src={Logo} alt="logo" width={32} height={32} />
            </div>
          </NextLink>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle text-accent">
            <IconMail />
          </button>
          <button className="btn btn-ghost btn-circle text-accent">
            <div className="indicator">
              <IconNotification />
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            </div>
          </button>
          <button className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
              <div className="w-6 rounded-full">
                <Image
                  src="https://placeimg.com/80/80/people"
                  alt="avatar"
                  height={80}
                  width={80}
                />
              </div>
            </label>
            <ul
              tabIndex={1}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NextLink href={"/profile"}>
                  <span>Profile</span>
                </NextLink>
              </li>

              <li>
                <NextLink href={"/settings"}>
                  <span>Settings</span>
                </NextLink>
              </li>

              <li>
                <NextLink href={"/logout"}>
                  <span>Logout</span>
                </NextLink>
              </li>
            </ul>
          </button>
          <button className="btn btn-ghost btn-circle text-accent">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                data-toggle-theme="light,night"
                data-act-class="ACTIVECLASS"
              />
              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </button>
        </div>
      </div>

      {/* <div className="navbar bg-base-100 fixed top-0 z-20 ">
        <div className="navbar-start">
          <div className="navbar-brand sm:hidden md:block">
            <NextLink href="/">
              <span className="flex items-center">
                <Image src={Logo} alt="logo" width={50} height={50} />
              </span>
            </NextLink>
          </div>
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <IconMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkNames.map((name, index) => {
                return (
                  <NextLink href={"/" + name} key={index}>
                    <li className="">
                      <div className="capitalize">{name}</div>
                    </li>
                  </NextLink>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className="normal-case text-xl font-bold">yaba.</div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <IconMail />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IconNotification />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
         
      </div> */}
    </>
  );
};
export default Header;
