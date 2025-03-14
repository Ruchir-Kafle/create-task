function log() {
    console.log("super");
}

function Tab() {
    return (
        <div className="flex w-full justify-center">
            <button className="w-[95%] h-full default-border" onClick={log}></button>
        </div>
    )
}

export default Tab;