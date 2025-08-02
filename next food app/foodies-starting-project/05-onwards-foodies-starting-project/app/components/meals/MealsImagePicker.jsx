"use client";

import { useRef, useState } from "react"
import classes from "./mealsImagePicker.module.css"
import Image from "next/image";

const MealsImagePicker = ({ label, name }) => {
    const [imagePicked, setImagePicked] = useState(null);
    const imageInputRef = useRef();

    function onClickButton() {
        imageInputRef.current.click();
    }

    function onImagePick(event) {
        const file = event.target.files[0];

        if (!file) {
            setImagePicked(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setImagePicked(fileReader.result)
        }

        fileReader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
          <label htmlFor={name}></label>
          <div className={classes.preview}>
              {!imagePicked && (<p>No image picked</p>)}
              {imagePicked && (<Image
                  src={imagePicked}
                  alt="user picked image"
                  fill
              />)}
          </div>
          <div className={classes.control}>
              <input className={classes.input} id={name} type="file" accept="image/png, image/jpeg, image/jpg" name={name} ref={imageInputRef} onChange={onImagePick}></input>
              <button className={classes.button} type="button" onClick={onClickButton}>Pick an image</button>
          </div>
    </div>
  )
}

export default MealsImagePicker
