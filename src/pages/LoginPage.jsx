import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authReduser';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <>
      <h2 className="tracking-in-expand-fwd">Login to personal account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email:</span>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="etyjetttty@sddagd.ua"
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label>
          <span>Password:</span>
          <input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            placeholder="12345678"
          />
          {errors.password && <span>This field is required</span>}
        </label>

        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default LoginPage;