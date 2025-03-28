const theme = {
  color: {
    primaryColor: '#FF385C',
    secondaryColor: '#00848A'
  },
  textColor: {
    primaryTextColor: '#484848',
    secondaryTextColor: '#222222'
  },
  mixin: {
    boxshow:`
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 5px rgb(0, 0, 0, .18);
    }`
  }
}

export default theme