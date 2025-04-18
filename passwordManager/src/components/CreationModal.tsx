import { useState } from "react";
import Input from "./Input";
import { Website } from "../App";
import ModalTemplate from "./ModalTemplate";

interface Props {
    setCreationModalClosed: React.Dispatch<React.SetStateAction<boolean>>;
    creationModalClosed: boolean;
    type: string;
    selectedWebsite: string | null;
}

function CreationModal({setCreationModalClosed, creationModalClosed, type, selectedWebsite}: Props) {
    const kind = (type == "Website Creation" ? "website" : (type == "Account Creation" ? "account" : "Default:"))
    const [websiteName, setWebsiteName] = useState("");
    const [websiteURL, setWebsiteURL] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountPassword, setAccountPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const exit = () => {
        setWebsiteName("");
        setWebsiteURL("");
        setAccountName("");
        setAccountPassword("");
        setCreationModalClosed(true);
        setErrorMessage("");
    }

    const postWebsite = () => {
        if (websiteName && websiteURL) {
            let jsonData = localStorage.getItem("userData");
            let userData: Website[] = [];
            let websiteAlreadyExists: boolean = false;
            if (jsonData) {
                userData = JSON.parse(jsonData);
            }
    
            for (let website of userData) {
                if (website["title"] == websiteName) {
                    websiteAlreadyExists = true
                } 
            }
            
            if (!websiteAlreadyExists) {
                userData.unshift({"title": websiteName, "URL": websiteURL, "accounts": []});
                localStorage.setItem("userData", JSON.stringify(userData));
                exit();
            } else {
                setErrorMessage("duplicate");
            }
        } else {
            setErrorMessage("null");
        }
    }

    const postAccount = () => {
        if (accountName && accountPassword) {
            let jsonData = localStorage.getItem("userData");
            if (jsonData) {
                let userData: Website[] = JSON.parse(jsonData);
                for (let website of userData) {
                    if (website["title"] == selectedWebsite) {
                        website["accounts"].unshift({"name": accountName, "password": accountPassword})
                        localStorage.setItem("userData", JSON.stringify(userData));
                    }
                }
            }
            exit();
        } else {
            setErrorMessage("null");
        }
    }

    return (
        <ModalTemplate setModalClosed={setCreationModalClosed} modalClosed={creationModalClosed}>    
            <button className="col-start-11 row-start-1 w-[62.5px] h-[62.5px] bg-red-400 text-gray-700 text-3xl default-border rounded-3xl" onClick={exit}>X</button>
            <h1 className="col-start-4 col-end-9 flex justify-center items-center border-b-2 text-3xl">{type != "" ? type : "Default"}</h1>
            
            <div className="row-start-3 row-end-11 col-start-2 col-end-11 flex flex-col items-center gap-6">
                <Input onChange={kind == "website" ? setWebsiteName : setAccountName} text={kind == "website" ? websiteName : accountName} inputCount={"first"}>{"Input the " + kind + " name:"}</Input>
                <Input onChange={kind == "website" ? setWebsiteURL : setAccountPassword} text={kind == "website" ? websiteURL : accountPassword} inputCount={"second"}>{kind == "website" ? "Input the website URL: " : "Input the account password: "}</Input>
                <button onClick={kind == "website" ? postWebsite : postAccount} className="default-border rounded-3xl p-4 px-10">Create</button>
                <div className={"py-10 text-2xl text-red-800" + (errorMessage ? "" : " hidden")}>{errorMessage == "duplicate" ? "This website is already in the list!" : "You need to fill out all fields!"}</div>
            </div>
        </ModalTemplate>
    )
}

export default CreationModal;