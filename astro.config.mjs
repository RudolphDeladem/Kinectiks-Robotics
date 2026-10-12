// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH lets the same build serve from a sub-folder (e.g. GitHub Pages at /Kinectiks-Robotics/).
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
