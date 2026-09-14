import { loadLocalLinuxSourceRelease } from '../../.vitepress/theme/data/localLinuxSourceRelease.js'

export default {
  load() {
    return { release: loadLocalLinuxSourceRelease() }
  }
}
