---
title: Sync and Cache | NimoteCode Pro
description: Move project content between local and remote NimoteCode workspaces with Pro Sync and Cache workflows, explicit direction, workspace path checks and transfer history.
---

# 同期とキャッシュ


同期 / キャッシュは、ローカル ワークスペースとリモート ワークスペース間でプロジェクト コンテンツを意図的に移動するための **Pro** ワークフローです。これにより、転送に目に見える方向が与えられ、ターゲットがアクティブなワークスペースの境界内に保持されます。


<ImagePlaceholder image-key="syncCache" alt="NimoteCode Sync and Cache">
<strong>画像プレースホルダー — 安全な転送方向を選択してください</strong>
<span>同期またはキャッシュの方向、選択したワークスペース パス、および転送履歴を示すスクリーンショットに置き換えます。</span>
</ImagePlaceholder>

## 2 つの明確な方向性


- **Sync** は、ローカル プロジェクトをリモート ワークスペースに移動します。

- **キャッシュ** は、リモート プロジェクトのコンテンツをローカル ワークスペースに戻します。


<ImagePlaceholder image-key="cacheToLocalWorkspace" alt="Caching a remote project to a local workspace on NimoteCode for phone">
<strong>リモート プロジェクトをローカル ワークスペースにキャッシュします</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="cacheToLocalWorkspaceComplete" alt="Completed cache transfer to a local workspace on NimoteCode for phone">
<strong>ローカル ワークスペース キャッシュ転送が完了しました</strong>
</ImagePlaceholder>

転送前に、方向とターゲットパスを読み取り、どのバージョンが信頼できるかを確認し、後で記録された結果を確認します。同期/キャッシュは、制御されたハンドオフまたはオフライン検査に役立ちます。リポジトリの通常の Git レビューとバックアップの実践に取って代わるものではありません。


関連: [SSH ワークスペース](/docs/ssh) · [ソース管理](/docs/source-control) · [プロ](/pro)
