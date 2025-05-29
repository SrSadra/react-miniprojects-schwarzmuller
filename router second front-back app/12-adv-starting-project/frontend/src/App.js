// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./components/HomePage";
import EventsPage, { loader } from "./components/EventsPage";
import EventsDetailPage, { eventLoader } from "./components/EventsDetailPage";
import NewEventPage from "./components/NewEventPage";
import EditEventPage from "./components/EditEventPage";
import Root from "./components/Root";
import EventsRoot from "./components/EventsRoot";
import ErrorPage from "./components/ErrorPage";

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
            {
              index : true, element: <EventsDetailPage />
            },
            {
              path: "edit" , element : <EditEventPage />
            }
          ]
        },
        {
          path: "new" , element: <NewEventPage />
        },

      ]
    },


  ]
}])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
