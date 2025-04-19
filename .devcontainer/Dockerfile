FROM node:12

# Debian Stretchのリポジトリを適切に設定
RUN echo "deb http://archive.debian.org/debian/ stretch main" > /etc/apt/sources.list && \
    echo "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list

# 基本的な開発ツールをインストール
RUN apt-get -o Acquire::Check-Valid-Until=false update && apt-get -o Acquire::Check-Valid-Until=false install -y \
    git \
    curl \
    wget \
    zip \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを設定
WORKDIR /workspace

# グローバルパッケージをインストール
RUN npm install -g --unsafe-perm=true --allow-root flow-bin@0.81.0 && \
    # インストール確認
    yarn --version && \
    flow version

# 非rootユーザーを設定
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# ユーザーが存在することを確認
RUN if [ "$USERNAME" != "node" ]; then \
    groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME; \
    fi

# 作業ディレクトリの所有権をユーザーに設定
RUN chown -R $USERNAME:$USERNAME /workspace

# 非rootユーザーに切り替え
USER $USERNAME

# 開発サーバーを起動するコマンド
CMD ["bash"]
