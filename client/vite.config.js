import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import { createHtmlPlugin } from 'vite-plugin-html'

dotenv.config()

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  plugins: [
    ViteAliases(),
    createHtmlPlugin({
      inject: {
        data: {
          title:
            process.env.NODE_ENV === 'production'
              ? 'My site'
              : `My site [${process.env.NODE_ENV}]`
        }
      }
    }),
    react({
      include: '**/*.{jsx,tsx}',
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true
            }
          ]
        ]
      }
    })
  ]
})
