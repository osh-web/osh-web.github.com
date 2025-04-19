# オープンセミナー広島（OSH）

[オープンセミナー広島](http://osh-web.github.com)の公式ウェブサイトのソースコードリポジトリです。オープンセミナー広島は、広島で開催される技術者向けの非営利の技術カンファレンスです。

## プロジェクト概要

このプロジェクトは、React と react-static を使用した静的ウェブサイトで、オープンセミナー広島の情報を発信するために使用されています。2018年以降のイベント情報を管理しており、スピーカー、スポンサー、スタッフ情報、セッション詳細などを提供しています。

## フォルダ構造

```
.bundle/ - バンドル関連の設定ファイル
.devcontainer/ - VS Code DevContainer設定
  ├── Dockerfile - 開発環境のDockerfile
  └── devcontainer.json - DevContainer設定ファイル
.github/
  └── workflows/ - GitHub Actions ワークフロー
      └── deploy.yml - デプロイ自動化設定
artifacts/ - react-staticビルドの成果物
public/
  ├── img/ - 画像リソース
  │   ├── 2018/ - 2018年イベント用画像
  │   ├── 2019/ - 2019年イベント用画像
  │   ├── 2020/ - 2020年イベント用画像
  │   ├── 2022/ - 2022年イベント用画像
  │   ├── 2023/ - 2023年イベント用画像
  │   └── 2024/ - 2024年イベント用画像
  └── pdf/ - PDFリソース
src/
  ├── atoms/ - 最小単位のUIコンポーネント
  ├── components/ - 再利用可能なUIコンポーネント
  ├── containers/ - ページのコンテナコンポーネント
  ├── img/ - ソースコードで使用する画像
  ├── organisms/ - 複合的なUIコンポーネント（AppBar, Footer, Menuなど）
  ├── pages/ - 各ページのコンポーネント
  │   ├── 2018/ - 2018年のイベントページ
  │   ├── 2019/ - 2019年のイベントページ
  │   ├── 2020/ - 2020年のイベントページ
  │   ├── 2022/ - 2022年のイベントページ
  │   ├── 2023/ - 2023年のイベントページ
  │   └── 2024/ - 2024年のイベントページ
  └── resources/ - データリソース（スピーカー情報、セッション情報など）
設定ファイル
  ├── .babelrc - Babel設定
  ├── .eslintrc.js - ESLint設定
  ├── .flowconfig - Flow型チェック設定
  ├── .stylelintrc - StyleLint設定
  ├── prettier.config.js - Prettier設定
  └── static.config.js - react-static設定
```

## 技術スタック

- [React](https://reactjs.org/) - UIライブラリ
- [react-static](https://github.com/react-static/react-static) - 静的サイトジェネレーター
- [Material UI Components](https://material.io/components) - UIコンポーネント
- [Styled Components](https://styled-components.com/) - CSSスタイリング

## 開発方法

### 前提条件

- Node.js v12以上（v12で動作確認済）
- Yarnパッケージマネージャー

### セットアップと開発サーバー起動

```bash
# 依存パッケージのインストール
$ yarn

# 開発サーバーの起動（http://localhost:3000/ でアクセス可能）
$ yarn start
```

### ビルドとプレビュー

```bash
# 静的ファイルのビルド
$ yarn build

# ビルドされたサイトのプレビュー（http://localhost:3000/ でアクセス可能）
$ yarn serve
```

## DevContainer による開発環境

本プロジェクトはVS Code DevContainerに対応しており、Docker環境で簡単に開発環境を構築できます。

### 必要条件
- Docker
- Visual Studio Code
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) 拡張機能

### 使用方法
1. VS Code で本リポジトリを開く
2. 左下の緑色のアイコンをクリックし、「Reopen in Container」を選択
3. コンテナのビルドが完了すると、コンテナ内の開発環境で作業可能
4. 通常通り `yarn start` で開発サーバーを起動

## GitHub Actions によるデプロイ

本プロジェクトはGitHub Actionsを利用して自動デプロイを行っています。

### デプロイフロー
- `source` ブランチにpushされると自動的にデプロイプロセスが実行されます
- デプロイプロセスでは以下の処理が行われます：
  1. Node.js 12環境のセットアップ
  2. 依存パッケージのインストール
  3. サイトのビルド
  4. ビルド結果を `master` ブランチにプッシュ（GitHub Pagesでホスティング）

### 手動デプロイ方法

GitHub Actionsを使わず、手動でデプロイする場合は以下のコマンドを実行します：

```bash
$ yarn deploy
```

このコマンドは `yarn build` でビルドした後、`gh-pages` を使用して `dist` ディレクトリの内容を `master` ブランチにプッシュします。

## 過去のイベント

* 2016以前のページ
  * 別のリポジトリに分けています
* 2018年〜2024年のイベント情報は本リポジトリで管理しています
