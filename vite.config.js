import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sap-qa-portal/',
  plugins: [react()]
});
