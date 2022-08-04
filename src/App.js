import { Routes, Route } from "react-router-dom";

import Protected from "./components/Protected";

import MainPage from "./containers/MainPage";
import LeaguePage from "./containers/LeaguePage";
import ClubPage from "./containers/ClubPage";
import DetailClubPage from "./containers/DetailClubPage";
import VenuePage from "./containers/VenuePage";
import DetailVenuePage from "./containers/DetailVenuePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import DashboardPage from "./containers/DashboardPage";
import ProfilePage from "./containers/ProfilePage";
import SearchPageClub from "./containers/SearchPageClub";
import Page404 from "./containers/Page404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/league" element={<LeaguePage />} />
        <Route path="/club" element={<ClubPage />} />
        <Route
          path="/club-detail/:id"
          element={
            <Protected>
              <DetailClubPage />
            </Protected>
          }
        />
        <Route path="/venue" element={<VenuePage />} />
        <Route
          path="/venue-detail/:id"
          element={
            <Protected>
              <DetailVenuePage />
            </Protected>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashboardPage />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <ProfilePage />
            </Protected>
          }
        />
        <Route path="/teams/search/" element={<SearchPageClub />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
