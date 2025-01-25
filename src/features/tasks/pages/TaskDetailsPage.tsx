import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { task } from "../types";
import { toggleStatusTask, removeTask, updateTask } from "../taskSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { initStateForm, TaskForm } from "../components/TaskForm";
import { useTranslation } from "react-i18next";

export const TasksDetailPage = (): React.JSX.Element => {
  const [task, setTask] = useState<task>(initStateForm);
  const alltasks = useAppSelector((state) => state.tasks.tasks);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (alltasks.length) {
      const taskId = Number(location.pathname.split("/").pop());
      setTask(alltasks.find((value) => value.id === taskId) as task);
    }
  }, [alltasks, location.pathname]);

  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const handleToggleTask = (id: number) => {
    dispatch(toggleStatusTask(id));
  };

  const handleRemoveTask = (id: number) => {
    navigator(`/`);
    dispatch(removeTask(id));
  };

  const handleSaveTask = () => {
    navigator(`/`);
    dispatch(updateTask(task));
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
        <>
            <div className="task-item">
                <h2>Details task</h2>
                <div className="task-container">
                    <div className="input-container">
                        <input name='id' value={task.id} onChange={handlerChange} disabled/>
                    </div>
                    <div className="input-container">
                        <input name='title' value={task.title} onChange={handlerChange} />
                    </div>
                    <div className="input-container">
                        <input name='description' value={task.description} onChange={handlerChange} />
                    </div>
                    <div className="input-container">
                        <input name='start' type='date' value={task.start} onChange={handlerChange} />
                    </div>
                    <div className="input-container">
                        <input name='end' type='date' value={task.end} onChange={handlerChange} />
                    </div>
                    <div className={task.completed ? "input-container completed" : "input-container uncompleted" }>
            
                    </div>
                </div>
                <div className="task-action">
                    <div className="button-container">
                        <button onClick={() => handleToggleTask(task.id)}>{t("complete")}</button>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleSaveTask()}>{t("save")}</button>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleRemoveTask(task.id)}>{t("remove")}</button>
                    </div>
                </div>
            </div>
        </>
  );
};
