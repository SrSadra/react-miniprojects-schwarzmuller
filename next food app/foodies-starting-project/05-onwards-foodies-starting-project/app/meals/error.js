"use client" // we use this because e want to catch all errors including client side err

const error = ({error}) => {
  return (
    <main className='error'>
          <h1>An Error Occured</h1>
          <p>Failed to Fetch data</p>
    </main>
  )
}

export default error
