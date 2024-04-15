# Employee To Do Task

## Start the application

Run `npx nx dev front-app-next` to start the development server. Happy coding!

## Build for production

Run `npx nx build front-app-next` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).



## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Backend APP (back-express)
Express backend application.

### Environment
- `DB_PROTOCOL`: Protocol name `mongodb`
- `DB_HOST`: Server address `localhost` | `127.0.0.1`
- `DB_PORT`: Port number `3306` | `27017`
- `DB_USER`: User name `root` | `admin`
- `DB_PASSWORD`: User password `code123*`
- `DB_NAME`: Database name `project_name`

#### Example:
```
DB_PROTOCOL = "mongodb"
DB_HOST = "localhost"
DB_PORT = "27017"
DB_USER = "root"
DB_PASSWORD = "example"
DB_NAME = "employee_to-do_task" 
```
