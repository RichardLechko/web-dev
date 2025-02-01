export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    future: {
      enableAllModules: true,
    },
    safelist: [
      'opacity-0',
      'opacity-100',
      'translate-x-full',
      'hidden',
      'bg-black/50'
    ]
  }