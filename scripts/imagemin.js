'use strict'

// imagemin にオプションを渡して画像を最適化するためのスクリプト
//
// 使い方: node scripts/imagemin.js で実行できる
// スクリプト作成の経緯: https://github.com/kazupon/vuefes-2019/pull/171#issuecomment-530369690

const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

;(async () => {
  await imagemin(
    [
      'test/fixtures/assets/images/event/*.{jpg,png}' // 最適化したい画像
    ],
    {
      // 最適化した画像の出力先
      // NOTE: 例えば品質に応じてディレクトリ名を変えるなどしてください
      destination: 'tmp/dist/imagemin/event/80',

      plugins: [
        imageminMozjpeg({
          // 0 〜 100 の数字を入れる
          // 数字が大きいほど品質が高い
          // ソースを読んでもデフォルト値が分からなかった :sweat_smile:
          quality: 80 // NOTE: JPEG 画像の品質調整はココで行います
        }),
        imageminPngquant({
          // [min, max] で いずれも 0 〜 1 の数字を入れる
          // 数字が大きいほど品質が高い
          // ソースを読んでもデフォルト値が分からなかった :sweat_smile:
          //
          // https://github.com/imagemin/imagemin-pngquant に下記のように書かれているが、理解できていない :sweat_smile:
          // Instructs pngquant to use the least amount of colors required to meet or exceed the max quality. If conversion results in quality below the min quality the image won't be saved.
          quality: [0.3, 0.5] // NOTE: PNG 画像の品質調整はココで行います
        })
      ]
    }
  )

  console.log('Images optimized')
})()
