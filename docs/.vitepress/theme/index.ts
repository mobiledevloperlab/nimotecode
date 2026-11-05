/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import MarketingLayout from './MarketingLayout.vue'
import AppMockup from './components/AppMockup.vue'
import ProductHome from './components/ProductHome.vue'
import ImagePlaceholder from './components/ImagePlaceholder.vue'
import DocScreenshot from './components/DocScreenshot.vue'
import DownloadPage from './components/DownloadPage.vue'
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
import TrustNav from './components/TrustNav.vue'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,

  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      router.onBeforeRouteChange = (to) => {
        if (/^\/(?:zh\/)?blog(?:\/|$)/.test(new URL(to, window.location.href).pathname)) {
          window.location.assign(to)
          return false
        }
      }
    }
    app.component('AppMockup', AppMockup)
    app.component('ProductHome', ProductHome)
    app.component('ImagePlaceholder', ImagePlaceholder)
    app.component('DocScreenshot', DocScreenshot)
    app.component('DownloadPage', DownloadPage)
    app.component('HomeToolComparison', HomeToolComparison)
    app.component('LatestReleaseLink', LatestReleaseLink)
    app.component('ReleaseArchive', ReleaseArchive)
    app.component('ReleaseDetailHeader', ReleaseDetailHeader)
    app.component('MobileDevToolComparison', MobileDevToolComparison)
    app.component('PricingFeatureSystem', PricingFeatureSystem)
    app.component('SocialProof', SocialProof)
    app.component('LocalizedLandingPage', LocalizedLandingPage)
    app.component('MarketingLayout', MarketingLayout)

    app.component('TrustNav', TrustNav)
  }
}

export default theme
