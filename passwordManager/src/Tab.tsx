function log() {
    console.log("super");
}

function Tab() {
    return (
        <div className="flex w-full justify-center">
            <button className="w-[95%] h-full border-solid border-black border-1 rounded-3xl" onClick={log}></button>
        </div>
    )
}

export default Tab;