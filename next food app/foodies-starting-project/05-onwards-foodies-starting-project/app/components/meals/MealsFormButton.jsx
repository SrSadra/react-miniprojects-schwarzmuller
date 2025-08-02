"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'


const MealsFormButton = () => {
    const { pending } = useFormStatus(); // this hook should be in client component and also inside form

  return (
      <button type="submit" disabled={pending}>{pending? "is submitting" : "Share Meal"} </button>
  )
}

export default MealsFormButton
