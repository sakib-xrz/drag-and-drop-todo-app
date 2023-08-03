import React from "react";
import { RxDragHandleHorizontal, RxCross2 } from "react-icons/rx";

const Card = ({ children, drag = false, onClick }) => {
    return (
        <div className={`px-5 py-2 my-2 rounded-md ${drag && "cursor-grab"}`}>
            <h1 className="bg-gray-100 p-4 text-xl text-gray-800 flex justify-between items-center gap-3 rounded-sm">
                <div className="flex items-center gap-3">
                    <span>
                        <RxDragHandleHorizontal />
                    </span>
                    {children}
                </div>
                <RxCross2 onClick={onClick} className="hover:text-red-600 text-3xl cursor-pointer"/>
            </h1>
        </div>
    );
};

export default Card;
