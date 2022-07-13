import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        render={({ field }) => <TextField {...field}
          name={name}
          label={label}
          required={required}
          fullWidth
          control={control}
          error={isError}
        />}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;