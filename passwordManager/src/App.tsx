import { useState } from "react";

import Sidebar from "./components/Sidebar";
import PasswordBody from "./components/PasswordBody";
import PopUp from "./components/PopUp";

function App() {
  const [closed, setClosed] = useState(true);
  const [type, setType] = useState("");

  return (
    <>
      <Sidebar setClosed={setClosed} setType={setType}></Sidebar>
      <PasswordBody setClosed={setClosed} setType={setType}></PasswordBody>
      <PopUp closed={closed} setClosed={setClosed} type={type}></PopUp>
    </>
  )
}

export default App;
