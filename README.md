# Завод - учебный проект 5 семестра: Frontend

В этом проекте реализована фронтенд-часть приложения для условного завода, который хочет продавать производимую продукцию через интернет

### Содержание

1. [Функции приложения](#функции_приложения)

1.1. [Клиент](#клиент)

1.2. [Менеджер](#менеджер)

2. [Использованные технологии](#использованные_технологии)

3. [Как запустить](#как_запустить)

### Функции приложения:

#### Клиент
- Авторизация (регистрация)
- Создание нового заказа
- Отправка заказа
- Просмотр заказов

#### Менеджер
- Авторизация
- Регистрация нового менеджера
- Изменение списка продуктов завода
- Просмотр и обработка заказов клиентов: блокировка заказа от изменений другими менеджерами, добавление контракта к заказу, отметка к заказу: "заказ подписан", "заказ ждет выдачи", "заказ выдан"
- Оформление отгрузки по заказу
- Просмотр отгрузок по заказам

### Использованные технологии
- `TypeScript` для типизации JS-кода
- `React` для реализации компонентного подхода
- `SCSS` для удобной работы с .css-файлами по методологии `BEM`
- `Vite` для сборки проекта
- `ESlint` для линтовки проекта

### Как запустить

Нужно установить репозиторий с зависимостями и запустить приложение
```
git clone https://gitlab.com/info-labs-Kudrin/ssp-5-sem/course-project/frontend.git
cd frontend
npm i
npm run dev
```
