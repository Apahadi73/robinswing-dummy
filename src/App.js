import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import YearlyPropositionPage from "./Pages/YearlyPropositionPage";
import Footer from "./components/Navigations/Footer";
import Header from "./components/Navigations/Header";
import ChatRoom from "./Pages/ChatRoomPage";
import EncryptionInfoPage from "./Pages/EncryptionInfoPage";
import AboutUsPage from "./Pages/AboutUsPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={Homepage} exact />
        <Route
          path="/proposition-page"
          component={YearlyPropositionPage}
          exact
        />
        <Route path="/chat-room" component={ChatRoom} exact />
        <Route path="/encryption-info" component={EncryptionInfoPage} exact />
        <Route path="/about-us" component={AboutUsPage} exact />
      </main>
      <Footer />
    </Router>
  );
}
