import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './jaheshkala-app/src/App.tsx';

console.log("Loading App...");
try {
  // It's a client-side app so it might fail on window/document. We can just test if the file evaluates without syntax/reference errors.
} catch(e) {
  console.error(e);
}
