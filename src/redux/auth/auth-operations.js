import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Регистрация пользователя

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/user/signup', credentials);
    token.set(data.token);
  } catch (error) {
    const responseError = error.response.status;

    switch (responseError) {
      case responseError === 400:
        toast.error('You are already registered, please try to login', {
          position: toast.POSITION.TOP_CENTER,
          theme: 'colored',
        });
        break;
      case responseError === 500:
        toast.error('Oops... Server error! Please try later!"', {
          position: toast.POSITION.TOP_CENTER,
          theme: 'colored',
        });
        break;
      default:
        toast.error('Something went wrong!');
    }

    // if (responseError === 400) {
    //   toast.error('You are already registered, please try to login', {
    //     position: toast.POSITION.TOP_CENTER,
    //     theme: 'colored',
    //   });
    // } else if (responseError === 500) {
    //   toast.error('Oops... Server error! Please try later!"', {
    //     position: toast.POSITION.TOP_CENTER,
    //     theme: 'colored',
    //   });
    // } else {
    //   toast.error('Something went wrong!');
    // }
  }
});

// Вход пользователя в приложение

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const responseError = error.response.status;

    switch (responseError) {
      case responseError === 400:
        toast.error('Invalid address and/or password specified.', {
          position: toast.POSITION.TOP_CENTER,
          theme: 'colored',
        });
        break;
      default:
        toast.error('Something went wrong!');
    }
  }
});

// Выход пользователя из приложения

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    token.unset();
  } catch (error) {
    const responseError = error.response.status;

    switch (responseError) {
      case responseError === 500:
        toast.error('Oops... something happened to the server', {
          position: toast.POSITION.TOP_RIGHT,
          theme: 'dark',
        });
        break;
      default:
        toast.error('Something went wrong!');
    }
  }
});

//Действие при повторном обновлении страницы

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch {
      token.unset();
      toast.warn('Authorization timed out! Please authenticate again!');
    }
  }
);

const operstions = {
  register,
  logOut,
  login,
  fetchCurrentUser,
};
export default operstions;
