import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import PasswordBody from "./components/PasswordBody";
import CreationModal from "./components/CreationModal";
import EditModal from "./components/EditModal";

export type Website = {
  title: string;
  URL: string;
  accounts: Account[];
}

export type Account = {
  name: string;
  password: string;
}

function App() {
  const [rerender, setRerender] = useState(1);
  const [creationModalClosed, setCreationModalClosed] = useState(true);
  const [editModalClosed, setEditModalClosed] = useState(true);
  const [type, setType] = useState("");
  const [data, setData] = useState<Website[]>([]);
  const [selectedWebsite, setSelectedWebsite] = useState<string>("")
  const [websites, setWebsites] = useState<string[]>([])
  const [currentAccounts, setCurrentAccounts] = useState<Account[] | null>([])
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const userData = localStorage.getItem("userData");
      if (userData) {
        setData(JSON.parse(userData));
      }
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
  }, [creationModalClosed, selectedWebsite, editModalClosed, rerender])

  useEffect(() => {
    setRerender(rerender + 1);
  }, []);

  return (
    <>
      <Sidebar setCreationModalClosed={setCreationModalClosed} setType={setType} setSelectedWebsite={setSelectedWebsite} selectedWebsite={selectedWebsite} websites={websites}></Sidebar>
      <PasswordBody setSelectedAccount={setSelectedAccount} setEditModalClosed={setEditModalClosed} setCreationModalClosed={setCreationModalClosed} setType={setType} currentAccounts={currentAccounts} selectedWebsite={selectedWebsite}></PasswordBody>
      <CreationModal selectedWebsite={selectedWebsite} creationModalClosed={creationModalClosed} setCreationModalClosed={setCreationModalClosed} type={type}></CreationModal>
      <EditModal selectedWebsite={selectedWebsite} currentAccounts={currentAccounts} editModalClosed={editModalClosed} setEditModalClosed={setEditModalClosed} setSelectedAccount={setSelectedAccount} selectedAccount={selectedAccount}></EditModal>
    </>
  )
}

export default App;
