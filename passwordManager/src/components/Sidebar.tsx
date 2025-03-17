import Tab from "./Tab";
import Title from "./Title";
import Section from "./Section";

function Sidebar() {
    return (
        <div className="col-span-1 p-4 bg-gray-400">
            <Section className="w-full h-full">
                <Title>Websites</Title>
                <Tab></Tab>
            </Section>
        </div>
    )
}

export default Sidebar;