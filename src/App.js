import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home-page";
import MoviesPage from "./pages/movies-page";
import MyListPage from "./pages/mylist-page";
import NapPage from "./pages/nap-page";
import TVshowsPage from "./pages/tvshows-page";
import Layout from "./layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tvshows" element={<TVshowsPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/new-and-popular" element={<NapPage />} />
          <Route path="/mylist" element={<MyListPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
