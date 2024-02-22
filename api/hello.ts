// api/hello.ts
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    res.json({ message: 'Hello from a Vercel Serverless Function with TypeScript!' });
};