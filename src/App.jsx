import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/PageOne/PageOne";
import PageOne from "./pages/PageOne/PageOne";
import MessageBubble from "./components/MessageBubble/MessageBubble";
import MessageInput from "./components/MessageInput/MessageInput";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<PageOne />} />
        <MessageBubble />
        <MessageInput />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
