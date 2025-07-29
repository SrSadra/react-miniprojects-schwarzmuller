import Link from 'next/link';
import Image from 'next/image';

import classes from './MealsItem.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
    console.log("img" , image , "sl" , slug);
    
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={image} alt={title} fill /> { /* fill property is for when we dont want to set height and width manully but automatically by real dimension of image*/}
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}