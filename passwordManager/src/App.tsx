import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import PasswordBody from "./components/PasswordBody";
import PopUp from "./components/PopUp";

type Website = {
  title: string;
  accounts: Account[];
}

type Account = {
  name: string;
  password: string;
}

function App() {
  const [closed, setClosed] = useState(true);
  const [type, setType] = useState("");
  const [data, setData] = useState<Website[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("")
  const [websites, setWebsites] = useState<Array<string>>([])
  const [accounts, setAccounts] = useState<Array<object>>([])
  
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
  
    const getAccounts = () => {
      let temp = [];
      if (selectedTab) {
        for (let account of data) {
          if (account["title"] == selectedTab) {
            temp.push(account["accounts"]);
          }
        }
      }
      setAccounts(temp);
    }

    fetchData();
    getWebsites();
    getAccounts();
  }, [closed, selectedTab])


  return (
    <>
      <Sidebar setClosed={setClosed} setType={setType} setSelectedTab={setSelectedTab} selectedTab={selectedTab} websites={websites}></Sidebar>
      <PasswordBody setClosed={setClosed} setType={setType} accounts={accounts} selectedTab={selectedTab}></PasswordBody>
      <PopUp closed={closed} setClosed={setClosed} type={type}></PopUp>
    </>
  )
}

export default App;
