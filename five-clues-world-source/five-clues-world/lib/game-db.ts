import { env } from 'cloudflare:workers';
export function database(){if(!env.DB)throw new Error('The game service is unavailable');return env.DB;}
