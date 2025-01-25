import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { task } from "../types";
import { toggleStatusTask, removeTask } from "../taskSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TaskItem = ({
    id,
    title,
    description,
    completed,
    start,
    end,
}: task): React.JSX.Element => {
    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const { t } = useTranslation();

    const handleToggleTask = (id: number) => {
        dispatch(toggleStatusTask(id));
    };

    const handleRemoveTask = (id: number) => {
        dispatch(removeTask(id));
    };

    return (
        <div key={id} className="task-item">
            <h2 className={completed ? " completed" : " uncompleted"}>Task</h2>
      <div className="task-container">
                <div className="task-id">{id}</div>
                <div className="task-title">{title}</div>
                <div className="task-end">{end}</div>
      </div>
      <div className="task-action">
        <div className="button-container">
          <button onClick={() => handleToggleTask(id)}>{t("complete")}</button>
        </div>
        <div className="button-container">
          <button
            onClick={() => {
              navigator(`/task/${id}`);
            }}
          >
            {t("details")}
          </button>
        </div>
        <div className="button-container">
          <button onClick={() => handleRemoveTask(id)}>{t("remove")}</button>
        </div>
      </div>
        </div>
    );
};
