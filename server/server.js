import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../src/App';

const PORT = 8080;
const app = express();

const router = express.Router();

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    
    const { pipe } = renderToPipeableStream(<App />, {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data.replace('<div id="root"></div>', '<div id="root">'));
        pipe(res);
        res.write('</div>');
      },
      onError(error) {
        console.error(error);
        res.statusCode = 500;
        res.send('An error occurred');
      }
    });
  });
};

router.use('^/$', serverRenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
