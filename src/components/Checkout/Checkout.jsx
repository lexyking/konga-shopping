import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import useStyles from './styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

import { commerce } from '../lib/commerce'
const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory()

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken}/>
  )

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart, activeStep, history])

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  const Confirmation = () => (
    <>
      Confirmation
    </>
  );

  return (
    <>
    <CssBaseline />
    <div className={classes.toolbar} />
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">Checkout</Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation /> : <Form />}
      </Paper>
    </main>
  </>
  )
}

export default Checkout;