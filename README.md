# Nest.js Starter with Husky, Codegen, and TypeORM

A simple starter template for building Nest.js applications with pre-configured tools like Husky, Codegen, and TypeORM.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Run Development Server](#run-development-server)
  - [Build for Production](#build-for-production)
- [Linting and Formatting](#linting-and-formatting)
- [Database Setup](#database-setup)
- [Code Generation](#code-generation)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (>= 18.0.0)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/ankitdev10/nest-starter.git
cd your-repo
npm install   # or yarn install
```

### Usage

## Run Development Server

```bash
pnpm start:dev # or yarn start:dev or npm run start:dev
```

## Build for production

```bash
pnpm build # or yarn build or npm run build
```

### Linting and Formatting

```bash
pnpm lint # or yarn lint or npm run lint
```

### Database Setup

Update following vairables in your `.env` file according to the database you prefer. Example for postgres is shown below:

```bash
DB_TYPE=postgres
DB_URL="postgres://<USERNAME>:<PASSWORD>@localhost:5432/<DB_NAME>"
```

### Code Generation

Refactor codegen.json file on the root of the directory to point to your graphql schemas.

```bash
pnpm codegen # or yarn codegen or npm run codegen
```
