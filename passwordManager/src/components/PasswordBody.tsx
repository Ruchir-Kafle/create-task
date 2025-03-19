import Section from "./Section";
import Tab from "./Tab";
import Title from "./Title";

interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setType: React.Dispatch<React.SetStateAction<string>>;
    selectedTab: string;
    accounts: Array<object>;
}

function PasswordBody({setClosed, setType, selectedTab, accounts}: Props) {

    const createTabs = () => {
        let websites = [];
        for (let account of accounts) {
            websites.push(<Tab selectedTab={selectedTab} tabData={account}></Tab>);
        }
        return websites;
    }

    return (
        <Section className="col-span-2 m-4">
            <Title setClosed={() => setClosed(false)} setType={setType}>Accounts & Passwords</Title>
            {...createTabs()}
        </Section>
    )
}

export default PasswordBody;