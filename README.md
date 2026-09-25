# TaskFlow

Kanban-style task manager. Spring Boot REST API + Angular SPA.

## Stack

| Layer    | Technology                                                     |
|----------|----------------------------------------------------------------|
| Backend  | Java 21, Spring Boot 4.1, Spring Data JPA (Hibernate), Lombok  |
| Database | MySQL                                                          |
| Frontend | Angular 22 (standalone components, signals), Angular CDK, RxJS |
| Build    | Maven (wrapper included), npm                                  |
| Tests    | JUnit 5 (backend), Vitest (frontend)                           |

## Prerequisites

- JDK 21
- Node.js 20+ and npm 10
- MySQL running on `localhost:3306`

## Getting started

### Backend

Database credentials are read from environment variables.
The `taskflow` schema is created automatically on first run.

```bash
export DB_USERNAME=<user>
export DB_PASSWORD=<password>
./mvnw spring-boot:run
```

On Windows (PowerShell):

```powershell
$env:DB_USERNAME="<user>"; $env:DB_PASSWORD="<password>"
.\mvnw.cmd spring-boot:run
```

API: `http://localhost:8080`

### Frontend

```bash
cd task-flow-frontend
npm install
npm start
```

App: `http://localhost:4200`

## API

Base path: `/api`. CORS is allowed for `http://localhost:4200`.

| Method | Endpoint     | Description       | Response             |
|--------|--------------|-------------------|----------------------|
| GET    | `/boards`    | List boards       | `BoardResponse[]`    |
| POST   | `/new-board` | Create a board    | `201`, created board |
| GET    | `/tasks`     | List all tasks    | `Task[]`             |
| POST   | `/new-task`  | Create a task     | `201`, created task  |

`BoardResponse`: `id`, `name`, `description`, `dateCreated`, `taskCount`.

Request bodies (validated with Jakarta Validation):
- `CreateBoardRequest`: `name`, `description`
- `CreateTaskRequest`: `name`, `description`

## Domain model

- **Board** — `name`, `description`, `dateCreated`; has many `Task`, many-to-many `User` (members)
- **Task** — `name`, `description`, `status`, `type`, `dateCreated`; belongs to `Board`, optional `assignee` (`User`)
- **User**

Task statuses: `To do`, `In progress`, `Review`, `Done`.

## Project structure

```
.
├── src/main/java/com/max/TaskFlow
│   ├── controller/      REST controllers
│   ├── service/         business logic
│   ├── repository/      Spring Data JPA repositories
│   ├── model/           JPA entities
│   └── DTO/             request/response objects
├── src/main/resources/application.properties
└── task-flow-frontend/
    └── src/app
        ├── components/  dashboard, board, column, task, modals
        ├── services/    HTTP services
        ├── models/      TypeScript interfaces
        └── utils/
```

## Frontend routes

| Path         | Component                                               |
|--------------|---------------------------------------------------------|
| `/dashboard` | `Dashboard` — board list, create board modal            |
| `/board/:id` | `Board` — Kanban columns with drag & drop (Angular CDK) |

## Configuration

`src/main/resources/application.properties`:

| Property                        | Value                                  |
|---------------------------------|----------------------------------------|
| `spring.datasource.url`         | `jdbc:mysql://localhost:3306/taskflow` |
| `spring.jpa.hibernate.ddl-auto` | `update`                               |
| `spring.jpa.open-in-view`       | `false`                                |

## Tests

```bash
./mvnw test                          # backend
cd task-flow-frontend && npm test    # frontend
```

## Known limitations

- `Board` view loads all tasks instead of filtering by board.
- Task status is not set on creation.
- No authentication.
- Drag & drop changes are not persisted.
