import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './oneview/src/drizzle/migrations',
  schema: './oneview/src/drizzle/schema/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});