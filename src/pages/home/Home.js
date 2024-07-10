import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import './Home.scss';
import SignInForm from '../../components/signin/SignInForm';
import CardsContainer from '../../components/card/CardsContainer';
import ErrorFallbackRender from "../../errorBoundary/ErrorFallback"

const Home = () => {
  return (
    <ErrorBoundary 
    FallbackComponent={ErrorFallbackRender} onReset={(details) => { }}>
    <div className="home">
      <div className="left-side">
        <SignInForm />
      </div>
      <div className="right-side">
        <CardsContainer />
      </div>
    </div>
    </ErrorBoundary>

  );
};

export default Home;
