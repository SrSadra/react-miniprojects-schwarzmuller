import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent, queryClient } from '../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  const {mutate , isPending , error , isError} = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => { // when mutationFn is done successfully
      queryClient.invalidateQueries({queryKey: ["events"]}) // all the queries that "has" this specific key will be invalidate so the req for them is sent again
      navigate("/events");
    }
  })


  function handleSubmit(formData) {
    mutate({event: formData}); // remember if you use navigate here it will be executed no matter the mutationFn is succeed or not
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && (<p>please wait...</p>)}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      {isError && (<ErrorBlock  title={"Error occured on making event"} message={error.info?.message || "error posting data"}/>)}
      </EventForm>
    </Modal>
  );
}
