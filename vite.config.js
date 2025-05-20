import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        singup: resolve(__dirname, 'pages/sing-up/index.html'),
        singin: resolve(__dirname, 'pages/sing-in/index.html'),
        payment: resolve(__dirname, 'pages/add-wallet/index.htmll'),
        singin_wallet: resolve(__dirname, 'pages/payment/index.html'),
      },
    },
  },
})