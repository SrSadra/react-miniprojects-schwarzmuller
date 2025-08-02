import Image from "next/image"
import classes from "./page.module.css"
import { getMeal } from "@/util/meals"
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
    const meal = getMeal(params.slug);

    if (!meal) {
          notFound(); // prevent other component code from executing and finds the nearest not-found component
    }

    return {
        title: meal.title,
        description : "meal detail"
    }
}

export default function mealSlugPage({ params }) {
    const meal = getMeal(params.slug);

    if (!meal) {
        notFound() // prevent other component code from executing and finds the nearest not-found component
    }

    meal.instructions = meal.instructions.replace(/\n/g , "<br />")

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image fill src={meal.image} alt="meal image"/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>by {meal.creator}</p>
                    <p className={classes.summary}>{ meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}>
                </p>
            </main>
        </>
    )
}