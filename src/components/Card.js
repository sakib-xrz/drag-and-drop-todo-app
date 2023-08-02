import React from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";

const Card = ({ children, drag = false }) => {
    return (
        <div className={`px-5 py-2 my-2 rounded-md ${drag && "cursor-grab"}`}>
            <h1 className="bg-gray-100 p-4 text-xl text-gray-800 flex items-center gap-3 rounded-sm">
                <span>
                    <RxDragHandleHorizontal />
                </span>
                {children}
            </h1>
        </div>
    );
};

export default Card;
