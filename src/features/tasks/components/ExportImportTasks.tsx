import React from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { exportTasksToJson } from "../../../utils/exportToJson";
import { importTasksFromJson } from "../../../utils/importToJSON";

export const ExportTasksPage = (): React.JSX.Element => {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    const dispatch = useAppDispatch();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            importTasksFromJson(file, dispatch); // Вызываем функцию импорта
        }
    };

    const handleExport = () => {
        if (tasks) {
            exportTasksToJson(tasks);
        }
    // Вызываем функцию экспорта
    };

    return (
        <>
            {" "}
            <div className="task-form-add">
                <div className="button-container">
                    <button onClick={handleExport}>TO JSON</button>
                </div>
                <div className="button-container">
                    <input type="file" accept=".json" onChange={handleFileChange} />
                </div>
            </div>
        </>
    );
};
