import { useState, useReducer, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { apiCall } from '~/utils';
import { iRootDispatch } from '~/lib/store';

const CHANGE_STATE = 'signup/change_state';

type TypeState = {
  id: string;
  password: string;
};

type TypeAction = {
  type: typeof CHANGE_STATE;
  payload: any;
};

const reducer = (state: TypeState, action: TypeAction) => {
  switch (action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const initialState: TypeState = {
  id: '',
  password: '',
};

export type TypeSignIn = {
  state: typeof initialState;
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function useSignIn(): TypeSignIn {
  const rematch = useDispatch<iRootDispatch>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState(false);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    dispatch({
      type: CHANGE_STATE,
      payload: {
        [name]: value,
      },
    });
  }

  const onSubmit = async (e: FormEvent) => {
    if (isLoading) return;
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await apiCall.post('/api/login', {
        user_id: state.id,
        password: state.password,
      });

      if (!!data.token) {
        localStorage.setItem('auth', data.token);
        rematch.user.changeUser({
          isLogged: true,
          username: data.name,
        });
      } else {
        alert('서버에러 서버에러');
      }
    } catch (err) {
      console.error(err);
      alert('서버에러 서버에러');
    }
    setLoading(false);
  };

  return {
    state,
    onSubmit,
    onChange,
  };
}

export default useSignIn;
