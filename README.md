# Verify API

A straightforward API for managing and checking user verification statuses.

## Endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/verify` | Creates a new verification entry for a user. |
| `GET` | `/status/:userId` | Retrieves the current verification entry and status for a specific user. |
| `PATCH` | `/status/:userId` | Updates the status of a verification entry. Allowed statuses are `pending`, `verified`, or `rejected`. |
| `GET` | `/health` | Returns the server health status and uptime. |

## Running locally

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Copy the environment file: `cp .env.example .env` (or create `.env` manually).
4. Run `npm run dev` to start the local development server.

## Running with Docker

To run the application using Docker Compose, execute the following command:
```bash
docker-compose up
```

To stop the application and remove the containers, run:
```bash
docker-compose down
```

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | The port on which the server listens. | `3000` |

## CI workflow

The GitHub Actions CI workflow runs automatically on any push to any branch and on pull requests to the `main` branch. It ensures that the codebase remains healthy by setting up Node.js, installing dependencies, and running a build to verify the TypeScript project compiles without errors.

## Architectural decision

An in-memory store was used instead of a database for this project to prioritize simplicity and eliminate external dependencies. Since the scope of this task is focused on basic verification functionality, a fully-fledged database would introduce unnecessary complexity and overhead, making an in-memory approach the most practical and efficient solution.
