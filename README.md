# Real-Time Navigation App Back-End

## Overview

**Real-Time Navigation App Back-End** provides the server-side infrastructure for the navigation application. Built in TypeScript with Express, it offers RESTful APIs, connects to a PostgreSQL database, manages environment configuration, and leverages Drizzle ORM for database operations. This backend serves as the data layer to support location-based features, route calculations, and persistent user data.

## Features

### 🌟 Core Features

- **REST API**: Endpoints provided using Express for the navigation application's requirements.
- **Database Connectivity**: Uses PostgreSQL via Drizzle ORM to store and retrieve application data.
- **Environment Management**: Loads configuration from `.env` files for safe secrets and parameters.
- **Type Safety**: Implemented fully in TypeScript to help prevent bugs and improve maintainability.
- **Modern Dev Workflow**: Hot-reloading in development powered by Nodemon and TSX.

---

## Technology Stack

- **Language**: TypeScript
- **Framework**: Express
- **Database**: PostgreSQL (with Drizzle ORM)
- **ORM**: Drizzle ORM
- **Environment Management**: dotenv

---

## Dependency List for Real-Time Navigation App Back-End

The following packages are used in the codebase, according to actual project implementation:

### Main Dependencies

| Package         | Usage                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| **dotenv**      | Loads environment variables from `.env` files in development and production. |
| **drizzle-orm** | ORM for managing PostgreSQL database models, queries, and schema migrations. |
| **express**     | Web framework for creating RESTful API endpoints and handling requests.      |
| **pg**          | PostgreSQL client for Node.js, used by Drizzle ORM for DB operations.        |

### DevDependencies

| Package            | Usage                                                      |
| ------------------ | ---------------------------------------------------------- |
| **nodemon**        | Automatically restarts the server during development.      |
| **tsx**            | Executes TypeScript files directly, used in dev mode.      |
| **ts-node**        | Runs TypeScript code directly, typically used for tooling. |
| **typescript**     | The TypeScript compiler for static type checking.          |
| **drizzle-kit**    | CLI for running Drizzle ORM migrations.                    |
| **@types/express** | TypeScript type definitions for Express API.               |
| **@types/node**    | TypeScript type definitions for Node.js runtime.           |
| **@types/pg**      | TypeScript type definitions for PostgreSQL client.         |

---

## How Dependencies Are Used

- **API Layer:** `express` handles HTTP requests, routing, and middleware for the back-end service.
- **Database:** `pg` connects to PostgreSQL, while `drizzle-orm` acts as the abstraction layer for queries and migrations.
- **Environment:** `dotenv` initiates script configuration based on `.env` files.
- **Type Safety & Development Tools:** `typescript` is used as the language, with type definitions and dev tools (`nodemon`, `tsx`, `ts-node`) to enable a productive development workflow.
- **ORM Migration:** `drizzle-kit` supports schema migration tasks.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) running locally or remotely

### Installation

```bash
git clone https://github.com/fumzy123/real-time-navigation-app-back-end.git
cd real-time-navigation-app-back-end
npm install
```

### Running the Backend

#### Development

```bash
npm run dev
```

#### Production

```bash
npm run build
npm start
```

### Environment Variables

Create a `.env` file in your project root and provide required values, for example:

```
DATABASE_URL=postgres://<user>:<password>@localhost:5432/<database>
PORT=4000
```

---

## Usage

- Start the back-end service (`npm run dev` for hot-reloading; `npm start` for production).
- Connect your navigation application's front-end client to the API and database via configured endpoints.
- Drizzle ORM handles data access and migrations.

---

## Project Structure

```
real-time-navigation-app-back-end/
├── src/
│   └── index.ts            # Entry point for the backend application
├── drizzle.config.ts       # Configuration for Drizzle ORM
├── drizzle/                # (Likely) contains migration files and ORM schema
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes.
4. Push your branch (`git push origin feature/my-feature`)
5. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) if available for more information.

---

## License

This project is licensed under ISC. See the [LICENSE](LICENSE) file for details.

## Maintainers

- [fumzy123](https://github.com/fumzy123)

For support or feedback, open an [Issue](https://github.com/fumzy123/real-time-navigation-app-back-end/issues).

---
