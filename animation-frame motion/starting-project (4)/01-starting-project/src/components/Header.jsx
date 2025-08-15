import { useState } from 'react';
import * as motion from "motion/react-client"
import NewChallenge from './NewChallenge.jsx';
import { AnimatePresence } from 'motion/react';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      <AnimatePresence>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
        </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button whileHover={{scale: 2 , backgroundColor: "#380066ff"}} transition={{type: "spring" , stiffness: 500}} onClick={handleStartAddNewChallenge} className="button">
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
