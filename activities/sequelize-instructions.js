// Create a new local MYSQL database called ‘todolist’,
// but don’t create any tables.
//
//     Delete any references to the orm.js file
// inside the api-routes.js file.
//
//     Delete the config folder.
//
//     While inside the activity folder,
//     run npm install in terminal.
//
//     In terminal, type in the following command:
//     “sequelize init:models init:config”. If this produces an error,
//     then you may not have the sequelize-cli installed globally.
//     If this is the case, for now you can run
//     ./node_modules/.bin/sequelize init:config init:models
//
//
// Step 5 should have created a config and a models folder
// for us. Navigate to the config folder, open config.json,
//     and modify the development object’s “database”,“username”
// and “password” values to match your MYSQL database on your machine.
//
//     Navigate to the models folder and create a new file
// called todo.js. Create a Todo model with columns for “text” (DataTypes.STRING), and “complete” (DataTypes.BOOLEAN).
//
//     Navigate to the server.js file and require all of our
// models by requiring the models folder. Save this to a variable and name it “db”.
//
// Sync the models by running db.sequelize.sync()
// before we start the express server.
//
//     In your terminal, run “node server”.
// Check MYSQL Workbench to see if a Todos table was created.
// If so, you were successful. If not, check your terminal for any errors.

// ----------------------------------

// Open the folder and run npm install.

// Update the config.json file’s development object with 
// your own local MYSQL database settings.

// Navigate to the api-routes.js folder.

// Add a Sequelize findAll method inside the GET route 
// which finds all of the todos and returns them to the user as JSON.

// Add a Sequelize create method to the POST route to save 
// a new todo to the database using the data sent to the server in req.body.

// To test if this worked, open your terminal and run node 
// server and navigate to localhost:8080. If you are able 
// to save new todos, you were successful.

// Hint: We can access the Todo model here with “db.Todo”

// If you get stuck or finish early, check out the Sequelize 
// Star Wars solution from last class, or try and see if you 
// and your partner can make sense of Sequelize’s docs for the findAll and create methods


// ---------------------------------
// Open the folder slacked out to you

// Run npm install

// Update the config.json file’s development object 
// with your own local MYSQL database settings.

// Inside the api-routes.js file, look for the DELETE route 
// and add a Sequelize method to delete the todo with the id 
// available to us in req.params.id.

// Inside of the same file, look for the PUT route and add a 
// Sequelize method to update a todo with the new todo data available to us inside req.body.

// Again, you won’t need to touch the front end HTML or 
// JavaScript to make any of this work.

// HINT: you will need to pass in an options object with 
// a “where” attribute into both methods in order to filter 
// these queries to target the Todos we want to update or 
// delete. http://docs.sequelizejs.com/en/latest/docs/querying/#where

// Navigate to localhost:8080. If you can update and delete 
// todos without errors, you were successful.

// If you get stuck or finish early, discuss the documentation 
// for the update and destroy methods with your partner here:

// http://docs.sequelizejs.com/en/latest/api/model/#updatevalues-options-promisearrayaffectedcount-affectedrows

// http://docs.sequelizejs.com/en/latest/api/model/#destroyoptions-promiseinteger
