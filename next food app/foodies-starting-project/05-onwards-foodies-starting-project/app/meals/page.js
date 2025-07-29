import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "../components/meals/MealsGrid"
import { getMeals } from "@/util/meals"

export default async function mealPage() {
    const meals = await getMeals();
    console.log("meal", meals);
    
    return (
        <div>
            <header className={classes.header}>
                <h1>All delicious meal</h1>
                <p>this is all for you</p>
                <p className={classes.cta}>
                    <Link href={"meals/share"}>Share your favorite recipes</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals}/>
            </main>
        </div>
    )
}