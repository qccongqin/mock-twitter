import React from 'react';
import { RegisterForm, RegisterSchemeType } from '../../components/RegisterForm';
import useRegister from '../../hooks/useRegister';

export const RegisterPage = () => {
  const mutation = useRegister();
  const onRegister = (registerData: RegisterSchemeType) => {
    console.log(registerData);
    mutation.mutate(registerData, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return <RegisterForm onRegister={onRegister} />;
};
