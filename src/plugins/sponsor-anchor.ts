export default async ({ app }) => {
  await app.router.afterEach(to => {
    if (to.hash && to.name === 'sponsors') {
      const element = document.querySelector(to.hash) // 飛び先を取得
      const windowWidth = window.innerWidth
      let headerHeight = windowWidth * 0.06

      // md サイズ以上の場合はヘッダーぶんの高さを入れる
      if (windowWidth > 768) {
        headerHeight = 100
      }

      if (element) {
        // 現在の位置から飛ぶ要素の位置までの距離を取得
        const rectTop = element.getBoundingClientRect().top
        // ページ上部から現在のスクロールの位置までの距離を取得
        const offsetTop = window.pageYOffset
        // スクロールする位置（ページ上部からの絶対値 + ヘッダーの高さ）
        const top = rectTop + offsetTop - headerHeight
        window.scroll({
          top,
          behavior: 'smooth'
        })
      }
    }
  })
}
