import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Footer from "./components/Navigations/Footer";
import Header from "./components/Navigations/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={Homepage} exact />
      </main>
      <Footer />
    </Router>
  );
}
