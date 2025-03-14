import Tab from "./Tab";

function Sidebar() {
    return (
        <div className="col-span-1 p-4 bg-gray-300">
            <div className="w-full h-full grid gap-4 auto-rows-[10%] p-4 default-border">
                <Tab></Tab>
            </div>
        </div>
    )
}

export default Sidebar;