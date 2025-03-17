import Tab from "./Tab";
import Title from "./Title";
import Section from "./Section";

interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({setClosed}: Props) {
    return (
        <div className="col-span-1 p-4 bg-gray-400">
            <Section className="w-full h-full">
                <Title setClosed={setClosed}>Websites</Title>
                <Tab setClosed={setClosed}></Tab>
            </Section>
        </div>
    )
}

export default Sidebar;