<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

type Locale = 'ja' | 'ko' | 'es'
type Page = 'features' | 'download' | 'docs' | 'workflows' | 'resources' | 'compare'
type Copy = { eyebrow: string; title: string; intro: string; sections: Array<{ title: string; body: string[] }>; cta?: string }

const props = defineProps<{ page: Page }>()
const route = useRoute()
const locale = computed<Locale>(() => (route.path.match(/^\/(ja|ko|es)(?:\/|$)/)?.[1] ?? 'ja') as Locale)

const copy: Record<Locale, Record<Page, Copy>> = {
  ja: {
    features: { eyebrow: '機能', title: 'モバイルでも、開発を最後まで進める。', intro: 'NimoteCode は、プロジェクト、エディタ、ターミナル、Git、AI を一つのモバイルワークスペースにまとめます。', sections: [{ title: 'プロジェクトと接続', body: ['Android・iOS のローカルフォルダを開く', 'SSH で Mac、Linux、サーバーのプロジェクトに接続', '対応する Android では Local Linux を使用'] }, { title: '編集と検証', body: ['コード編集、ターミナル、Git の差分と履歴を確認', 'コマンドの実行と結果のプレビュー', 'LSP 診断、デバッグ、タスクで作業を追跡'] }, { title: 'AI ワークフロー', body: ['自身の AI プロバイダーで AI Chat を利用', 'Agent で計画と実行を支援', '変更内容を自分で確認して完了'] }] },
    download: { eyebrow: 'ダウンロード', title: 'NimoteCode を始める。', intro: 'Android、iPhone、iPad で、実際の開発環境を持ち歩けます。', sections: [{ title: '利用可能なプラットフォーム', body: ['Google Play から Android 版を入手', 'App Store から iOS・iPadOS 版を入手'] }, { title: '最初の一歩', body: ['ローカルプロジェクトを開く、または SSH 接続を追加', 'AI プロバイダーを設定して、いつもの作業を続ける'] }], cta: 'アプリをダウンロード' },
    docs: { eyebrow: 'ドキュメント', title: '最初のワークスペースを作成する。', intro: 'プロジェクトの場所を選び、SSH またはローカル環境で作業を始めます。', sections: [{ title: 'クイックスタート', body: ['新しいローカルワークスペースを作成、または既存フォルダを開く', 'SSH ホストを追加し、リモートのプロジェクトフォルダを選択', 'エディタ、ターミナル、Git ビューで変更を確認'] }, { title: '詳細ガイド', body: ['詳細な技術ドキュメントは英語・中国語で参照できます', 'ブログ記事は英語原文で提供しています'] }] },
    workflows: { eyebrow: 'ワークフロー', title: '移動中でも、開発の流れを保つ。', intro: '小さな修正からリモートプロジェクトの確認まで、NimoteCode は結果を検証できる作業環境を提供します。', sections: [{ title: 'リモートの修正', body: ['SSH でプロジェクトへ接続', '差分を確認し、編集・コマンド実行・検証'] }, { title: 'AI とターミナル', body: ['AI と一緒に変更を計画', 'ターミナルで実行し、Git とプレビューで結果を確認'] }] },
    resources: { eyebrow: 'リソース', title: 'モバイル開発のための実践資料。', intro: 'SSH、リモート開発、AI コーディングワークフローに関するガイドを集めています。', sections: [{ title: '技術トピック', body: ['Android Local Linux と SSH ワークスペース', 'モバイルからのコード編集、Git、ターミナル', 'AI Agent を使った開発フロー'] }, { title: '記事について', body: ['技術記事とブログは英語原文で公開しています'] }] },
    compare: { eyebrow: '比較', title: 'ターミナルだけでなく、ワークフローを比較する。', intro: 'モバイル開発では、接続後にコードを確認し、変更を検証できることが重要です。', sections: [{ title: '比較するポイント', body: ['ローカル・SSH ワークスペースとファイルアクセス', '編集、Git レビュー、ターミナル、プレビュー', 'AI、LSP、デバッグ、タスクの統合'] }, { title: 'NimoteCode', body: ['プロジェクトを中心に、編集から検証までをモバイルで完結'] }] }
  },
  ko: {
    features: { eyebrow: '기능', title: '모바일에서도 개발을 끝까지 진행하세요.', intro: 'NimoteCode는 프로젝트, 편집기, 터미널, Git 및 AI를 하나의 모바일 워크스페이스로 모읍니다.', sections: [{ title: '프로젝트와 연결', body: ['Android 및 iOS의 로컬 폴더 열기', 'SSH로 Mac, Linux 또는 서버 프로젝트에 연결', '지원되는 Android에서 Local Linux 사용'] }, { title: '편집 및 검증', body: ['코드 편집, 터미널, Git diff 및 기록 검토', '명령 실행 및 결과 미리보기', 'LSP 진단, 디버그 및 작업 추적'] }, { title: 'AI 워크플로', body: ['자신의 AI 공급자로 AI Chat 사용', 'Agent로 계획 및 실행 지원', '변경 사항을 직접 검토'] }] },
    download: { eyebrow: '다운로드', title: 'NimoteCode를 시작하세요.', intro: 'Android, iPhone 및 iPad에서 실제 개발 환경을 휴대하세요.', sections: [{ title: '지원 플랫폼', body: ['Google Play에서 Android 앱 받기', 'App Store에서 iOS 및 iPadOS 앱 받기'] }, { title: '첫 단계', body: ['로컬 프로젝트를 열거나 SSH 연결 추가', 'AI 공급자를 설정하고 평소 작업 계속하기'] }], cta: '앱 다운로드' },
    docs: { eyebrow: '문서', title: '첫 워크스페이스를 만드세요.', intro: '프로젝트 위치를 정하고 SSH 또는 로컬 환경에서 작업을 시작하세요.', sections: [{ title: '빠른 시작', body: ['새 로컬 워크스페이스를 만들거나 기존 폴더 열기', 'SSH 호스트를 추가하고 원격 프로젝트 폴더 선택', '편집기, 터미널 및 Git 보기에서 변경 확인'] }, { title: '상세 가이드', body: ['자세한 기술 문서는 영어와 중국어로 제공됩니다', '블로그 글은 영어 원문으로 제공됩니다'] }] },
    workflows: { eyebrow: '워크플로', title: '이동 중에도 개발 흐름을 유지하세요.', intro: '작은 수정부터 원격 프로젝트 검토까지, NimoteCode는 결과를 검증할 수 있는 작업 환경을 제공합니다.', sections: [{ title: '원격 수정', body: ['SSH로 프로젝트 연결', 'diff 검토, 편집, 명령 실행 및 검증'] }, { title: 'AI와 터미널', body: ['AI와 함께 변경 계획', '터미널에서 실행하고 Git 및 미리보기로 결과 확인'] }] },
    resources: { eyebrow: '리소스', title: '모바일 개발을 위한 실용적인 자료.', intro: 'SSH, 원격 개발 및 AI 코딩 워크플로에 관한 가이드를 모았습니다.', sections: [{ title: '기술 주제', body: ['Android Local Linux 및 SSH 워크스페이스', '모바일 코드 편집, Git 및 터미널', 'AI Agent 개발 흐름'] }, { title: '글 안내', body: ['기술 글과 블로그는 영어 원문으로 게시됩니다'] }] },
    compare: { eyebrow: '비교', title: '터미널뿐 아니라 워크플로를 비교하세요.', intro: '모바일 개발에서는 연결한 뒤 코드를 검토하고 변경 사항을 검증할 수 있어야 합니다.', sections: [{ title: '비교 기준', body: ['로컬 및 SSH 워크스페이스와 파일 접근', '편집, Git 검토, 터미널 및 미리보기', 'AI, LSP, 디버그 및 작업 통합'] }, { title: 'NimoteCode', body: ['프로젝트를 중심으로 모바일에서 편집부터 검증까지 지원'] }] }
  },
  es: {
    features: { eyebrow: 'Funciones', title: 'Completa el desarrollo también desde el móvil.', intro: 'NimoteCode reúne el proyecto, editor, terminal, Git e IA en un único espacio de trabajo móvil.', sections: [{ title: 'Proyecto y conexión', body: ['Abre carpetas locales en Android e iOS', 'Conéctate por SSH a proyectos en Mac, Linux o servidores', 'Usa Local Linux en Android compatible'] }, { title: 'Edición y verificación', body: ['Edita código y revisa terminal, diferencias e historial de Git', 'Ejecuta comandos y previsualiza el resultado', 'Usa diagnósticos LSP, depuración y tareas'] }, { title: 'Flujo de IA', body: ['Usa AI Chat con tu propio proveedor', 'Deja que Agent ayude a planear y ejecutar', 'Revisa los cambios por ti mismo'] }] },
    download: { eyebrow: 'Descargar', title: 'Empieza con NimoteCode.', intro: 'Lleva un entorno de desarrollo real en Android, iPhone y iPad.', sections: [{ title: 'Plataformas disponibles', body: ['Obtén la aplicación Android en Google Play', 'Obtén la aplicación iOS y iPadOS en App Store'] }, { title: 'Primeros pasos', body: ['Abre un proyecto local o añade una conexión SSH', 'Configura tu proveedor de IA y continúa tu trabajo'] }], cta: 'Descargar la aplicación' },
    docs: { eyebrow: 'Documentación', title: 'Crea tu primer espacio de trabajo.', intro: 'Elige dónde vive el proyecto y empieza a trabajar mediante SSH o en local.', sections: [{ title: 'Inicio rápido', body: ['Crea un espacio local o abre una carpeta existente', 'Añade un host SSH y selecciona el proyecto remoto', 'Revisa los cambios con el editor, terminal y vista Git'] }, { title: 'Guías detalladas', body: ['La documentación técnica detallada está disponible en inglés y chino', 'Las publicaciones del blog se ofrecen en inglés'] }] },
    workflows: { eyebrow: 'Flujos de trabajo', title: 'Mantén el ritmo de desarrollo al moverte.', intro: 'Desde un cambio pequeño hasta revisar un proyecto remoto, NimoteCode ofrece un entorno donde puedes verificar el resultado.', sections: [{ title: 'Cambios remotos', body: ['Conéctate al proyecto por SSH', 'Revisa diferencias, edita, ejecuta comandos y verifica'] }, { title: 'IA y terminal', body: ['Planifica cambios con IA', 'Ejecuta en el terminal y confirma el resultado con Git y la vista previa'] }] },
    resources: { eyebrow: 'Recursos', title: 'Material práctico para desarrollo móvil.', intro: 'Encuentra guías sobre SSH, desarrollo remoto y flujos de programación con IA.', sections: [{ title: 'Temas técnicos', body: ['Android Local Linux y espacios SSH', 'Edición de código, Git y terminal desde el móvil', 'Flujos de desarrollo con AI Agent'] }, { title: 'Sobre los artículos', body: ['Los artículos técnicos y el blog se publican en inglés'] }] },
    compare: { eyebrow: 'Comparar', title: 'Compara el flujo de trabajo, no solo el terminal.', intro: 'En desarrollo móvil importa poder revisar el código y verificar el cambio después de conectarte.', sections: [{ title: 'Qué comparar', body: ['Espacios locales y SSH, y acceso a archivos', 'Edición, revisión Git, terminal y vista previa', 'Integración de IA, LSP, depuración y tareas'] }, { title: 'NimoteCode', body: ['Un flujo centrado en el proyecto, desde editar hasta verificar en móvil'] }] }
  }
}

const pageCopy = computed(() => copy[locale.value][props.page])
const downloadUrl = locale.value === 'es' ? 'https://play.google.com/store/apps/details?id=com.nimote.nimotecode' : 'https://play.google.com/store/apps/details?id=com.nimote.nimotecode'
</script>

<template>
  <section class="home-page-section home-page-pillars-section localized-page">
    <div class="home-page-section-head home-page-section-head-centered">
      <p class="home-page-eyebrow">{{ pageCopy.eyebrow }}</p>
      <h1 class="home-page-section-title">{{ pageCopy.title }}</h1>
      <p class="home-page-section-copy">{{ pageCopy.intro }}</p>
      <a v-if="pageCopy.cta" class="home-page-btn primary" :href="downloadUrl" target="_blank" rel="noreferrer">{{ pageCopy.cta }}</a>
    </div>
    <div class="home-page-pillars">
      <article v-for="section in pageCopy.sections" :key="section.title" class="home-page-pillar">
        <h2 class="home-page-pillar-title">{{ section.title }}</h2>
        <ul class="home-page-pillar-points"><li v-for="item in section.body" :key="item">{{ item }}</li></ul>
      </article>
    </div>
  </section>
</template>
