import React from "react";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";
import { ExportTasksPage } from "../components/ExportImportTasks";

export const TasksPage = (): React.JSX.Element => {
    return (
        <>
            <TaskList />
            <TaskForm />
            <ExportTasksPage />
        </>
    );
};
