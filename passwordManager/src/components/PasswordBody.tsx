import Section from "./Section";
import Tab from "./Tab";
import Title from "./Title";

interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setType: React.Dispatch<React.SetStateAction<string>>;
}

function PasswordBody({setClosed, setType}: Props) {
    return (
        <Section className="col-span-2 m-4">
            <Title setClosed={() => setClosed(false)} setType={setType}>Accounts & Passwords</Title>
            <Tab setClosed={setClosed} setType={setType}></Tab>
        </Section>
    )
}

export default PasswordBody;