interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setType?: React.Dispatch<React.SetStateAction<string>>;
}

function openMenu(setClosed: React.Dispatch<React.SetStateAction<boolean>>, setType: React.Dispatch<React.SetStateAction<string>> | undefined) {
    if (setType) {
        setClosed(false);
        setType("Account Creation");
    } else {
        console.log("get data")
    }
}

function Tab({setClosed, setType}: Props) {
    return (
        <div className="flex w-full justify-center">
            <button onClick={() => openMenu(setClosed, setType)} className="w-[95%] h-full default-border rounded-3xl"></button>
        </div>
    )
}

export default Tab;