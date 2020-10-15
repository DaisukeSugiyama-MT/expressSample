# expressSample
Node.jsのApplication サーバ Express のサンプルです。
Node.jsのインストールから行います。

<br/>

## node.jsのインストール
windows向け
Nodist(Node.jsのバージョン管理ができるツール)を使用してNode.jsをインストールします。

参考(https://qiita.com/satoyan419/items/56e0b5f35912b9374305)

以下リンクから、NodistSetup.exeをダウンロード
https://github.com/nullivex/nodist/releases

<br/>

### Nodist 基本コマンド
Nodistのバージョン確認
```
nodist -v
```

インストール可能なNode.jsの一覧表示
```
nodist dist
```

Node.js インストール
```
nodist + ｛バージョン｝
```

Node.js アンインストール
```
nodist - {バージョン}
```

Node.js バージョン切替
```
nodist use {バージョン}
```

<br/>

### npm のアップデート
npm は Node.jsのパッケージ管理ツール(※[yarn](https://classic.yarnpkg.com/ja/)というのもあります。
node.jsをインストールした際に一緒にインストールされます。

npmのバージョン確認
```
npm -v 
```
npmの アップデート
```
npm i -g  npm
```

### npx インストール
npxはローカルにインストールしたnpm packageのコマンドを実行したり、
ローカルに存在しないコマンドでも一時的に実行できるようにするパッケージです。

```
npx i npx -g
```

<br/>

## Express インストール
ExpressはNode.jsのWebアプリフレームワークです。
（その他のフレームワークには[Meteor](https://www.meteor.com/),[koa](https://koajs.com/),[Hapi](https://hapi.dev/)などがあります。）

<br/>

### npxを利用してExpressを使用する場合
```
npx express {アプリ名}
```

<br/>

### Express-GeneratorをインストールしてExpressを利用する場合
```
npm install -g express-generator
```

```
express {アプリ名}
```

<br/>

### Express起動
アプリのディレクトリに移動,使用するパッケージのインストール
```
cd {アプリ名}&&npm install
```
アプリケーション起動
```
npm start
```
以下へアクセス
http://localhost:3000

<br/>

### 参考
https://qiita.com/satoyan419/items/56e0b5f35912b9374305

https://qiita.com/akkey2475/items/e0ea878a6b955efd9fba

[npxようやく理解した](https://blog.3qe.us/entry/2019/10/17/150753)

[Express](https://expressjs.com/ja/)
