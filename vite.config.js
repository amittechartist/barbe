import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Set base to /rhdemo/ for correct asset referencing
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy all API requests starting with /api to the target API server
      '/api': {
        target: 'https://recurhealthapi.abhianya.com', // Target API server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: true, // Use this if you're dealing with HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix from the request
      },
    },
    cors: {
      origin: ['https://recurhealth.abhianya.com', 'https://abhianya.com', 'http://localhost:3000'],
      methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
