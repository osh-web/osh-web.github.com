FROM ubuntu:20.04

# 対話型プロンプトを避けるために環境変数を設定
ENV DEBIAN_FRONTEND=noninteractive

# 基本的な開発ツールとsudoなど必要なパッケージを一度にインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    zip \
    unzip \
    python3 \
    build-essential \
    software-properties-common \
    sudo \
    tzdata \
    && ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && dpkg-reconfigure -f noninteractive tzdata \
    && rm -rf /var/lib/apt/lists/*

# pythonコマンドをpython3にリンク
RUN ln -s /usr/bin/python3 /usr/bin/python

# Node.js 12.18のインストール（GitHub Actionsのsetup-nodeと同様）
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn flow-bin@0.81.0 \
    && node --version \
    && npm --version \
    && yarn --version \
    && flow version

# 作業ディレクトリを設定
WORKDIR /workspace

# 非rootユーザーを設定
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# ユーザーと必要なグループを作成
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    && chown -R $USERNAME:$USERNAME /workspace

# 非rootユーザーに切り替え
USER $USERNAME

# 開発サーバーを起動するコマンド
CMD ["bash"]
