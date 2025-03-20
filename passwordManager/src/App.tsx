import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import PasswordBody from "./components/PasswordBody";
import CreationModal from "./components/CreationModal";
import EditModal from "./components/EditModal";

export type Website = {
  title: string;
  accounts: Account[];
}

export type Account = {
  name: string;
  password: string;
}

function App() {
  const [creationModalClosed, setCreationModalClosed] = useState(true);
  const [editModalClosed, setEditModalClosed] = useState(true);
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
  }, [creationModalClosed, selectedWebsite])

  return (
    <>
      <Sidebar setCreationModalClosed={setCreationModalClosed} setType={setType} setSelectedWebsite={setSelectedWebsite} selectedWebsite={selectedWebsite} websites={websites}></Sidebar>
      <PasswordBody setEditModalClosed={setEditModalClosed} setCreationModalClosed={setCreationModalClosed} setType={setType} currentAccounts={currentAccounts} selectedWebsite={selectedWebsite}></PasswordBody>
      <CreationModal creationModalClosed={creationModalClosed} setCreationModalClosed={setCreationModalClosed} type={type}></CreationModal>
      <EditModal editModalClosed={editModalClosed} setEditModalClosed={setEditModalClosed}></EditModal>
    </>
  )
}

export default App;
