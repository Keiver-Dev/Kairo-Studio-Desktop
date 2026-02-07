import { Routes, Route, Navigate } from "react-router-dom";

// ========== CONTEXTS ==========
import { WorkspaceProvider } from "@/contexts/WorkspaceContext";
import { SpaceProvider } from "@/contexts/SpaceContext";

// ========== LAYOUTS ==========
import LayoutAuth from "@/layout/LayoutAuth";
import LayoutPrivated from "@/layout/LayoutPrivated";

// ========== PUBLIC PAGES ==========
import LandingPage from "@/pages/Public/Landing";
import About from "./pages/Public/About";

// ========== AUTH PAGES ==========
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";

// ========== PRIVATE PAGES ==========
// Main Navigation
import Home from "@/pages/Privated/Home/Home";
import More from "@/pages/Privated/More";
import Planning from "@/pages/Privated/Planning";
import Team from "@/pages/Privated/Team";

// Assigned
import Assigned from "@/pages/Privated/Assigned/Assigned";
import AssignedToMe from "@/pages/Privated/Assigned/tables/AssignedToMe";
import AssignedToOthers from "@/pages/Privated/Assigned/tables/AssignedToOthers";

// Inbox
import Inbox from "@/pages/Privated/Inbox/Inbox";
import Delete from "@/pages/Privated/Inbox/tables/Delete";
import Later from "@/pages/Privated/Inbox/tables/Later";
import Mayor from "@/pages/Privated/Inbox/tables/Mayor";
import Others from "@/pages/Privated/Inbox/tables/Others";

// Responses
import Responses from "@/pages/Privated/Responses/Responses";
import Read from "@/pages/Privated/Responses/table/Read";
import Unread from "@/pages/Privated/Responses/table/Unread";

// Workspace
import Workspace from "@/pages/Privated/Workspace/Workspace";
import Calendar from "@/pages/Privated/Workspace/tables/Calendar";
import Channels from "@/pages/Privated/Workspace/tables/Channels";
import List from "@/pages/Privated/Workspace/tables/List";
import Overview from "@/pages/Privated/Workspace/tables/Overview";
import Table from "@/pages/Privated/Workspace/tables/Table";

// ========== UTILITIES ==========
import NotFound from "@/pages/err/NotFound";
import ProtectedRoute from "@/routes/ProtectedRoute";

const App = () => {
  return (
    <main className="flex flex-col text-white bg-[#0A0A0A] h-full w-full overflow-x-hidden font-jakarta">
      <Routes>
        {/* ========== PUBLIC ROUTES ========== */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />

        {/* ========== AUTH ROUTES ========== */}
        <Route element={<LayoutAuth />}>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ========== PROTECTED ROUTES ========== */}
        <Route
          element={
            <ProtectedRoute>
              <WorkspaceProvider>
                <SpaceProvider>
                  <LayoutPrivated />
                </SpaceProvider>
              </WorkspaceProvider>
            </ProtectedRoute>
          }
        >
          {/* Home - Main Hub */}
          <Route path="/home" element={<Home />}>
            <Route index element={<Navigate to="workspace" replace />} />

            {/* Assigned */}
            <Route path="assigned" element={<Assigned />}>
              <Route index element={<Navigate to="assignedtome" replace />} />
              <Route path="assignedtome" element={<AssignedToMe />} />
              <Route path="assignedtoothers" element={<AssignedToOthers />} />
            </Route>

            {/* Inbox */}
            <Route path="inbox" element={<Inbox />}>
              <Route index element={<Navigate to="major" replace />} />
              <Route path="deleted" element={<Delete />} />
              <Route path="later" element={<Later />} />
              <Route path="major" element={<Mayor />} />
              <Route path="others" element={<Others />} />
            </Route>

            {/* Responses */}
            <Route path="responses" element={<Responses />}>
              <Route index element={<Navigate to="unread" replace />} />
              <Route path="read" element={<Read />} />
              <Route path="unread" element={<Unread />} />
            </Route>

            {/* Workspace */}
            <Route path="workspace" element={<Workspace />}>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="channel" element={<Channels />} />
              <Route path="list" element={<List />} />
              <Route path="overview" element={<Overview />} />
              <Route path="table" element={<Table />} />
            </Route>
          </Route>

          {/* Other Main Pages */}
          <Route path="/more" element={<More />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/team" element={<Team />} />
        </Route>

        {/* ========== 404 NOT FOUND ========== */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;