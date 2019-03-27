# get-my-grades

> Get My Grades Task

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
# gmg

I began the process by working around the router and getting the links to function and redirect properly. Personally, working around the routes is the first step I apply to my projects. In this task, I've installed the vue-router package and defined my own routes in the file at router/index.js.

After implementing and testing the redirecting logic, I went on to style the pages. I've installed bootstrap-vue for a simple access to responsive cards (About, Team pages) and navbar and went one to edit the given attributes to better fit the design.

Finally, I've installed axios and vue-server to serve a db.json, fetch its object People and rendered its key-values on a table (People page).

As for the next steps, I would continue to improve the responsiveness of the web app and would implement a feature to render the Team's cards with a more detailed description of its subjects. On the homepage, I would extend its content to feature a "How it Works" section detailing the service journey to the users.
