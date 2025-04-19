# OSH-Web用開発コンテナ

このディレクトリには、Visual Studio CodeのRemote - Containers機能を使用して、OSH-Webプロジェクト用の一貫した開発環境をセットアップするための設定ファイルが含まれています。

## 前提条件

1. マシンに[Docker](https://www.docker.com/products/docker-desktop)をインストールする
2. [Visual Studio Code](https://code.visualstudio.com/)をインストールする
3. VS
   Code用の[Remote - Containers拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
   をインストールする

## 使用方法

1. このプロジェクトをVS Codeで開く
2. プロンプトが表示されたら、「コンテナで再度開く」をクリックするか、コマンドパレット（F1）を使用して「Remote-Containers:
   コンテナで再度開く」を選択する
3. VS Codeがコンテナをビルドし、開発環境をセットアップする
4. コンテナが実行されたら、VS Codeのターミナルで次のようなコマンドを実行できます：
    - `yarn start` - 開発サーバーを起動する
    - `yarn build` - プロジェクトを本番用にビルドする
    - `yarn lint:css` - CSSのリンティングを実行する

## 機能

この開発コンテナには以下が含まれています：

- Node.js 12
- Yarnパッケージマネージャー
- 型チェック用のFlow
- コードフォーマット用のESLintとPrettier
- Gitなどの開発ツール
- JavaScript/React開発用のVS Code拡張機能

## カスタマイズ

開発環境をカスタマイズする必要がある場合：

- VS Code設定や拡張機能を変更するには`devcontainer.json`を修正する
- コンテナ設定を変更するには`Dockerfile`を修正する
