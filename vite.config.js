import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '',
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    assetsInclude: [
        'README.md',
    ],
});
