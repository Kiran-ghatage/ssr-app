import React from 'react';
import './ErrorFallback.scss';

function ErrorComponent({ error, resetErrorBoundary }){
  return (
    <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>We are experiencing technical difficulties. Please try again later.</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorComponent;