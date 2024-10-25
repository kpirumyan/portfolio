export async function getData(timout: number) {
  return new Promise(res => {
    setTimeout(() => {
      res('ok')
    }, timout)
  })
}