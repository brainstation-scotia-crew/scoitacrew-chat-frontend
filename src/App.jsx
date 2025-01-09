import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/PageOne/PageOne";
import PageOne from "./pages/PageOne/PageOne";
import MessageBubble from "./components/MessageBubble/MessageBubble";
import MessageInput from "./components/MessageInput/MessageInput";
import PageTwo from "./pages/PageTwo/PageTwo";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop/> */}
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/chat" element={<PageTwo />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
