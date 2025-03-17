interface Props {
    children: string;
}

function Title({children}: Props) {
    return (
        <div className="row-span-1 row-start-1 row-end-1 custom-grid">
            <h1 className="col-start-2 text-3xl text-center border-b-2 p-1">{children}</h1>
            
            <div className="col-start-3 flex items-center justify-center">
                <button className="w-[42.5px] h-[42.5px] flex items-center justify-center bg-green-400 default-border rounded-xl">+</button>
            </div>
        </div>
    )
}

export default Title;