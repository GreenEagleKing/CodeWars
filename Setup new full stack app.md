Setup new full stack app:

mkdir api-project
cd api-project
npm init 
npm install express --save
npm install mongodb --save
npm install ejs --save
npm install dotenv --save



Connect to database:

let db,
    dbConnectionStr = 'mongodb+srv://demo:demo@cluster0
    .2wapm.mongodb.net/rap?retryWrites=true&w=majority',
    dbName = 'rap'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })


.env file : 

DB_STRING = 
  mongodb+srv://demo:demo@cluster0.2wapm.mongodb.net/rap?retryWrites=true&w=majority


add .env to gitignore:

.env
node_modules

Add heroku connection :

heroku config:set DB_STRING = 
  mongodb+srv://demo:demo@cluster0.2wapm.mongodb.net/rap?retryWrites=true&w=majority