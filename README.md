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
  ├── workflows/ - GitHub Actions ワークフロー
  │   └── deploy.yml - デプロイ自動化設定
  └── prompts/ - GitHub Copilot プロンプト
      └── create-new-page.prompt.md - 年度別ページ作成プロンプト
artifacts/ - react-staticビルドの成果物
public/
  ├── img/ - 画像リソース
  │   ├── 2018/ - 2018年イベント用画像
  │   ├── 2019/ - 2019年イベント用画像
  │   ├── 2020/ - 2020年イベント用画像
  │   ├── 2022/ - 2022年イベント用画像
  │   ├── 2023/ - 2023年イベント用画像
  │   ├── 2024/ - 2024年イベント用画像
  │   └── 2025/ - 2025年イベント用画像
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
  │   ├── 2024/ - 2024年のイベントページ
  │   └── 2025/ - 2025年のイベントページ
  └── resources/ - データリソース（スピーカー情報、セッション情報など）
      ├── color.js - 共通カラー設定
      ├── index.js - リソースのエクスポート設定
      ├── seminarList.js - セミナー一覧情報
      ├── 2018/ - 2018年のイベントデータ
      │   ├── index.js - 2018年データのエントリポイント
      │   ├── sessions.js - セッション情報
      │   ├── speakers.js - スピーカー情報
      │   ├── sponsors.js - スポンサー情報
      │   └── staffs.js - スタッフ情報
      ├── 2019/ - 2019年のイベントデータ
      ├── 2020/ - 2020年のイベントデータ
      ├── 2022/ - 2022年のイベントデータ
      ├── 2023/ - 2023年のイベントデータ
      ├── 2024/ - 2024年のイベントデータ
      └── 2025/ - 2025年のイベントデータ
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

### ビルド

```bash
# 静的ファイルのビルド
$ yarn build
```

ビルドは、ソースコードから静的ファイル（HTML、CSS、JavaScript）を生成するプロセスです。`yarn build`コマンドを実行すると、`dist`ディレクトリに静的ファイルが生成されますが、まだWebサーバーには公開されません。

**ビルドプロセス:**
1. Reactコンポーネントとリソースが処理され、最適化されます
2. JavaScriptコードはバンドルされ、ミニファイされます
3. CSSスタイルは抽出され、最適化されます
4. 静的HTMLファイルが生成されます
5. すべての成果物が`dist`ディレクトリに出力されます

**注意点:**
ビルドで生成されるファイルはCSSやJavaScriptの参照パスが絶対パス形式で記述されるため、`yarn serve`などでローカルサーバーを起動しても正しく表示されません。ビルドされたファイルはGitHub Pagesなど、適切な環境にデプロイしてご確認ください。

### 手動デプロイ方法

GitHub Actionsを使わず、手動でデプロイする場合は以下のコマンドを実行します：

```bash
$ yarn deploy
```

このコマンドは `yarn build` でビルドした後、`gh-pages` を使用して `dist` ディレクトリの内容を `master` ブランチにプッシュします。

デプロイは、ビルドされた静的ファイルをWebサーバー（GitHub Pages）に公開するプロセスです。`yarn deploy`を実行すると、ビルドされたファイルがGitHubの`master`ブランチにプッシュされ、GitHub Pagesで公開されます。

**デプロイプロセス:**
1. `yarn build`コマンドが実行され、ビルドプロセスが完了します
2. `gh-pages`パッケージが`dist`ディレクトリの内容を一時的なGitリポジトリとして準備します
3. `dist`ディレクトリのコンテンツが`master`ブランチにコミットされます
4. 変更が`master`ブランチにプッシュされます
5. GitHub Pagesがデプロイをトリガーし、サイトが公開されます（数分かかる場合があります）

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

## 年度別ページの作成

本プロジェクトでは、GitHub Copilotを使用して年度別の新しいページ構造を簡単に作成できます。`.github/prompts/create-new-page.prompt.md`プロンプトを使用することで、以下のようなディレクトリとファイルが自動生成されます：

1. `src/pages/[年度]/` ディレクトリとindex.jsファイル
2. `src/resources/[年度]/` ディレクトリと必要なリソースファイル（speakers.js, sessions.js, sponsors.js, staffs.js など）
3. 必要に応じて関連コンポーネントディレクトリと画像ディレクトリ

使用方法は、GitHub Copilotに対してこのプロンプトファイルを指定するか、プロンプトの内容に従って年度を指定するだけです。

## 過去のイベント

* 2018年〜2025年のイベント情報は本リポジトリで管理しています
* 2016以前のページ
  * 別のリポジトリに分けています
