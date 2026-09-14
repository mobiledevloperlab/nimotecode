/**
 * The public product contract. Keep plan, trial and BYOK language here so
 * marketing, documentation, schema and UI components cannot drift apart.
 */
export const product = {
  trialDays: 14,
  pricing: {
    monthly: '$3.99/month',
    yearly: '$39.99/year'
  },
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
    trial: `${product.trialDays}-day, per-device Pro trial`,
    pricing: `${product.pricing.monthly} or ${product.pricing.yearly}`,
    byok: product.byok
  },
  zh: {
    trial: `按设备计算的 ${product.trialDays} 天 Pro 试用`,
    pricing: `${product.pricing.monthly} 或 ${product.pricing.yearly}`,
    byok: '自带 API Key 和 Provider 账户；NimoteCode 不销售模型用量或额度。'
  }
} as const
