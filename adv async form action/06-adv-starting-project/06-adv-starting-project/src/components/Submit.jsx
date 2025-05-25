import React from 'react'
import { useFormStatus } from 'react-dom'

const Submit = () => {
    const {pending} = useFormStatus();

  return (
    <p className="actions">
    <button type="submit" disabled={pending}>{pending? "pending..." : "submit" }</button>
    </p>
  )
}

export default Submit
