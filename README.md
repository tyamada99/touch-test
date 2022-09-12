## ポイント
タッチセンサーが押しっぱなし（スイッチがON)の場合、音楽の演奏途中で割り込みが何度も発生するため、OFFにするまで正常に音楽が演奏されない。
演奏中に割り込み処理が走らないようにフラグで管理し、演奏中は一時停止するようにしたら、音楽が終わるまで正常に演奏できました。
設定するメロディーの長さに合わせて、一時停止の秒数を変更してください。

> このページを開く [https://tyamada99.github.io/touch-test/](https://tyamada99.github.io/touch-test/)

## このプロジェクトを編集します

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/tyamada99/touch-test** を貼り付けてインポートをクリックしてください

## ブロックのプレビュー

この画像はマスター内の最後のコミットからのブロックコードを示しています。
このイメージは更新に数分かかる場合があります。

![生成されたブロック](https://github.com/tyamada99/touch-test/raw/master/.github/makecode/blocks.png)

#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
