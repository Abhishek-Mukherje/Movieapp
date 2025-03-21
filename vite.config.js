import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // This makes the server accessible externally
        port: 3000,
    },
    preview: {
        host: true,
        port: 5000,
    }
});
