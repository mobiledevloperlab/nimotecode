import ja from '../i18n/major-comparison-ja.json' with { type: 'json' }
import ko from '../i18n/major-comparison-ko.json' with { type: 'json' }
import es from '../i18n/major-comparison-es.json' with { type: 'json' }

// Facts, statuses, evidence URLs and review dates remain in the audited source.
// These records translate presentation only. Missing translations fail loudly.
export const comparisonTranslations = { ja, ko, es }
export const comparisonLocales = ['en', 'zh', 'ja', 'ko', 'es']
