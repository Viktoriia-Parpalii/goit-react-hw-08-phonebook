import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/authReduser';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log('data: ', data);
    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        toast.success('Hi! Register was successfully fetched!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
    reset();
  };

  return (
    <>
      <h2 className="tracking-in-expand-fwd">New user registration</h2>
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
          <span>Name:</span>
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Angelina"
          />
          {errors.name && <span>This field is required</span>}
        </label>
        <label>
          <span>Password:</span>
          <input
            {...register('password', { required: true, minLength: 8 })}
            type="password"
            placeholder="12345678"
          />
          {errors.password && <span>This field is required</span>}
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default RegisterPage;
