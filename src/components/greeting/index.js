import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  getGreeting,
  selectAllGreeting,
  getGreetingStatus,
} from '../../redux/feature/greetingSlice';

const greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectAllGreeting);

  useEffect(() => {
    if (getGreetingStatus === 'idle' || 'succeeded') {
      dispatch(getGreeting());
    }
  }, [getGreetingStatus, dispatch]);
  return (
    <div>
      <h1 key={nanoid()}>{greeting.message}</h1>
    </div>
  );
};

export default greeting;
