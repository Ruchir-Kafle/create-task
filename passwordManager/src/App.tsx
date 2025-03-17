import { useState } from "react";

import Sidebar from "./components/Sidebar";
import PasswordBody from "./components/PasswordBody";
import PopUp from "./components/PopUp";

function App() {
  const [close, setClose] = useState(false);

  return (
    <>
      <Sidebar></Sidebar>
      <PasswordBody></PasswordBody>
      <PopUp></PopUp>
    </>
  )
}

export default App;
