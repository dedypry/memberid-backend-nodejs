# base

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Migration Database Postgresql

```
# Migrate
npx knex migrate:latest

# running seder
npx knex seed:run
```
### Setting .env

```
# postgresql
copy from .env.example to .env

db port default = 5432
if change port
add DB_PORT = 3456

```

### Start Apps

```
npm run start
```

