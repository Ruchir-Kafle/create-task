import Tab from "./Tab";

function Sidebar() {
    return (
        <div className="col-span-1 grid gap-4 auto-rows-[10%] p-4 m-4 border-solid border-black border-1 rounded-3xl">
            <Tab></Tab>
        </div>
    )
}

export default Sidebar;