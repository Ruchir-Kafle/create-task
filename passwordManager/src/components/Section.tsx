import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

function Section({children, className}: Props) {
    return (
        <div className={"grid gap-4 auto-rows-[10%] grid-title p-4 default-border rounded-4xl overflow-y-scroll  " + className}>
            {children}
        </div>
    )
}

export default Section;