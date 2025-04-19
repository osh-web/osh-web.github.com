FROM ubuntu:20.04

# 基本的な開発ツールをインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    zip \
    unzip \
    python3 \
    build-essential \
    software-properties-common \
    && rm -rf /var/lib/apt/lists/*

# pythonコマンドをpython3にリンク
RUN ln -s /usr/bin/python3 /usr/bin/python

# Node.js 12.18のインストール（GitHub Actionsのsetup-nodeと同様）
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g yarn \
    && node --version \
    && npm --version \
    && yarn --version

# flow-binのインストール
RUN npm install -g --unsafe-perm=true --allow-root flow-bin@0.81.0 && \
    # インストール確認
    flow version

# 作業ディレクトリを設定
WORKDIR /workspace

# 非rootユーザーを設定
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# ユーザーと必要なグループを作成
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# 作業ディレクトリの所有権をユーザーに設定
RUN chown -R $USERNAME:$USERNAME /workspace

# 非rootユーザーに切り替え
USER $USERNAME

# 開発サーバーを起動するコマンド
CMD ["bash"]
