import { useCallback } from "react";

interface Props {
    setClosed?: React.Dispatch<React.SetStateAction<boolean>>;
    setType?: React.Dispatch<React.SetStateAction<string>>;
    setSelectedTab?: React.Dispatch<React.SetStateAction<string>>;
    selectedTab?: string;
    tabData: object | string;
}

function Tab({setClosed, setType, setSelectedTab, selectedTab, tabData}: Props) {

    const openMenu = useCallback(() => {
        if (setType && setClosed) {
            setClosed(false);
            setType("Account Creation");
        } else {
            if (setSelectedTab && typeof tabData == "string") {
                setSelectedTab(tabData);
                console.log(tabData, selectedTab)
            }
        }
    }, [setClosed, setType])

    return (
        <div className="flex w-full justify-center">
            <button onClick={() => openMenu()} className={"w-[95%] h-full default-border rounded-3xl" + (tabData == selectedTab ? " bg-blue-300" : "")}></button>
        </div>
    )
}

export default Tab;