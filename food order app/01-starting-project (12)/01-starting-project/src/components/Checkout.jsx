import React, { useContext } from 'react'
import Modal from './Modal'
import Button from './Button'
import UserProgress from '../store/UserProgressContext'
import CartContext from '../store/CartContext'
import useHttp from '../hook/useHttp'


const initialConfig = {mehtod: "POST"}; // this is to prevent infinite loop
const Checkout = () => {
    const {showCheckout , hideCheckout , progress} = useContext(UserProgress);
    const {items, clearCart} = useContext(CartContext);
    const {data , isLoading : isSending , error , sendRequest, clearData} = useHttp("http://localhost:3000/order" , initialConfig , []);

    function onHideCheckout(){
        hideCheckout();
    }

    // function onShowCheckout(){
    //     showCheckout();
    // }


    function onFinish(){
        hideCheckout();
        clearData();
        clearCart();
    }

    async function onSubmitForm(event){
        event.preventDefault();


        console.log("alooo");
        
        const fd = new FormData(event.target); // this will sync form names 
        const dataJson =  Object.fromEntries(fd.entries());
        console.log(dataJson);

        await sendRequest(JSON.stringify({ // data should be sent as json in body
            order: {
                items : items,
                customer: dataJson
            }
        }))

        
        
        // fetch("http://localhost:3000/orders" , {
        //     method : "POST",
        //     headers : {
        //         "Content-Type" : "application/json" // this ensures that data will be sent in json format
        //     },
        //     body : JSON.stringify({
        //         order: {
        //             items : items,
        //             customer: dataJson
        //         }
        //     })
        // })
    }

    let action = isSending ? <span>submitting data...</span> : (
        <>
        <Button onClick={onHideCheckout} textOnly type="button">Cancel</Button>
        <Button>Submit</Button>
        </>
        )

    if (data && !error){
        return <Modal open={progress === "checkout"} onClose={onHideCheckout}>
            <h2>Sucsess</h2>
            <p>
                <Button onClick={onFinish} textOnly type="button">ok</Button>
            </p>
        </Modal>
    }

    

  return (
    <Modal open={progress === "checkout"} onClose={onHideCheckout}>
      <form onSubmit={onSubmitForm}>
        <h2>Checkout</h2>
        <p>Total : {}</p>
        <div>
            <p>
                <label htmlFor={"full-name"} >{"Full name"}</label>
                <input id={"full-name"} name={"name"} required type='text'/>
            </p>
            <p>
                <label htmlFor={"email"} >{"Email Adrress"}</label>
                <input id={"email"} name={"email"} required type='email'/>
            </p>

            {error && (<p>{error}</p>)}
            <p>
            {action}
            </p>
        </div>
      </form>
    </Modal>
  )
}

export default Checkout
