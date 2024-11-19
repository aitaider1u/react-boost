import { useState } from "react";
import { createPortal } from "react-dom";
import ModelContent from "./ModelContent"

function ListCard({country}) {
    const [showModal,setShowModal] = useState(false)

    return(
        <>
                <li onClick={() => setShowModal(s => !s) }
         className="relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform">
            <h2 className="absolute left-0 top-0 p-2 bg-gray-50 drop-shadow text-xl rounded"> {country.name.common}</h2>
            <img src={country.flags.svg} alt=""  className="w-full h-full object-cover rounded"/>
        </li>
        {showModal && createPortal(<ModelContent country={country} closeModal={()=> setShowModal(!showModal)}/>,document.body)}
        </>

    );
}

export default ListCard;