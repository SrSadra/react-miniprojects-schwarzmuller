import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';
import { useState } from 'react';

export default function EventDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [isDeleting, setisDeleting] = useState(false)

  const {data , isError , isPending, error} = useQuery({
    queryKey: ["events" , {eventId : id}],
    queryFn : ({signal}) => fetchEvent({signal , id}) 
  });


  const {mutate , isPending: isPendingDelete , isError: isErrorDelete , error: errorDelete } = useMutation({
    mutationFn: deleteEvent,
    onSuccess : () => {
      queryClient.invalidateQueries({queryKey: ["events"], refetchType : "none"}); // all query that has events key is invalid and should get res again
      // set refetchType to none so it doesnt trigger events queryKey immidiatly but when its needed and we go to that page 
      navigate("/events");
    }
  });

  function onDelete(){
    mutate({id});
  }

  function onCancelDelete(){
    setisDeleting(false);
  }

  function onStartDelete(e){
    e.preventDefault();
    setisDeleting(true);
  }

  


  return (
    <>
      {isDeleting && (<Modal onClose={onCancelDelete}>
        <h2>Are you sure</h2>
        <p>this process can not be undone</p>
        <div>
          {isPendingDelete && (<p>Loading, please wait...</p>)}
          {!isPendingDelete &&  
          (<> <button onClick={onCancelDelete}>Cancel</button>
          <button onClick={onDelete}>Delete</button> </>)
          }
        </div>
        {isErrorDelete && (<ErrorBlock title={"an error occured"} message={error.info?.message || "can not fetch data"}/>)}
      </Modal>)}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isError && (<ErrorBlock title={"an error occured"} message={error.info?.message}/>)}
      {isPending && (<p>Wait a minute...</p>)}
      {data &&  (<article id="event-details">
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={onStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={"http://localhost:3000/" + data.image} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </article>)}
    </>
  );
}
