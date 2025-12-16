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
  const [isAuth, setIsAuth] = useState(localStorage.getItem("key"));
  console.log()
  return (
    <>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/popular/tvshows" element={<PopularTvPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/popular/movie" element={<PopularMoviePage />} />
        <Route path="/popular/tv" element={<PopularTvPage />} />
        <Route path="/details/:mediaType/:id" element={<PageMovie />} />
        <Route path="/auth/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
