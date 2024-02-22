import { useState } from "react";
import Navbar from "./component/Navbar";
import RecommendationSection from "./component/Recomandation";
import Tabsection from "./component/Tabsection";
import UserInput from "./UserInput";
import MessageList from "./MessageList";
import "./App.css";
import ChatBox from "./component/Chatbox";


function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="leftside">
        <RecommendationSection />

        </div>
        <div className="rightside">
          {/* <MessageList /> */}
          <ChatBox/>
          {/* <UserInput /> */}
        </div>
      </div>
    </>
  );
}

export default App;
