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
    'Basic LSP diagnostics, completion and navigation',
    'Create and run terminal-backed Tasks'
  ],
  pro: [
    'Built-in AI Agent and compatible external ACP agents',
    'Remote content search and SSH batch file operations',
    'Git write workflows and GitHub integration',
    'Android Local Linux on supported devices',
    'Multiple terminal sessions',
    'Host mode with SSH and a running nimotehost service',
    'Docker, Compose and Dev Containers on SSH hosts',
    'Advanced LSP code actions, guided installation and debugging',
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
  },
  ja: {
    byok: 'API キーとプロバイダーアカウントは各自で用意してください。モデル利用量やクレジットは含まれません。'
  },
  ko: {
    byok: 'API 키와 제공업체 계정을 직접 준비하세요. 모델 사용량이나 크레딧은 포함되지 않습니다.'
  },
  es: {
    byok: 'Usa tu propia clave API y cuenta del proveedor. No se incluyen consumo ni créditos de modelos.'
  }
} as const
