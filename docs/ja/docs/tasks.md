---
title: タスク | NimoteCode
description: "タスクの設定、操作手順、画面の説明。"
---

# タスク

単独のタスクは無料です。依存タスクを含むワークフローの実行には Pro が必要です。

<div class="doc-section">
<div class="doc-section__copy">

## 再利用するコマンドを作成する

Tasks はコマンドを名前付きで保存し、用途別にグループ化します。**+** で追加し、コマンドと設定を入力して、必要に応じてグループを指定します。タスクは接続済みの SSH 環境で実行されます。ローカル SSH 接続を使う Android Local Linux も対象です。

</div>

<div class="doc-screenshots">
  <DocScreenshot file="task-runner.png" caption="All、Test グループと Run Tests 項目を表示する Tasks。例のコマンドは echo で、テストの完了結果ではありません。" />
</div>

</div>

2.5.0 では、タスクとプラグインが現在のワークスペースとプラットフォームで利用可能な実行先を表示します。SSH ターミナルまたは対応 Android のローカル Linux ターミナルを使うと、そのアカウントまたは環境にあるツールを利用できます。

## 実行して出力を確認する

タスク横の実行ボタンを押し、ターミナル出力を確認します。タスク名はラベルであり、コマンドの正しさを保証しません。使用前にコマンドと作業ディレクトリを確認してください。基本的なタスクの作成と実行に Pro は不要です。

## NimoteCode 2.4.0

**プロジェクトタスク。** package.json、Taskfile、Makefile、justfile、.vscode/tasks.json の対応タスクを検出してターミナルで実行。Make/just の動的検出には明示的な確認が必要です。

[2.4.0 →](/ja/releases/2.4.0)

[開発マシン →](/ja/docs/host) — NimoteHost の導入、SSH 接続、ターミナルと Agent の使い方。
