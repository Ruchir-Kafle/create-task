import { useState } from "react";

import Sidebar from "./components/Sidebar";
import PasswordBody from "./components/PasswordBody";
import PopUp from "./components/PopUp";

function App() {
  const [closed, setClosed] = useState(true);

  return (
    <>
      <Sidebar setClosed={setClosed}></Sidebar>
      <PasswordBody setClosed={setClosed}></PasswordBody>
      <PopUp closed={closed} setClosed={setClosed}></PopUp>
    </>
  )
}

export default App;
