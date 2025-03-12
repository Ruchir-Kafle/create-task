function PopUp() {
    return (
        <div className="w-screen h-screen absolute top-0 left-0">

            <div className="w-screen h-screen opacity-75 bg-gray-700"></div>

            <div className="flex h-[75%] w-[50%] absolute top-[12.5%] left-[25%] opacity-100 bg-white rounded-3xl border-black border-1">
                <button className="p-2 text-gray-500 text-3xl border-black border-1">X</button>
            </div>
        </div>
    )
}

export default PopUp;