import { useRef, useState } from "react";
import { Account, Website } from "../App";
import Input from "./Input";

interface Props {
    setEditModalClosed: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedAccount: React.Dispatch<React.SetStateAction<string | null>>;
    currentAccounts: Account[] | null;
    editModalClosed: boolean;
    selectedAccount: string | null;
    selectedWebsite: string;
}

function EditModal({setEditModalClosed, setSelectedAccount, selectedWebsite, currentAccounts, selectedAccount, editModalClosed}: Props) {
    const [editMode, setEditMode] = useState(false)
    const [passwordRef, setPasswordRef] = useState<React.RefObject<null>>(useRef(null))
    const [accountNameRef, setAccountNameRef] = useState<React.RefObject<null>>(useRef(null))

    const getInfo = () => {
        if (currentAccounts) {
            for (let account of currentAccounts) {
                if (account.name == selectedAccount) {
                    return account.password;
                }
            }
        }
    }

    const exit = () => {
        setEditModalClosed(true); 
        setSelectedAccount(null);
        setEditMode(false);
    }

    const finishEdit = async () => {
        let jsonData = localStorage.getItem("userData");
        
        if (jsonData) {
            let userData: Website[] = JSON.parse(jsonData);
            for (let website of userData) {
                if (website["title"] == selectedWebsite) {
                    for (let account of website["accounts"]) {
                        if (account["name"] == selectedAccount) {
                            if (passwordRef.current && accountNameRef.current) {
                                account["name"] = accountNameRef.current.value;
                                account["password"] = passwordRef.current.value;
                                localStorage.setItem("userData", JSON.stringify(userData));
                                break;
                            }
                        }
                    }
                }
            }
        }
        exit();
    }

    return (
        <div className={"w-screen h-screen absolute top-0 left-0" + (editModalClosed ? " hidden" : "")}>

            <div className="w-screen h-screen opacity-75 bg-gray-700"></div>

            <div className="grid grid-cols-11 grid-rows-11 h-[75%] w-[50%] p-1 absolute top-[12.5%] left-[25%] opacity-100 bg-white default-border rounded-4xl">
                <button className="col-start-11 row-start-1 w-[62.5px] h-[62.5px] bg-red-400 text-gray-700 text-3xl default-border rounded-3xl" onClick={exit}>X</button>
                <h1 className="col-start-4 col-end-9 flex justify-center items-center border-b-2 text-3xl">{"Account " + (selectedAccount ? selectedAccount : "Default")}</h1>
                
                <div className="row-start-3 row-end-11 col-start-2 col-end-11 flex flex-col items-center gap-6">

                    {editMode ?
                    <>
                        <div className="flex flex-col gap-4">
                            <div className="flex">
                                <h1 className="text-2xl">{"New Account Name: "}</h1>
                                <Input setRef={setAccountNameRef} inputCount="first"></Input>
                            </div>
                            <div className="flex">
                                <h1 className="text-2xl">{"New Password: "}</h1>
                                <Input setRef={setPasswordRef} inputCount="second"></Input>
                            </div>
                        </div> 
                        <button onClick={finishEdit} className="default-border rounded-3xl p-4 px-10">Submit</button>
                    </>
                    : 
                    <>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl">{"Account Name: " + selectedAccount}</h1>
                            <h1 className="text-2xl">{"Password: " + getInfo()}</h1>
                        </div> 
                        <button onClick={() => {setEditMode(true)}} className="default-border rounded-3xl p-4 px-10">Edit</button>
                    </>
                    }

                </div>
            </div>
        </div>
    )
}

export default EditModal;