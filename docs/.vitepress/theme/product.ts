/**
 * The public product contract. Keep plan, trial and BYOK language here so
 * marketing, documentation, schema and UI components cannot drift apart.
 */
export const product = {
  free: [
    'Local and SSH workspaces',
    'Editor and baseline terminal',
    'Git status, diff and history review',
    'AI Chat with your own provider',
    'Create and run terminal-backed Tasks'
  ],
  pro: [
    'AI Agent and remote content search',
    'Git write workflows',
    'Multiple terminal sessions',
    'LSP and debugging workflows',
    'Sync / Cache workflows'
  ],
  byok: 'Bring your own API key and provider account; NimoteCode does not sell model usage or credits.'
} as const

export const productCopy = {
  en: {
    byok: product.byok
  },
  zh: {
    byok: '自带 API Key 和 Provider 账户；NimoteCode 不销售模型用量或额度。'
  }
} as const
