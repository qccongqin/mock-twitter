import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { RegisterSchemeType } from '../components/RegisterForm';

const registerApi = async (data: RegisterSchemeType) => {
  const response = await axios.post('http://localhost:3000/users', data);
  return response.data;
};
export default function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterSchemeType) => registerApi(data),
    mutationKey: ['register'],
  });
}
