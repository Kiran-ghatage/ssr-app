import React, { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import './SignInForm.scss';

const TrialSessionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = useCallback((data) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  }, []);

  const isSubmitDisabled = useMemo(() => {
    return Object.keys(errors).length > 0;
  }, [errors]);

  return (
    <div className="trial-session-form">
      <h2>Book a free 1:1 trial session</h2>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form onSubmit={(onSubmit)}>

        <input
          type="text"
          {...register('name', { required: true })}
          placeholder="Learner's Name"
        />
        {errors.name && <p className="error">Name is required.</p>}

        <div className="mobile-input">
          <select {...register('countryCode')} defaultValue="+91">
            <option value="+91">+91</option>
            {/* we can Add more country codes as needed */}
          </select>
          <input
            type="text"
            {...register('mobileNumber', { required: true })}
            placeholder="Mobile Number"
          />
          {errors.mobileNumber && <p className="error">Mobile Number is required.</p>}
        </div>

        <button type="submit" disabled={isSubmitDisabled}>
          Continue
        </button>
      </form>

      <div className="login-link">
        <p>Already registered? <a href="/login">Login here</a></p>
      </div>
      <p className="terms">
        By continuing you agree to our <a href="/terms">Terms of Service</a> & <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
  );
};

export default TrialSessionForm;
