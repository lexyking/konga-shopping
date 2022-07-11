import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
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
        {/* {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />} */}
      </Paper>
    </main>
  </>
  )
}

export default Checkout;