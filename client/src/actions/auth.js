import { AUTH } from '../constants/actiontype.js';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/');
    } catch (error) {
      alert('Error: ',error)
      console.log(error);
    }
  };
  
  export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/');
    } catch (error) {
      alert('Error: ',error)
      console.log(error);
    }
  };
  

