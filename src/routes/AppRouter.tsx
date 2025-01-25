import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { TasksPage } from "../features/tasks/pages/TasksPage";
import { TaskList } from "../features/tasks/components/TaskList";
import { ProfilePage } from "../features/user/pages/ProfilePage";
import { TasksDetailPage } from "../features/tasks/pages/TaskDetailsPage";
import { useAppSelector } from "../app/hooks";
import Layout from "../components/Layout/Layout";

const ProtectedRoute: React.FC<{
  isAuth: boolean;
  children: React.ReactNode;
}> = ({ isAuth, children }) => {
  return isAuth ? <>{children}</> : <Navigate to="/" />;
};

export const AppRouter: React.FC = () => {
  const isAuth = useAppSelector((state) => state.user.auth);

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout children={<TasksPage />}/>} />
                <Route path="/profile" element={
                    <ProtectedRoute isAuth={isAuth}>
                        <Layout children={<ProfilePage />} />
                    </ProtectedRoute>
                } ></Route>
                <Route path="/task/:id" element={<Layout children={<TasksDetailPage />}/>}/>
                <Route path="*" Component={()=>("404 - NOT FOUND")}/>

                {/* <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<RecentActivity />} />
          <Route path="project/:id" element={<Project />} />
        </Route> */}
            </Routes>
        </BrowserRouter>
  );
};
