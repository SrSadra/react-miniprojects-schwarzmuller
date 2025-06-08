// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./components/HomePage";
import EventsPage, { loader } from "./components/EventsPage";
import EventsDetailPage, { deleteEventAction, eventLoader } from "./components/EventsDetailPage";
import NewEventPage, { newEventAction } from "./components/NewEventPage";
import EditEventPage from "./components/EditEventPage";
import Root from "./components/Root";
import EventsRoot from "./components/EventsRoot";
import ErrorPage from "./components/ErrorPage";
import { eventFormAction, EventFormAction } from "./components/EventForm";
import NewsletterPage, { newsletterAction } from "./components/Newsletter";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([{
  path : "/", element: <Root />,
  errorElement: <ErrorPage />, 
  children: [
    {
      path: "/" , element: <HomePage />, index: true
    },
    {
      path: "events" , element: <EventsRoot /> ,
      children: [
        {
          path: "" , element : <EventsPage />, index: true, loader: loader
        },
        {
          path: ":id", loader: eventLoader , id: "event-detail" , children: [ // in order to access parent loader returns we assign a id to parent 
            { // loader recieves function and load function before loading the component
              index : true, element: <EventsDetailPage /> , action: deleteEventAction
            },
            {
              path: "edit" , element : <EditEventPage /> , action: eventFormAction
            }
          ]
        },
        {
          path: "new" , element: <NewEventPage /> , action: eventFormAction
        },

      ]
    },
    {
      path: 'newsletter',
      element: <NewsletterPage />,
      action: newsletterAction,
    },
  ]
}])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
