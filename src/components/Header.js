import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { /* your component's state */ };
  }


  render() {
      return (
  <header className="header">
    <img className="header__logo" src={this.props.logo} alt="логотип" />
  </header>
);
}
}

export default Header;