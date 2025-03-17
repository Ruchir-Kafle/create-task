import Section from "./Section";
import Tab from "./Tab";
import Title from "./Title";

interface Props {
    setClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

function PasswordBody({setClosed}: Props) {
    return (
        <Section className="col-span-2 m-4">
            <Title setClosed={() => setClosed(false)}>Accounts & Passwords</Title>
            <Tab setClosed={setClosed}></Tab>
        </Section>
    )
}

export default PasswordBody;