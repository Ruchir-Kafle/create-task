import { useState } from "react";
import Input from "./Input";

interface Props {
    setCreationModalClosed: React.Dispatch<React.SetStateAction<boolean>>;
    creationModalClosed: boolean;
    type: string;
}

function CreationModal({creationModalClosed, setCreationModalClosed, type}: Props) {
    const kind = (type == "Website Creation" ? "website" : (type == "Account Creation" ? "account" : "Default:"))
    const [websiteName, setWebsiteName] = useState();
    const [websiteURL, setWebsiteURL] = useState();
    const [accountName, setAccountName] = useState();
    const [accountPassword, setAccountPassword] = useState();

    return (
        <div className={"w-screen h-screen absolute top-0 left-0" + (creationModalClosed ? " hidden" : "")}>

            <div className="w-screen h-screen opacity-75 bg-gray-700"></div>

            <div className="grid grid-cols-11 grid-rows-11 h-[75%] w-[50%] p-1 absolute top-[12.5%] left-[25%] opacity-100 bg-white default-border rounded-4xl">
                <button className="col-start-11 row-start-1 w-[62.5px] h-[62.5px] bg-red-400 text-gray-700 text-3xl default-border rounded-3xl" onClick={() => setCreationModalClosed(true)}>X</button>
                <h1 className="col-start-4 col-end-9 flex justify-center items-center border-b-2 text-3xl">{type != "" ? type : "Default"}</h1>
                
                <form className="row-start-3 row-end-11 col-start-2 col-end-11 flex flex-col items-center gap-6">
                    <Input inputCount={"first"}>{"Input the " + kind + " name:"}</Input>
                    <Input inputCount={"second"}>{kind == "website" ? "Input the website URL: " : "Input the account password: "}</Input>
                    <input type="submit" value="Create" className="default-border rounded-3xl p-4 px-10" />
                </form>
            </div>
        </div>
    )
}

export default CreationModal;