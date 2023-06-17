import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="side-wrapper fixed top-0 left-0 h-screen">
      <p>Repliq Task</p>
      <div className="mt-8">
        <div className="py-[10px] px-2">
          <Link href="/customer-add">
            <div className="flex w-full items-center">
              <div className="w-[30%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path
                    d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"
                    fill="rgba(250,250,250,1)"
                  ></path>
                </svg>
              </div>
              <div className="w-[70%] text-[20px] text-white">Add Customer</div>
            </div>
          </Link>
        </div>
        <div className="py-[10px] px-2">
          <Link href="/customer-list">
            <div className="flex w-full items-center">
              <div className="w-[30%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H13V17H8V15Z"
                    fill="rgba(251,251,251,1)"
                  ></path>
                </svg>
              </div>
              <div className="w-[70%] text-[20px] text-white">
                Customer List
              </div>
            </div>
          </Link>
        </div>
        <div className="py-[10px] px-2">
          <Link href="/order-list">
            <div className="flex w-full items-center">
              <div className="w-[30%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path
                    d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H13V17H8V15Z"
                    fill="rgba(251,251,251,1)"
                  ></path>
                </svg>
              </div>
              <div className="w-[70%] text-[20px] text-white">
                Order List
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
