---
title: "FRONTEND CONFERENCE 2017 に参加するために大阪に行ってきました"
date: "2017-07-19"
path: "/blog/2017/07/fc2017/"
type: "blog"
categories: ["Frontend", "Event"]
tags: []
excerpt: "FRONTEND CONFERENCE 2017 に参加するために大阪に行ってきました"
ogp: "./ogp.png"
---

2017年3月18日に行われたFRONTEND CONFERENCE 2017に参加するために大阪に行ってきました！  
仙台から大阪までPeachで一発で行けたので便利！会場までも3時間程度でついたので飛行機はえ〜って感じでした。

セッションは時間の都合上午後から参加しました。

## Enduring CSS

高津戸壮 ([@Takazudo](https://twitter.com/Takazudo)) さんのセッション

https://www.slideshare.net/Takazudo/enduring-css

CSSが破綻するのはマークアップやフロント実装するときにはあるあるな感じですが、それをできるだけ防ぐ規則としてわたしも注目しているECSSについての詳しく解説されていました。  
私はCSSフレームワークのようにCSSからHTMLを作るというよりは、HTMLからCSSを作る手法を多くとるため、最近ではECSSのように壊れそうな部分は別のコンポーネントやパーツなりにし、名前空間(prefix)を付けて処理するようにしています。基本的にはMindBEMdingでやってるのが違うぐらい。CSSのダークサイドとの格闘はやはり経験しかない気もしてきました。CSS in JSなり使ってても違う悩みも尽きないので。

## CSSフレームワークをつくろう！

キタジマタカシ ([@inc2734](https://twitter.com/inc2734)) さんのセッション

https://speakerdeck.com/inc2734/csshuremuwakuwotukurou

[Basis](https://sass-basis.github.io/) という国産CSSフレームワークを作成したキタジマさんのセッション。  
CSSフレームワークを作る上でのあれこれが解説されたのですが、CSSを長年触ってる方だとわかるつらみポイントが多くて思わず「わかる〜〜」って頷いてしまいました。  

[大幅にリファクタリングした Sass/CSS フレームワーク Basis v7 を公開しました](https://2inc.org/blog/2017/06/28/5736/)

6月下旬に大幅アップデートをしているのですが、しっかりその都度考えられてアップデートしていて、運用しながら改善する姿勢は見習わないとなと感じています。OSSを自分で作って運用する方はやはりすごいです。

## WebGL 2.0時代の幕開け - ウェブのグラフィックスはどう変わるのか

杉本 雅広 ([@h_doxas](https://twitter.com/h_doxas)) さんのセッション

スライド:[WebGL 2.0時代の幕開け - ウェブのグラフィックスはどう変わるのか](https://doxas.org/slide/frontkansai2017/)

フロントエンドで最強に格好いいサイトを作るために今自分が注目しているのがWebGLです。  
コアな部分が本当にわからないため勉強中なのですが、その次期バージョンWebGL 2.0について解説されていましたが、本当にここらへん詳しく解説してくれてる方がいないので非常に参考になりました。

WebGLを現在頑張って手打ちで色々やってるのですが、数年後ツールが出てきて全部出来るようになると、寂しさもありますがもっと普及するのかなと言う感じもしてます。

ハードルがめちゃくちゃ高くてかつ実装コストも高い、クライアントがわからない事が多いので案件に取り入れづらいのですがそこらへんどうにかなんないかなと言う感じです。


## いわゆる"フロントエンド"がない世界について考える

岡本 秀高 ([@motchi0214](https://twitter.com/motchi0214)) さんのセッション

https://speakerdeck.com/hideokamoto/iwayuru-hurontoendo-ganaishi-jie-nituitekao-eru

いわゆる画面が無いインターフェース、

- 声で色々な操作ができる、Alexa
- 押すだけで注文ができる、Amazon Dash Button
- レジがいらないスーパー、Amazon GO

について解説されていました。  
画面という概念がなくなり、IoTが迫ってきてるよという未来。  
もしかしたらもう未来じゃないのかもなという感触も最近ではあったりして、インターネット=web=フロントから、私の考え方はインターネット=APIになりつつあるのでそういう時代に来ているのかもなと感じました。

---

## LT

学生が自分の数倍尖ったことやってて悲しくなりました。若い子こわい

## おわりに

懇親会などで様々な方とお話する機会があったのですが、関西の方のパワーがやばすぎてやばいという言葉しか出ませんでした。東北にもあのパワーがほしいなと切実に感じてしまうぐらいの圧倒的パワー。パワーがほしいと感じたFRONTEND CONFERENCE 2017でした。
