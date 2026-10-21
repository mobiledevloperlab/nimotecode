---
title: Android Local Linux Security and Integrity | NimoteCode
description: Verify Local Linux artifacts and use safe package, SSH, credential, and PRoot practices on Android.
---

# Android ローカル Linux のセキュリティと整合性


ローカル Linux は開発環境であり、Android ルート メカニズムではありません。 Android、SSH、プロバイダーの資格情報を保護しながら、独自のパッケージとファイルを備えた個別のユーザー空間として扱います。


## インストール内容を確認してください


- プリセットまたはランタイムバンドルを使用する前に、リリースマニフェストをお読みください。

- ダウンロードしたアーティファクトとスクリプトの公開された SHA-256 値を確認します。

- 文書化された APT ソースを使用します。パッケージのインストールにより環境が変更されるため、ネットワーク アクセスが必要になる場合があります。

- rootfs アーカイブ、`.zst` アセットをコピーしたり、バンドルを Web サイトリポジトリにリリースしたりしないでください。


## アクセスの保護


- プロバイダーの資格情報を保護されたストレージに保管し、ログや AI プロンプトにシークレットを貼り付けないようにします。

- リモートホストには最小権限の SSH アカウントを使用します。ローカル Linux の SSH サービスはループバックのみです。

- 変更を受け入れる前に、エージェントが提案したコマンドと Git の差分を確認してください。


プリセット固有のマニフェスト、スクリプトハッシュ、検証については、[Linux Presets](/docs/local-linux/presets)を参照してください。バンドル環境に法的に要求される対応するソースとライセンスの通知については、[ローカル Linux ソースとライセンス](/docs/local-linux-source) を参照してください。
