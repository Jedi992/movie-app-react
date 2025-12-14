## 🧩 Backend

Бэкенд реализует систему аутентификации и работу с пользователями для Movie App.  
Используется JWT-авторизация с `accessToken` и `refreshToken`.

- `accessToken` — короткоживущий, передаётся в `Authorization: Bearer ...`
- `refreshToken` — долгоживущий, хранится в **httpOnly cookie**

---

## ✨ Функциональность

- 👤 Регистрация пользователя
- 🔐 Авторизация / выход
- 🔁 Обновление access-токена через refresh-токен
- 🧾 Получение профиля пользователя (защищённый эндпоинт)
- 🛡️ Middleware для проверки JWT (`authMiddleware`)

---

## 🧰 Стек технологий

- **Node.js** + **Express**
- **TypeScript**
- **MongoDB** + **Mongoose**
- **JWT** (Access / Refresh tokens)
- Прочее: `bcrypt`, `cookie-parser`, `cors`

---

## 🔌 API эндпоинты

Базовый префикс: `/api`

- `POST /api/registration` — регистрация
- `POST /api/login` — логин (устанавливает cookie `refreshToken`)
- `POST /api/logout` — выход из системы
- `GET /api/profile` — профиль пользователя (требует accessToken)
- `GET /api/refresh` — обновление токенов (по refreshToken из cookie)

---
## 🛠️ Environment Variables

Создай файл `.env` в папке `backend`:

```env
PORT=5000
DB_URL=your_mongodb_connection_string

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret

API_URL=http://localhost:5000
CLIENT_URL=http://localhost:5173

---
## ⚙️ Установка и запуск

```bash
cd backend
pnpm i
pnpm dev

## 🏗️ Билд фронтенда

Фронтенд собирается отдельно:

cd frontend
pnpm build
