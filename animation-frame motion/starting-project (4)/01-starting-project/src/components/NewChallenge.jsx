import { useContext, useRef, useState } from 'react';
import * as motion from "motion/react-client"
import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';
import images from '../assets/images.js';
import { stagger, useAnimate } from 'motion/react';

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();
  const [scope, animate] = useAnimate();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      animate("input, textarea", {
        x: [-10, 0, 10, 0], animationDelay: 0, // first value is the tags that should be triggered
        delay: stagger(0.05)
      })
      return; // this animate function calling that calls animatation implicitly is called imperative animation
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}> {/*this means animate function only select input and textarea tag inside form and not all over the jsx */}
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul id="new-challenge-images"
          variants={{visible: {transition : {delayChildren: 0, staggerChildren: 0.05}}}} // this stagger appearing of children 0.05 in compare to prev children (without this every child item will appear at same time). delaychildren is only for first child
        >
          {images.map((image) => (
            <motion.li 
              variants={{ // this motion.li doesnt need animate or initial props since it gets what to do from variant and the state (for trigerring variant) from parent comp
                hidden: { scale: 0.1, opacity: 0 },
                visible: {scale: [5, 1] , opacity: 1} // when you set an array it goes from values from start of array as frame to the last element for scale (only two key frames are supported) (key frames as values)
              }}
              transition={{ type: "spring" }}
              // exit="visible"
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
