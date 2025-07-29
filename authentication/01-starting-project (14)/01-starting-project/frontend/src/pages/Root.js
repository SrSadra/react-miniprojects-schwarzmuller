import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { tokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token){
      return;
    }

    if (token === "EXPIRED"){ // if token is expired 
      submit(null, {method: "post", action: '/logout'});
    }

    const duration = tokenDuration();

    setTimeout(() => {
      submit(null, {method: 'post', action: "/logout"});
    }, duration)

  }, [token , submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
