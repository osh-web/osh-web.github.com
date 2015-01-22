## 開発環境にクラウドやバーチャル環境と構成管理ツールを利用しよう(Chef, Vagrant, Docker) {#sawanoboly}
従来のローカル開発環境は、それぞれ個別の端末上に構築していました。このやり方では構築手順も各自の裁量によってばらつきがあり、環境の差異による問題が生じることも珍しくありません。
いざ足並みを揃えようとしても構築手順や設定の共有は手間がかかりますし、開発者間や他部署とでプレビュー等する際にも多少の煩わしい設定を要します。

このセッションでは構成管理ツールやバーチャルマシンを利用すると開発環境の共有をどのように行えるかをまずお話して、その応用として開発環境より後、検証や本番環境の扱い方にも影響を与えるような利用方法について触れていきます。

また、環境にクラウドサービスを選択すると、リソースがオンデマンドで使用できたりインフラストラクチャがプログラマブルであることを踏まえた開発環境という考え方も出てきています。
余談として、開発者がそのような環境に対応するために押さえておくとよいポイントをサーバインフラエンジニアの視点からお話します。

### 澤登 亨彦 <small>さわのぼり ゆきひこ</small>

[<i class="fa fa-facebook"></i>](https://www.facebook.com/yukihiko.sawanobori )
[<i class="fa fa-twitter"></i>](https://twitter.com/sawanoboly)
[<i class="fa fa-github"></i>](https://github.com/sawanoboly)

#### 所属

HiganWorks LLC

OpsRock LLC

#### 自己紹介

アプリケーション開発・デプロイのため、プラットホーム構築や構成管理の自動化をテーマに活動。 ChefなどInfrastructure as Codeの活用を中心としたオープンソースプロジェクトにコントリビュータとして参加。 主な著書『[Chef活用ガイド](http://www.amazon.co.jp/Chef活用ガイド-コードではじめる構成管理-澤登亨彦/dp/4048919857)』

#### Web

* [http://higanworks.com/](http://higanworks.com/)
* [http://opsrock.in/](http://opsrock.in/)
