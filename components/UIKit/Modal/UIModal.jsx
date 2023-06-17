import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

const UIModal = ({ isModalOpen, setIsModalOpen,data,title }) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className="relative"
    >
      <div className="w-full bg-black opacity-20 h-screen z-99">
      </div>
      <Dialog.Panel className="absolute top-[200px] right-[600px] bg-gray-50  h-[500px] w-[500px] p-[20px] rounded-[5px] z-999">
        <div className="flex justify-between">
          <div className="title">
            <Dialog.Title className="font-semibold text-[20px]">{title}</Dialog.Title>
          </div>
          <div className="close" onClick={() => setIsModalOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                fill="rgba(201,1,1,1)"
              ></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-flow-row gap-4 mt-8">
          <div className="flex w-full justify-between">
            <div className="w-[50%]"><p className="text-[18px] font-semibold">Name</p></div>
            <div className="w-[50%]"><p className="text-[18px] font-semibold">{data.firstName}</p></div>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-[50%]"><p className="text-[18px] font-semibold">Email</p></div>
            <div className="w-[50%]"><p className="text-[18px] font-semibold">{data.email}</p></div>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-[50%]"><p className="text-[18px] font-semibold">Contact</p></div>
            <div className="w-[50%]"><p className="text-[18px] font-semibold">{data.phone}</p></div>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-[50%]"><p className="text-[18px] font-semibold">Address</p></div>
            <div className="w-[50%]"><p className="text-[18px] font-semibold">{data.address?.address}</p></div>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-[50%]"><p className="text-[18px] font-semibold">Bank</p></div>
            <div className="w-[50%]"><p className="text-[18px] font-semibold">{data.bank?.cardNumber}</p></div>
          </div>
        </div>

        <button onClick={() => setIsModalOpen(false)}></button>
      </Dialog.Panel>

    </Dialog>
  );
};

export default UIModal;
