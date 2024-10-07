# Дипломный проект на курсе «Backend-разработка на Node.js»

## Технологический стек

- Node.js;
- Nest.js;
- MongoDB;
- WebSocket.

## Запуск приложения через npm

- `npm run start:dev` - dev сборка;
- `npm run build` - production сборка;
- `npm run dev:prod` - запуск production сборки.


## Запуск приложения в контейнере Docker

- `docker-compose --env-file ./env/.env-example up -d`

Перед запуском необходимо настроить переменные окружения в файле [.env-example](env%2F.env-example)