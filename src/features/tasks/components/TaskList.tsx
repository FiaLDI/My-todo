import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { TaskItem } from "./TaskItem";

export const TaskList = (): React.JSX.Element => {
    const tasks = useAppSelector((state) => state.tasks.tasks);

    return (
        <>
            <div className="task-items">
                {tasks.map((value) => (
                    <TaskItem
                        key={value.id}
                        id={value.id}
                        title={value.title}
                        description={value.description}
                        completed={value.completed}
                        start={value.start}
                        end={value.end}
                    />
                ))}
            </div>
        </>
    );
};
