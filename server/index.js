import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import CreateThread from '../src/pages/CreateThread';
import ThreadDetail from '../src/pages/ThreadDetail';

const app = express();
const port = 9000;

app.get('/', (req, res) => {
  const context = {};
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/thread/new'} element={<CreateThread />} />
        <Route path={'/thread/:id'} element={<ThreadDetail />} />
      </Routes>
    </StaticRouter>
  );

  res.send(`
    <html>
      <head>
        <title>react-stations-kiso4</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        ${appHtml}
      </body>
    </html>
  `);
});

app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
