const express = require('express');
const path = require('path'); // Для работы с путями
const app = express();
const port = 80;

// Обслуживание статических файлов из директории 'frontend/dist'
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Определение маршрута для /movie
app.get('/movie', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html')); // Возвращает index.html вместо movie.html
});

// Определение других маршрутов (пример)
app.get('/another-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/another-page.html')); // Укажите путь к другому HTML-файлу
});

// Обработка всех остальных маршрутов для поддержки клиентского маршрутизатора
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html')); // Возвращает основной HTML-файл для SPA
});

// Обработка ошибок 404
app.use((req, res) => {
    res.status(404).send('404 Страница не найдена');
});

// Запуск сервера
app.listen(port, () => console.log(`Сервер запущен на порту ${port} ...`));
