---
title: "iOS8でvwとvhが動かないし開発者ツールは動かないしで困った"
date: "2014-09-23"
path: "/blog/2014/09/vw-and-vh-cant-move-by-ios8/"
type: "blog"
categories: ["Frontend"]
tags: ["CSS", "JavaScript"]
excerpt: "iOS8でvwとvhが動かないし開発者ツールは動かないしで困った"
ogp: "./ogp.png"
---

実装中のやつで、vwとvhが使えるような案件だったので使ってみたところ、iOS6、iOS7は動くのにiOS8では動かなくて困りました。

## vw・vhとは

親の要素をぶちやぶって、ウインドウサイズで幅や高さを指定できるプロパティです。

100vwで横幅いっぱい、100vhで縦幅いっぱいと、JavaScriptで頑張んなきゃいけなかったものが簡単に指定できます。calcと一緒に用いて使うと便利です。

ブラウザはIEは9〜、Android4.4〜なので使えるっちゃ使える感じです。

## iOS8で動かない

9月23日現在、iOS8でvw、vhどちらも動きません。vwは要素の幅、vhはメニューバーも計算された高さが指定されているように思えます。

## 検証できない

Safariの開発者ツールがiOS8にまだ対応していないみたいで、Yosemiteが公開されたらiOS8もデバッグできるようになるとか。

<a href="http://nightly.webkit.org/">WebKit Nightly Builds</a>

とりあえず上記のNightly版を入れることにより、無事デバッグすることが出来、やはりvw、vhがバグってることが確認できました。

## 対応

横幅は親要素を超過していないのでwidth:100%で乗り切る。縦幅はJavaScriptでinnerHeightを用いることで制御することが出来ました。

## まとめ

iOS8のバグが多分いままでより多い気がする。
ファイルもアップできないしで、あんまり変わっていないように見えて内部ではいろいろ変わっているみたいですね。plusも登場してこれからアプリ制作やWeb制作は非常にカオスになりそうな気がしてます。
