export function fn (item1, item2) {
  console.log(item1 + item2)
}
export const tableconfig = {
  currentindex: 10,
  pagesize: [10, 20, 30, 50],
  fn2 () {
    console.log(this.pagesize)
  }
}
