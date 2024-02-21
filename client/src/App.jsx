import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
// import axios from "axios";
// axios.defaults.withCredentials = true;



function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Homepage} />
          <Route path="/chats" Component={ChatPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
