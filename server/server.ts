// server/server.ts
import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example API endpoint
  server.get('/api/data', (req: Request, res: Response) => {
    const data = { message: 'This is your API endpoint response!' };
    res.json(data);
  });

  // Handle all other requests with Next.js
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(3001, (err?: Error) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
  
});
