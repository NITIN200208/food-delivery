import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'



const Placeorder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>

        <div className='multi-field'>
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>

        <div className='multi-field'>
          <input type="text" placeholder='Email'/>
        </div>

        <div className='multi-field'>
          <input type="text" placeholder='Street'/>
        </div>

        <div className='multi-field'>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='Last Name'/>
        </div>

        <div className='multi-field'>
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
          <input type='text' placeholder='Phone'></input>
      </div>

      <div className='place-order-right'>
      <div className='cart-total'>
              <h2>Cart Totals</h2>
              <div className='cart-total-details'>
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <p>Delivery fee</p>
                <p>{2}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
              </div>
              <button>Process To Payment</button>
          </div>
      </div>
    </form>
  )
}

export default Placeorder