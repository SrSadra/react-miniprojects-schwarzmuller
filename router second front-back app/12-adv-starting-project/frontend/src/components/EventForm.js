import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate('..');
  }

  return (
    <>
    {actionData && actionData.errors && (<ul>
      {Object.values(actionData.errors).map((el) => (
        <li>{el}</li>
      ))}
    </ul>)}
    <Form method={method} className={classes.form}> {/*to send form data to action function with having all Data */}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title? event.title : ""}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image? event.image : ""}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date? event.date : ""}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description? event.description : ""}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting? "is submitting..." : "Save"}</button>
      </div>
    </Form>
    </>
  );
}

export default EventForm;

export const eventFormAction = async ({request , params}) => {
  console.log("akkki");
  
  const method = request.method;
  const formData = await request.formData();

  
  
  const sendingData = {
    title : formData.get("title"),
    image : formData.get("image"),
    date: formData.get("date"),
    description : formData.get("description")
  }

  let url = "http://localhost:8080/events";

  console.log(sendingData);
  

  if (method === "PATCH"){
    const id = params.id;
    url += "/" + id;
  }

  console.log("rr" , url);
  

  const response = await fetch(url , {
      method,
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(sendingData)
  });


  if (!response.ok){
    throw new Response(JSON.stringify({message : "cant fetch data" , status: 500}))
  }

  if (response.status === 422){
    return response;
  }

  return redirect("/events")
  
}
