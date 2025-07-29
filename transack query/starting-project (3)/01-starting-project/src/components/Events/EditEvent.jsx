import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const {id} = useParams();

  const {data, isPending , isError , error} = useQuery({
    queryKey: ["events" , {eventId: id}],
    queryFn : ({signal}) => fetchEvent({signal, id}),
    staleTime: 10000 // server use cache data if re-fetching is happened less than 10 second ago (data seems to be updated). this can prevent sending 2 seq req
    // one for router triggering and one for using useQuery

  })

  const {mutate , isPending : isPendingUpdate , isError: isErrorUpdate , error: errorUpdate} = useMutation({
    mutationFn: updateEvent,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({queryKey: ["events"]})
    //   navigate("../");
    // }
    onMutate: (data) => { // input is object of mutate inputs (data has id and event property)
      const newEvent = data.event
      queryClient.cancelQueries({queryKey: ["events" , {eventId: id}]}); // cancel queries that are getting data (using useQuery)
      const prevQueryData = queryClient.getQueryData(["events" , {eventId: id}]);
      queryClient.setQueryData(["events" , {eventId: id}] , newEvent) // we manipulate this query with this fake posting data (that can be rollback if not success)
      return {prevQueryData}
    },
    onError: (error , data , context) => { // context is return of onMutate function
      queryClient.setQueryData(["events" , {eventId: id}] , context.prevQueryData); // setting back the query data to prev if we hit error (rollback)
    },
    onSettled : () => { // this function is done no matter mutateFn is successfull or not
      queryClient.invalidateQueries({queryKey: ["events", {eventId: id}]})
    }
  });

  function handleSubmit(formData) {
    console.log("aloo");
    
    mutate({id , event: formData});
    navigate("../")
  }

  function handleClose() {
    navigate('../');
  }

  let content = (<EventFofrm inputData={data} onSubmit={handleSubmit}>
    <Link to="../" className="button-text">
      Cancel
    </Link>
    <button type="submit" className="button">
      Update
    </button>
  </EventForm>)

  if (isPending){
    content = (<>
    <LoadingIndicator />
    <p>please wait...</p>
    </>)
  }


  if (isError){
    content = (
      <>
        <ErrorBlock title={"failed to fetch data"} message={error.info?.message || "an error occured fetching data"}/>
        <div className='form-actions'>
          <Link to={"../"} className='button'>
            Ok
          </Link>
        </div>
      </>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


export async function loader ({params}) {
  return await queryClient.fetchQuery({ // this loader in router will trigger this query every time we visit this component.
    queryKey: ["events" , {eventId: params.id}],
    queryFn : ({signal}) => fetchEvent({signal, id : params.id})
  })
}