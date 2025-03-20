
interface Props {
    selectedWebsite?: string;
    onClick: (x: string | boolean) => void;
    tabData: string;
}

function Tab({selectedWebsite, tabData, onClick}: Props) {

    return (
        <div className="flex w-full justify-center">
            <button onClick={() => onClick(false)} className={"w-[95%] h-full default-border rounded-3xl" + (tabData == selectedWebsite ? " bg-blue-300" : "")}>
                {tabData}
            </button>
        </div>
    )
}

export default Tab;