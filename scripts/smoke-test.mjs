// Server-render every route through Vite to catch invalid JSX / import errors. NOT a visual or interaction test.
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { ROUTES } = await vite.ssrLoadModule('/src/routes/routes.jsx');
let bad = 0;
globalThis.window = globalThis.window || { scrollTo() {} };
for (const r of ROUTES) {
  try {
    const mod = await vite.ssrLoadModule(`/src/pages/${r.name}.jsx`);
    const html = renderToString(React.createElement(StaticRouter, { location: r.path }, React.createElement(mod.default)));
    console.log('OK  ', r.path.padEnd(58), html.length + ' chars');
  } catch (e) { bad++; console.log('FAIL', r.path, e.message); }
}
console.log(bad ? bad + ' FAILED' : 'All ' + ROUTES.length + ' routes render');
await vite.close(); process.exit(bad ? 1 : 0);
