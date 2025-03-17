interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

function Tab({setClosed}: Props) {
    return (
        <div className="flex w-full justify-center">
            <button onClick={() => setClosed(false)} className="w-[95%] h-full default-border rounded-3xl"></button>
        </div>
    )
}

export default Tab;