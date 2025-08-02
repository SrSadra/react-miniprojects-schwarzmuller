import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "../components/meals/MealsGrid"
import { getMeals } from "@/util/meals"
import { Suspense } from "react";

export const metadata = {
    title: "Meals",
    description: "See All Meals we have provided for you"
};

async function GetMeals() {
    const meals = await getMeals();
    console.log("meal", meals);

    return <MealsGrid meals={meals} />;
}
export default function mealPage() {

    
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
          <Suspense fallback={<p>loading....</p>}>
            <GetMeals />
          </Suspense>
        </main>
      </div>
    );
}