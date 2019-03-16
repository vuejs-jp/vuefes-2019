# Vue Fes Japan 2019

[![CircleCI](https://circleci.com/gh/kazupon/vuefes-2019.svg?style=svg&circle-token=2e5a81f10b558c9aa99c38a2acc9bc862b20c860)](https://circleci.com/gh/kazupon/vuefes-2019)

このリポジトリは Vue Fes Japan 2019 の Web サイトのソースコードです。

## Setup

```shell
yarn install
```

## Development

下記コマンドを実行すると Web サーバーがホットリロードで起動して `http://localhost:3000/2019/` で確認できます。

```shell
yarn dev
```

### 画像の最適化

画像ファイルを追加または変更した場合には、コミット時に imagemin により自動で最適化されます。

ただし Windows を使っている場合にエラーが発生するという報告を受けています。画像の最適化をスキップする場合はコミット時に `--no-verify` オプションを使ってください。

```shell
git commit --no-verify
``` 

## Testing

```shell
yarn test
```

## Generate

下記コマンドを実行すると、静的ファイルを `dist/2019/` 配下に生成できます。

```shell
yarn generate
```
