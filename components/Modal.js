"use client";

import { IoMdCloseCircleOutline } from "react-icons/io";

const SearchModal = ({ openModal, isOpen, children }) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") openModal();
  };
  return (
    <>
      {isOpen ? (
        <div
          id="wrapper"
          className="
  fixed
  inset-0
  z-30
  flex
  cursor-pointer
  items-center
  justify-center
  bg-black
  bg-opacity-50
  backdrop-blur-sm
  "
          onClick={handleClose}
        >
          <div className="flex w-[600px] flex-col">
            {/* <button className=" text-white" onClick={openModal}>
              <IoMdCloseCircleOutline size={24} />
            </button> */}
            <div className="rounded  p-2">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchModal;
