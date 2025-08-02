"use client";

import MealsImagePicker from "@/app/components/meals/MealsImagePicker";
import classes from "./page.module.css";
import { shareMealFormAction } from "@/util/action";
import { useActionState } from "react";
import MealsFormButton from "@/app/components/meals/MealsFormButton";

export default function ShareMealPage() {
    const [state , formAction] = useActionState(shareMealFormAction , {message :null}); // this recieves two argument . first is the actual server action that should be triggered , second is initial state before getting the response
    // state is the last state of sharemeal return
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required autoComplete="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <MealsImagePicker label={"meal image"} name={"image"}/>
            {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormButton />
          </p>
        </form>
      </main>
    </>
  );
}
