export const exportTasksToJson = (tasks: any[]) => {
    const dataStr = JSON.stringify(tasks, null, 2); // Преобразуем задачи в JSON-строку
    const blob = new Blob([dataStr], { type: "application/json" }); // Создаем Blob-объект
    const url = URL.createObjectURL(blob); // Создаем URL для Blob

    const a = document.createElement("a"); // Создаем элемент <a>
    a.href = url;
    a.download = "tasks.json"; // Имя файла для скачивания
    document.body.appendChild(a); // Добавляем элемент в DOM
    a.click(); // Имитируем клик для скачивания
    document.body.removeChild(a); // Удаляем элемент из DOM
    URL.revokeObjectURL(url); // Освобождаем память
};
