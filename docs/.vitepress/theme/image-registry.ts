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

const PHONE_WIDTH = 1320
const PHONE_HEIGHT = 2868
const SCREENSHOT_PHONE_WIDTH = 1264
const SCREENSHOT_PHONE_HEIGHT = 2780

export const placeholderImages = {
  quickStart: {
    phone: { src: '/images/placeholders/24_LocalWorkSpace.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  sshWorkspace: {
    phone: {
      src: '/images/placeholders/07_RemoteProjectExplorer.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  editor: {
    phone: {
      src: '/images/placeholders/06_EditorPythonBenchmarkCode.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  terminal: {
    phone: {
      src: '/images/placeholders/17_TerminalSSHTopMonitor.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  aiAssistant: {
    phone: {
      src: '/images/placeholders/02_AgentRunPendingApproval.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  sourceControl: {
    phone: {
      src: '/images/placeholders/08_SourceControlPanel.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  lsp: {
    phone: {
      src: '/images/placeholders/09_LSPInstallFailed.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  debugging: {
    phone: {
      src: '/images/placeholders/Debug_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  syncCache: {
    phone: {
      src: '/images/placeholders/11_SyncCachePage.jpg',
      width: SCREENSHOT_PHONE_WIDTH,
      height: SCREENSHOT_PHONE_HEIGHT
    }
  },
  mobileIde: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  sshIde: {
    phone: {
      src: '/images/placeholders/Explorer_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  androidSshClient: {
    phone: {
      src: '/images/placeholders/SSH_Workspace_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  iphoneSshClient: {
    phone: {
      src: '/images/placeholders/Explorer_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  ipadCoding: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  mobileAiCoding: {
    phone: {
      src: '/images/placeholders/AI_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  claudeCodeFromPhone: {
    phone: {
      src: '/images/placeholders/AI_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  codexFromPhone: {
    phone: {
      src: '/images/placeholders/AI_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  termiusAlternative: {
    phone: {
      src: '/images/placeholders/Terminal_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  blinkShellAlternative: {
    phone: {
      src: '/images/placeholders/Terminal_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  terminalVsWorkspace: {
    phone: {
      src: '/images/placeholders/Terminal_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  bestMobileIdes: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  bestSshClients: {
    phone: {
      src: '/images/placeholders/SSH_Workspace_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    }
  },
  gitCommitRecord: {
    phone: { src: '/images/placeholders/01_GitCommitRecord.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  agentRunLog: {
    phone: { src: '/images/placeholders/03_AgentRunLog.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  agentRunPythonBenchmark: {
    phone: { src: '/images/placeholders/04_AgentRunPythonBenchmark.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  agentAlgorithmBenchmarkResults: {
    phone: { src: '/images/placeholders/05_AgentAlgorithmBenchmarkResults.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  editorOutline: {
    phone: { src: '/images/placeholders/16_CodeEditorOutline.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  codeGlobalSearch: {
    phone: { src: '/images/placeholders/10_CodeGlobalSearch.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  aiModelConfig: {
    phone: { src: '/images/placeholders/12_AIModelConfig.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  aiEditConfig: {
    phone: { src: '/images/placeholders/13_AIEditConfig.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  tasksPage: {
    phone: { src: '/images/placeholders/14_TasksPage.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  appSettings: {
    phone: { src: '/images/placeholders/15_AppSettings.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  terminalMenu: {
    phone: { src: '/images/placeholders/18_TerminalMenu.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  notifications: {
    phone: { src: '/images/placeholders/19_Notifications.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  explorerPage: {
    phone: { src: '/images/placeholders/20_SelectExplorerPage.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  explorerPopup: {
    phone: { src: '/images/placeholders/21_SelectExplorerPopup.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  remoteDirectory: {
    phone: { src: '/images/placeholders/22_RemoteDirectoryDialog.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  localWorkspaceGitPanel: {
    phone: { src: '/images/placeholders/23_LocalWorksapceGitPanel.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  localWorkspace: {
    phone: { src: '/images/placeholders/24_LocalWorkSpace.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  cacheToLocalWorkspace: {
    phone: { src: '/images/placeholders/26_Cache2LocalWorkspace.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  },
  cacheToLocalWorkspaceComplete: {
    phone: { src: '/images/placeholders/25_Cache2Loc calWrokSpaceFinish.jpg', width: SCREENSHOT_PHONE_WIDTH, height: SCREENSHOT_PHONE_HEIGHT }
  }
} as const satisfies Record<string, PlaceholderImage>

export type PlaceholderImageKey = keyof typeof placeholderImages
