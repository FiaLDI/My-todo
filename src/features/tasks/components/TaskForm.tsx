import React, { useEffect, useState } from "react";
import { task } from "../types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { createTask } from "../taskSlice";
import { useTranslation } from "react-i18next";

export const initStateForm = {
    id: 1,
    title: "",
    description: "",
    completed: false,
    start: "",
    end: "",
};

export const TaskForm = (): React.JSX.Element => {
    const [taskForm, setTaskForm] = useState<task>(initStateForm);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
    };

    const handlerChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 20) {
            handlerChange(e);
        }
    };

    const handleAddTask = () => {
        if (taskForm.description.length > 10) {
            dispatch(
                createTask({
                    ...taskForm,
                    id: Date.now(),
                    start: new Date().toJSON().slice(0, 10),
                }),
            );
            setTaskForm(initStateForm);
        }
    };

    return (
        <>
            <div className="form-container task-form-add">
                <h2>{t("createtask")}</h2>

        <input type="hidden" name="id" value={taskForm.id} disabled />

                <div className="input-container">
                    <input
                        type="text"
                        name="title"
                        value={taskForm.title}
                        onChange={handlerChangeText}
                        placeholder={t("entertitle")}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        name="description"
                        value={taskForm.description}
                        onChange={handlerChangeText}
                        placeholder={t("enterdescription")}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="date"
                        name="end"
                        value={taskForm.end}
                        onChange={handlerChange}
                    />
                </div>

                <div className="button-container">
                    <button onClick={handleAddTask}>{t("create")}</button>
                </div>
            </div>
        </>
    );
};
