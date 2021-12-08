
export default {
  render(h) {
    console.log(111)
    
    return h('div', this.$slots.default)
  }
}