createDataBase("db_products", "tatiane", "123345")

function createDataBase (databaseName, username, password) {
    console.log(`connect:DBCONNECT;user=${username};pass=${password};initial_database= ${databaseName}`);
}