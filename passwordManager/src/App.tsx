import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import PasswordBody from "./components/PasswordBody";
import PopUp from "./components/PopUp";

export type Website = {
  title: string;
  accounts: Account[];
}

export type Account = {
  name: string;
  password: string;
}

function App() {
  const [closed, setClosed] = useState(true);
  const [type, setType] = useState("");
  const [data, setData] = useState<Website[]>([]);
  const [selectedWebsite, setSelectedWebsite] = useState<string>("")
  const [websites, setWebsites] = useState<string[]>([])
  const [currentAccounts, setCurrentAccounts] = useState<Account[] | null>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/user_info.json");
      const jsonData = await response.json();
      setData(jsonData);
    }
    
    const getWebsites = () => {
      let temp = [];
      for (let website of data) {
        temp.push(website.title);
      }
      setWebsites(temp);
    }
  
    const getCurrentAccounts = () => {
      if (selectedWebsite) {
        for (let website of data) {
          if (website["title"] == selectedWebsite) {
            setCurrentAccounts(website["accounts"]);
            break;
          }
        }  
      } else {
        setCurrentAccounts(null);
      }
    }

    fetchData();
    getWebsites();
    getCurrentAccounts();
  }, [closed, selectedWebsite])

  return (
    <>
      <Sidebar setClosed={setClosed} setType={setType} setSelectedWebsite={setSelectedWebsite} selectedWebsite={selectedWebsite} websites={websites}></Sidebar>
      <PasswordBody setClosed={setClosed} setType={setType} currentAccounts={currentAccounts} selectedWebsite={selectedWebsite}></PasswordBody>
      <PopUp closed={closed} setClosed={setClosed} type={type}></PopUp>
    </>
  )
}

export default App;
