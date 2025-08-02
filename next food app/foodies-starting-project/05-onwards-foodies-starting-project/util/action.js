"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMealFormAction(prevState ,formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    slug: formData.get("title"),
  };
  console.log(meal);

  if (isInvalidText(meal.title)) { // we aways must validate user input in server side here
    return {
      message : "invalid input"
    } // you can pass a json object with response 
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
