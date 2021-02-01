import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllBlogs from "./Pages/Blogs";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Navigations/Footer";
import Header from "./components/Navigations/Header";
import ChatRoom from "./Pages/ChatRoomPage";
import EncryptionInfoPage from "./Pages/EncryptionInfoPage";
import AboutUsPage from "./Pages/AboutUsPage";
import PostDetailPage from "./Pages/PostDetailPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={HomePage} exact />
        <Route path="/posts" component={AllBlogs} exact />
        <Route path="/posts/:id" component={PostDetailPage} exact />
        <Route path="/chat-room" component={ChatRoom} exact />
        <Route path="/encryption-info" component={EncryptionInfoPage} exact />
        <Route path="/about-us" component={AboutUsPage} exact />
      </main>
      <Footer />
    </Router>
  );
}
