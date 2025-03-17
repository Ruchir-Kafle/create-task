interface Props {
    children: string;
}

function Title({children}: Props) {
    return (
        <div className="row-span-1 row-start-1 row-end-1 flex items-center justify-center">
            <h1 className="text-3xl w-[75%] text-center border-b-2 p-2">{children}</h1>
        </div>
    )
}

export default Title;