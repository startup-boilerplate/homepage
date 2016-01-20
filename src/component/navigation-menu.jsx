import React from 'react';
import Link from '../component/link.jsx';


class NavigationMenu extends React.Component {

  static propTypes = {
    links: React.PropTypes.array.isRequired,
    pageLink: React.PropTypes.string,
    className: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
  }

  render() {
    const links = this.props.links.map((link, i) => {
      const className = (this.props.pageLink === link.href) ? 'active' : '';
      return <li key={ i } className={ className }><Link { ...link }/></li>;
    });

    const id = (this.props.id) ? this.props.id : '';
    const className = this.props.className;

    return (
          <ul ref="{ this.props.ref }" id={ id } className={ className }>
          {links}
          </ul>);
  }

}

export default NavigationMenu;
