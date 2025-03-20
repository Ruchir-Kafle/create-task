import Tab from "./Tab";
import Title from "./Title";
import Section from "./Section";
import { ReactNode, useCallback } from "react";

interface Props {
    setCreationModalClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setType: React.Dispatch<React.SetStateAction<string>>;
    setSelectedWebsite: React.Dispatch<React.SetStateAction<string>>;
    selectedWebsite: string;
    websites: Array<string>;
}

function Sidebar({setCreationModalClosed, setType, setSelectedWebsite, selectedWebsite, websites}: Props) {

    const createTabs = () => {
        let temp: Array<ReactNode> = [];
        for (let website of websites) {
            temp.push(<Tab onClick={openTabAccounts} selectedWebsite={selectedWebsite} tabData={website}></Tab>);
        }
        return temp;
    }

    const openTabAccounts = useCallback((website: string) => {
        setSelectedWebsite(website);
    }, [setSelectedWebsite])

    return (
        <div className="col-span-1 p-4 bg-gray-400">
            <Section className="w-full h-full">
                <Title setCreationModalClosed={setCreationModalClosed} setType={setType}>Websites</Title>
                {...createTabs()}
            </Section>
        </div>
    )
}

export default Sidebar;