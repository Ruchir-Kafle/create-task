import Tab from "./Tab";
import Title from "./Title";
import Section from "./Section";
import { ReactNode } from "react";
import { ReactNode } from "react";

interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setType: React.Dispatch<React.SetStateAction<string>>;
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
    selectedTab: string;
    websites: Array<string>;
}

function Sidebar({setClosed, setType, setSelectedTab, selectedTab, websites}: Props) {

    const createTabs = () => {
        let temp: Array<ReactNode> = [];
        for (let website of websites) {
            temp.push(<Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabData={website}></Tab>);
        }
        return temp;
    }

    return (
        <div className="col-span-1 p-4 bg-gray-400">
            <Section className="w-full h-full">
                <Title setClosed={setClosed} setType={setType}>Websites</Title>
                {...createTabs()}
                {...createTabs()}
            </Section>
        </div>
    )
}

export default Sidebar;