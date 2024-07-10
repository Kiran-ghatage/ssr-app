import React, { Profiler } from 'react';
import { Helmet } from 'react-helmet';
import './App.scss';
import Home from './pages/home/Home';

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  console.log('Profiler ID:', id);
  console.log('Phase:', phase);
  console.log('Actual duration:', actualDuration);
  console.log('Base duration:', baseDuration);
  console.log('Start time:', startTime);
  console.log('Commit time:', commitTime);
  console.log('Interactions:', interactions);
};

function App() {
  return (
    // <Profiler id="App" onRender={onRenderCallback}>
    <div className="App">
      <Helmet>
        <title>Book a Free 1:1 Trial Session</title>
        <meta name="description" content="Book a free 1:1 trial session for personalized learning." />
        <meta name="keywords" content="trial session, free trial, personalized learning, 1:1 session, education" />
      </Helmet>
      <Home />
    </div>
    // </Profiler>
  );
}

export default App;
