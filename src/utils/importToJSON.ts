import { setTasks } from "../features/tasks/taskSlice";

export const importTasksFromJson = async (file: File, dispatch: any) => {
    const reader = new FileReader();

    reader.onload = (event) => {
        try {
            const json = event.target?.result;
            if (typeof json === "string") {
                const tasks = JSON.parse(json); // Парсим JSON-строку в объект
                dispatch(setTasks(tasks)); // Диспатчим действие для обновления состояния
            }
        } catch (error) {
            console.error("Ошибка при импорте задач:", error);
        }
    };

    reader.readAsText(file); // Читаем файл как текст
};
