import { useActionState, useContext } from "react";
import { OpinionsContext } from "../store/opinions-context"; 
import Submit from "./Submit";

export function NewOpinion() {

  const {addOpinion} = useContext(OpinionsContext);

  async function newOponionAction(prevState , formData){
    const username = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    console.log(body);
    

    let errors = [];

    if (title.trim().length < 5){
      errors.push("title must be longer than 5 char")
    }

    if (body.trim().length < 5){
      errors.push("body is less than 5 char")
    }

    if (errors.length > 0){
      return {errors , enteredValue: {username , title, body}};
    }

    await addOpinion({title, body , username});
    return {errors: null};
  }

  const [formState , formAction] = useActionState(newOponionAction, {errors : null})


  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        {formState?.errors && <ul className="">{formState?.errors.map((err) => (
          <li>{err}</li>
        ))}</ul>}

        <Submit />
      </form>
    </div>
  );
}
