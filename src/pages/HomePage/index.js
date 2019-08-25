import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  App, Button, Title, Image
} from '../../style/home';
import { incrementCounter, decrementCounter, resetCounter } from './homePage';
import Counter from '../../components/Counter';
import logo from '../../assets/images/logo.png';

const HomePage = () => {
  const appRef = React.useRef(null);
  const dispatch = useDispatch();
  const { counter, resetLoading } = useSelector(state => state.Home, shallowEqual);
  const increment = () => {
    dispatch(incrementCounter(counter));
  };

  const decrement = () => {
    dispatch(decrementCounter(counter));
  };

  console.log(resetLoading);
  return (
    <App ref={appRef}>
      <Image src={logo}/>
      <Title>React Redux Starter BoilerPlate</Title>
      <Button type="button" onClick={increment}>+</Button>
      <Button type="button" onClick={decrement}>-</Button>
      <Counter counter={counter} />
      <Button loading={resetLoading} type="button" onClick={() => { dispatch(resetCounter()); }}>Reset</Button>
    </App>
  );
};

export default HomePage;
