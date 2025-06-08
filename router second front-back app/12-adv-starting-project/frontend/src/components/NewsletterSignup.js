import { Form, useFetcher } from 'react-router';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
    const fecther = useFetcher();
    const {data , state} = fecther;

    if (state === "idle" && data && data.message){
        alert(data.message);
    }

  return (
    <fecther.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fecther.Form>
  );
}

export default NewsletterSignup;