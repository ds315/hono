
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

import App from "./app.tsx";
import './main.css';

import { hc } from 'hono/client';
import type { tRouter } from '../../server/main.ts';

export const rpc = hc<tRouter>('http://localhost:8000');

const root = document.getElementById('root') as HTMLElement;
const queryClient = new QueryClient();

createRoot(root).render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);
