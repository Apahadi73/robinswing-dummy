import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllBlogs from "./Pages/Blogs";
import Footer from "./components/Navigations/Footer";
import Header from "./components/Navigations/Header";
import AboutCompanyPage from "./Pages/AboutCompanyPage";
import PostDetailPage from "./Pages/PostDetailPage";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={HomePage} exact />
        <Route path="/posts" component={AllBlogs} exact />
        <Route path="/posts/:id" component={PostDetailPage} exact />
        <Route path="/about-us" component={AboutCompanyPage} exact />
      </main>
      <Footer />
    </Router>
  );
}
