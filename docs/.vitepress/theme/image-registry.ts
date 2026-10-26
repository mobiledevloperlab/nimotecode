/**
 * Central catalogue for product imagery.
 *
 * Put future placeholder assets in `docs/public/images/placeholders/`, then
 * add matching phone and iPad screenshots to each entry. Every page using that
 * key will pick up the available devices automatically. iPad sources are
 * temporarily null while those assets are being refreshed. For example:
 *
 *   phone: { src: '/images/placeholders/ssh-workspace-phone.webp' },
 *   ipad: { src: null }
 */
export interface DeviceScreenshot {
  src: string | null
  width?: number
  height?: number
}

export interface PlaceholderImage {
  phone?: DeviceScreenshot
  ipad?: DeviceScreenshot
}

const PHONE_WIDTH = 1080
const PHONE_HEIGHT = 2376
const SCREENSHOT_PHONE_WIDTH = 1080
const SCREENSHOT_PHONE_HEIGHT = 2376

export const placeholderImages = {
  quickStart: {
    phone: { src: '/screenshots/nimote-pro.webp', width: 1440, height: 810 }
  },
  sshWorkspace: {
    phone: {
      src: '/images/placeholders/remote-workspace-connected.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  editor: {
    phone: {
      src: '/images/placeholders/editor-code-selection.png',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  terminal: {
    phone: {
      src: '/images/placeholders/terminal-command-output.png',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  aiAssistant: {
    phone: {
      src: '/images/placeholders/ai-plan-approval.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  sourceControl: {
    phone: {
      src: '/images/placeholders/source-control-changes.png',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  lsp: {
    phone: {
      src: '/images/placeholders/lsp-python-status.png',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  debugging: {
    phone: {
      src: '/images/placeholders/debugger-standby.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  syncCache: {
    phone: {
      src: '/images/placeholders/sync-cache-status.png',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  mobileIde: {
    phone: {
      src: '/images/placeholders/workspace-start-light.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  sshIde: {
    phone: {
      src: '/images/placeholders/local-file-browser.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  androidSshClient: {
    phone: {
      src: '/images/placeholders/remote-workspace-connected.jpg',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  iphoneSshClient: {
    phone: {
      src: '/images/placeholders/local-file-browser.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  ipadCoding: {
    phone: {
      src: '/images/placeholders/workspace-start-light.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  mobileAiCoding: {
    phone: {
      src: '/images/placeholders/ai-chat-welcome.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  claudeCodeFromPhone: {
    phone: {
      src: '/images/placeholders/ai-chat-welcome.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  codexFromPhone: {
    phone: {
      src: '/images/placeholders/ai-chat-welcome.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  termiusAlternative: {
    phone: {
      src: '/images/placeholders/terminal-command-output.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  blinkShellAlternative: {
    phone: {
      src: '/images/placeholders/terminal-command-output.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  terminalVsWorkspace: {
    phone: {
      src: '/images/placeholders/terminal-command-output.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  bestMobileIdes: {
    phone: {
      src: '/images/placeholders/workspace-start-light.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  bestSshClients: {
    phone: {
      src: '/screenshots/nimote-pro.webp',
      width: 1440,
      height: 810
    }
  },
  gitCommitRecord: {
    phone: { src: '/images/placeholders/git-commit-details.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  agentRunLog: {
    phone: { src: '/images/placeholders/ai-plan-running.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  agentRunPythonBenchmark: {
    phone: { src: '/images/placeholders/ai-analysis-workflow.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  agentAlgorithmBenchmarkResults: {
    phone: { src: '/images/placeholders/ai-analysis-overview.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  editorOutline: {
    phone: { src: '/images/placeholders/editor-symbol-menu.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  codeGlobalSearch: {
    phone: { src: '/images/placeholders/search-global.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  aiModelConfig: {
    phone: { src: '/images/placeholders/ai-provider-overview.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  aiEditConfig: {
    phone: { src: '/images/placeholders/ai-provider-settings.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  tasksPage: {
    phone: { src: '/images/placeholders/task-runner.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  appSettings: {
    phone: { src: '/images/placeholders/app-settings-light.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  terminalMenu: {
    phone: { src: '/images/placeholders/terminal-actions-menu.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  notifications: {
    phone: { src: '/images/placeholders/app-settings-light.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  explorerPage: {
    phone: { src: '/images/placeholders/workspace-start-light.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  explorerPopup: {
    phone: { src: '/images/placeholders/workspace-start-dark.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  remoteDirectory: {
    phone: { src: '/images/placeholders/remote-directory-picker.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  localWorkspaceGitPanel: {
    phone: { src: '/images/placeholders/source-control-changes.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  localWorkspace: {
    phone: { src: '/images/placeholders/local-workspace-files.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  cacheToLocalWorkspace: {
    phone: { src: '/images/placeholders/sync-cache-status.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  cacheToLocalWorkspaceComplete: {
    phone: { src: '/images/placeholders/sync-cache-status.png', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  }
} as const satisfies Record<string, PlaceholderImage>

export type PlaceholderImageKey = keyof typeof placeholderImages
