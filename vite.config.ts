import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Единая конфигурация Vite (сборка/dev-сервер) и Vitest (тесты).
// Ядро МКЭ не зависит от браузера, поэтому тесты гоняются в окружении node.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
