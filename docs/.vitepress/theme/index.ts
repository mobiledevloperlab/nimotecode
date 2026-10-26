/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import MarketingLayout from './MarketingLayout.vue'
import AppMockup from './components/AppMockup.vue'
import ImagePlaceholder from './components/ImagePlaceholder.vue'
import DocScreenshot from './components/DocScreenshot.vue'
import HomeToolComparison from './components/HomeToolComparison.vue'
import LatestReleaseLink from './components/LatestReleaseLink.vue'
import ReleaseArchive from './components/ReleaseArchive.vue'
import ReleaseDetailHeader from './components/ReleaseDetailHeader.vue'
import MobileDevToolComparison from './components/MobileDevToolComparison.vue'
import PricingFeatureSystem from './components/PricingFeatureSystem.vue'
import SocialProof from './components/SocialProof.vue'
import LocalizedLandingPage from './components/LocalizedLandingPage.vue'
import { type Theme } from 'vitepress'
import './custom.css'
// @ts-ignore - The package does not ship TypeScript types.
import googleAnalytics from 'vitepress-plugin-google-analytics'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,

  enhanceApp({ app }) {
    app.component('AppMockup', AppMockup)
    app.component('ImagePlaceholder', ImagePlaceholder)
    app.component('DocScreenshot', DocScreenshot)
    app.component('HomeToolComparison', HomeToolComparison)
    app.component('LatestReleaseLink', LatestReleaseLink)
    app.component('ReleaseArchive', ReleaseArchive)
    app.component('ReleaseDetailHeader', ReleaseDetailHeader)
    app.component('MobileDevToolComparison', MobileDevToolComparison)
    app.component('PricingFeatureSystem', PricingFeatureSystem)
    app.component('SocialProof', SocialProof)
    app.component('LocalizedLandingPage', LocalizedLandingPage)
    app.component('MarketingLayout', MarketingLayout)

    if (import.meta.env.PROD) {
      googleAnalytics({
        id: 'G-JML9VGDMXJ'
      })
    }
  }
}

export default theme
