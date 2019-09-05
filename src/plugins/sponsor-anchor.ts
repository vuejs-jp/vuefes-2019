export default async ({ app }) => {
  await app.router.afterEach(to => {
    if (to.hash && to.name === 'sponsors') {
      const element = document.querySelector(to.hash)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  })
}
