import { useState } from "react";

function PopUp() {
    const [close, setClose] = useState(false);

    return (
        <div className={"w-screen h-screen absolute top-0 left-0" + (close ? " hidden" : "")}>

            <div className="w-screen h-screen opacity-75 bg-gray-700"></div>

            <div className="flex justify-end items-start h-[75%] w-[50%] p-1 absolute top-[12.5%] left-[25%] opacity-100 bg-white default-border">
                <button className="w-[62.5px] h-[62.5px] bg-red-400 text-gray-700 text-3xl default-border" onClick={() => setClose(true)}>X</button>
            </div>
        </div>
    )
}

export default PopUp;