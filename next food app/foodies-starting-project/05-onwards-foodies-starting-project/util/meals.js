import sql from "better-sqlite3"

const db = sql("meals.db") // since default compnent in next are server component we dont need to use useEffect to fetch data
// we are already on server side

export async function getMeals() {
    return db.prepare("SELECT * FROM meals").all(); // all is for fetching data and run is for posting data (like inserting data)
    // since its multiple row we use all and not get
}