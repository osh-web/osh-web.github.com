## Ansibleで始めるPostgreSQL冗長化 {#soudai}

構成管理ツールはChefを始め、さまざまなツールがあります。
しかし、仕組みの難しさ、管理の煩雑さで挫折していませんか？
Ansibleの仕組みはシンプルなので、一度挫折した人こそ試して欲しいツールです。

構成管理ツールを使うことでインストールや設定作業をコード化することができます。
PostgreSQLのインストールや冗長化は非常に大切なことですが、毎日する作業では無いので属人化しがちです。
そこでAnsibleを出番です。
設定作業をコード化できるので、インストールの手順が明確でき、さらに自動化することができます。

今回はPostgreSQLを題材にして、Ansibleの概要と今日から始められることをお伝えしようと思います。

### 曽根 壮大 <small>そね たけとも</small>

[<i class="fa fa-facebook"></i>](https://www.facebook.com/soudai.sone)
[<i class="fa fa-twitter"></i>](http://twitter.com/soudai1025)
[<i class="fa fa-github"></i>](https://github.com/soudai)

#### 自己紹介

福山で日々、Web 系エンジニアとしてインフラからプログラミングまで実装を幅広く担当。PostgreSQLはWebでも便利！を伝えるために活動中。またPHPのWebフレームワーク「FuelPHP」やPythonの活動も行っています。

#### 所属

[日本PostgreSQLユーザ会](https://www.postgresql.jp/) 中国支部長
[中国地方DB勉強会](http://dbstudychugoku.github.io/) 主催
[Magic３エバンジェリスト](http://www.magic3.org/doc/)

#### Webサイト

* [そーだいなるらくがき帳](http://soudai1025.blogspot.jp/)
