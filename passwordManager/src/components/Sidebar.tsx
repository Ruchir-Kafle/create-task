import Tab from "./Tab";
import Title from "./Title";
import Section from "./Section";
import { ReactNode, useCallback } from "react";

interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setType: React.Dispatch<React.SetStateAction<string>>;
    setSelectedWebsite: React.Dispatch<React.SetStateAction<string>>;
    selectedWebsite: string;
    websites: Array<string>;
}

function Sidebar({setClosed, setType, setSelectedWebsite, selectedWebsite, websites}: Props) {

    const createTabs = () => {
        let temp: Array<ReactNode> = [];
        for (let website of websites) {
            temp.push(<Tab onClick={openMenu} selectedWebsite={selectedWebsite} tabData={website}></Tab>);
        }
        return temp;
    }

    const openMenu = useCallback((website: string) => {
        setSelectedWebsite(website);
    }, [setSelectedWebsite])

    return (
        <div className="col-span-1 p-4 bg-gray-400">
            <Section className="w-full h-full">
                <Title setClosed={setClosed} setType={setType}>Websites</Title>
                {...createTabs()}
            </Section>
        </div>
    )
}

export default Sidebar;