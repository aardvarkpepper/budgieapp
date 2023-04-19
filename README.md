# Back End for Budget App:
Create an Express project in terminal with
```
npm init-y
npm i express dotenv nodemon cors
touch .env .gitignore
```

In .env, enter

```
PORT=3001
```

(or other port of your choice.)
Overwrite existing files with repository files.

In package.json,
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  ```

  Save all changes.  In terminal, type
  ```
  npm start
  ```