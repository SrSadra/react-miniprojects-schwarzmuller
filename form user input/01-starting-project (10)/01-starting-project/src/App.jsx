import Header from './components/Header.jsx';
import LoginRef from "./components/LoginRef"
import Signup from './components/Signup.jsx';
import LoginState from "./components/LoginState"

function App() {
  return (
    <>
      <Header />
      <main>
        <LoginState />
        <h2> sign up</h2>
        <Signup />
        <></>
      </main>
    </>
  );
}

export default App;
