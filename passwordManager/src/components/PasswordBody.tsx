import { Account } from "../App";
import Section from "./Section";
import Tab from "./Tab";
import Title from "./Title";

interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setType: React.Dispatch<React.SetStateAction<string>>;
    selectedWebsite: string;
    currentAccounts: Account[] | null;
}

function PasswordBody({setClosed, setType, selectedWebsite, currentAccounts}: Props) {
    const createTabs = () => {
        let websites = [];
        if (currentAccounts) {
            for (let account of currentAccounts) {
                websites.push(<Tab onClick={openMenu} selectedWebsite={selectedWebsite} tabData={account.name}></Tab>);
            }
        }
        return websites;
    }

    const openMenu = () => {

    }

    return (
        <Section className="col-span-2 m-4">
            <Title setClosed={() => setClosed(false)} setType={setType}>Accounts & Passwords</Title>
            {...createTabs()}
        </Section>
    )
}

export default PasswordBody;