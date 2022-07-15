
import { Typography, Button, Divider } from '@mui/material';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const PaymentForm = ({ checkoutToken }) => {
  return (
    <div>
      <Review checkoutToken={checkoutToken}/>
    </div>
  )
}

export default PaymentForm