import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { fetchEvents } from '../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setsearchTerm] = useState();

  const {data , isError , error , isLoading} = useQuery({
    queryKey: ["events" , {search: searchTerm} , {max: 3}],
    queryFn: ({signal , queryKey}) => fetchEvents({searchTerm, ...queryKey[2] , signal}),
    enabled: searchTerm !== undefined // we want query to be disabled initially and not for empty search bar
  })

  function handleSubmit(event) {
    event.preventDefault();
    setsearchTerm(searchElement.current.value)
  }

  let content = (<p>Please enter a search term and to find events.</p>)

  if (isLoading){
    content = <LoadingIndicator />
  }

  if (isError){
    content = <ErrorBlock title="An Error Occured" message={error.info?.message || "Error on fetching data"}/>
  }

  if (data){
    content = (
      <ul className='events-list'>
        {data.map((event) => (
          <li key={event}>
            <EventItem event={event}/>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
