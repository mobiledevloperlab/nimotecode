import astro from 'eslint-plugin-astro'

export default [
  { ignores: ['dist/**', '.astro/**', 'public/**', 'src/content/posts/**'] },
  ...astro.configs.recommended,
]
