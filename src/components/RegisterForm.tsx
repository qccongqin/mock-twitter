import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = {
  firstName: string;
  lastName: string;
};

const registerScheme = z
  .object({
    firstName: z
      .string()
      .min(2, 'FirstName must be at least 2 charactors.')
      .max(20, 'FirstName must be no more than 20 charactors.'),
    lastName: z
      .string()
      .min(2, 'LastName must be at least 2 charactors.')
      .max(20, 'FirstName must be no more than 20 charactors.'),
    email: z.string().email('Email is invalid'),
    password: z.string().min(4, 'Password must have at least 4 charactors.'),
    confirm: z.string().min(4, 'Password must have at least 4 charactors.'),
    contact: z.enum(['email', 'phone']),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Wrong password.',
    path: ['confirm'],
  });

export type RegisterSchemeType = z.infer<typeof registerScheme>;
// type sss = z.infer<typeof registerScheme>

type RegisterFormProps = {
  // onRegister: (registerData: RegisterSchemeType) => void;
  onRegister: SubmitHandler<RegisterSchemeType>
};
export const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  console.log('>>>>>>>> RegisterForm rendering');
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
    trigger,
    getFieldState,
  } = useForm<RegisterSchemeType>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      contact: 'email',
    },
    // resolver: async (data, context, option) => {
    //   // you can debug your validation schema here
    //   console.log('formData', data);
    //   console.log('validation result', await zodResolver(registerScheme)(data, context, option));
    //   return zodResolver(registerScheme)(data, context, option);
    // },
    resolver: zodResolver(registerScheme),
  });
  // console.log('>>>>>> isValid=' + isValid);

  useEffect(() => {
    console.log('>>>>>>>>>> useEffect called');
    const sub = watch((_value, { name }) => {
      if (name === 'password' && getFieldState('confirm').isDirty) {
        trigger('confirm');
        // trigger(['password', 'confirm'])
      }
    });
    return () => sub.unsubscribe();
  }, [getFieldState, watch, trigger]);

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const myHandleSubmit: SubmitHandler<RegisterSchemeType> = (data) => {
    console.log('>>>>>> myHandleSubmit called');
  
    console.log(data);
    // e.preventDefault();
  };

  return (
    <div className="mx-[10px] flex flex-col">
      <form
        className="mx-[10px] w-full  max-w-80 self-center"
        onSubmit={handleSubmit(onRegister)}>
        <label className="block" htmlFor="first-name">
          First Name
        </label>
        <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none hover:shadow-lg focus:border-blue-500 focus:shadow-lg"
          type="text"
          id="first-name"
          {...register('firstName')}
        />
        <span className="block h-6 text-xs text-red-500">{errors.firstName?.message}</span>

        <label htmlFor="last-name" className="block">
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          {...register('lastName')}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none hover:shadow-lg focus:border-blue-500 focus:shadow-lg"
        />
        <span className="block h-6 text-xs text-red-500">{errors.lastName?.message}</span>

        <label className="block" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none hover:shadow-lg focus:border-blue-500 focus:shadow-lg"
          {...register('email')}
        />
        <span className="block h-6 text-xs text-red-500">{errors.email?.message}</span>

        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none hover:shadow-lg focus:border-blue-500 focus:shadow-lg"
        />
        <span className="block h-6 text-xs text-red-500">{errors.password?.message}</span>

        <label htmlFor="confirm" className="block">
          Confirm Password
        </label>
        <input
          id="confirm"
          type="password"
          {...register('confirm')}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none hover:shadow-lg focus:border-blue-500 focus:shadow-lg"
        />
        <span className="block h-6 text-xs text-red-500">{errors.confirm?.message}</span>

        <div>Preferred Contact Method</div>

        <div className="mb-6 grid grid-cols-2">
          <label htmlFor="contact-method-phone">
            <input type="radio" id="contact-method-phone" value="phone" {...register('contact')} />
            Phone
          </label>

          <label htmlFor="contact-method-email">
            <input type="radio" id="contact-method-email" value="email" {...register('contact')} />
            Email
          </label>
        </div>

        {/* <label className="block" htmlFor="contact-method">
          Preferred Contact Method
        </label>
        <select id="contact-method" {...register('contact')}>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select> */}

        <button
          className="mx-auto block rounded-md bg-blue-500 px-4 py-2.5  text-white enabled:hover:bg-blue-700 disabled:bg-blue-200 "
          type="submit"
          disabled={!isValid}>
          Register
        </button>
      </form>

      {/* <p>normal Form</p>
      <form onSubmit={myHandleSubmit}>
        <label>
          <div>test</div>
          <input style={{ display: 'block' }} minLength={5} required />
        </label>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};
