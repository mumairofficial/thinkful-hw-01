This project is Assignment # 01 for pirple. I have tried to keep project structure simple and clean. Provided abstraction for end user to easily register API (handlers & routes) in specific files without touching other server logic files.


## Project structure

- `index.js` app init point
- `utils.js` exporting common methods
- `server.js` all http & https server logic (creation, request handling, listeners); this file export single method call to start server
- `env/env.prod.js, env/env.staging.js` files store environment configurations which served by `env/index.js`

User working area (create handler & register in routes.js with path mapping):
- **app/** this is working directory for end user
  - `handlers.js` all handlers (controller) methods
  - `routes.js` keep all routes related to handlers

