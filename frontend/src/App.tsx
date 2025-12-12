import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.scss";
import { NotFound } from "./pages/NotFound/NotFound";
import { Dashboard } from "./pages/DashboardPage/Dashboard";
import PopularTvPage from "./pages/PopularTvPage/PopularTvPage";
import PageMovie from "./pages/PageMovie/PageMovie";
import ProfilePage from "../src/pages/ProfilePage/ProfilePage"
import PopularMoviePage from "./pages/PopularMoviePage/PopularMoviePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage"

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/popular/tvshows" element={<PopularTvPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/popular/movie" element={<PopularMoviePage />} />
        <Route path="/popular/tv" element={<PopularTvPage />} />
        <Route path="/details/:mediaType/:id" element={<PageMovie />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
