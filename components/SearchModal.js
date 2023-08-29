"use client";

import { IoMdCloseCircleOutline } from "react-icons/io";

const SearchModal = ({ openModal, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div
          className="
  fixed
  inset-0
  bg-black
  bg-opacity-50
  backdrop-blur-sm
  flex
  justify-center
  items-center
  z-10
  "
        >
          <div className="w-[600px] flex flex-col">
            <button className="text-white" onClick={openModal}>
              <IoMdCloseCircleOutline size={24} />
            </button>
            <div className="bg-white p-4 rounded">our Modal</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchModal;
