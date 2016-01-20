import React from 'react';
import ReactDom from 'react-dom';
import NavigationMenu from './navigation-menu.jsx';

class NavigationMenuButton extends React.Component {

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    className: React.PropTypes.string.isRequired,
    links: React.PropTypes.array.isRequired,
  }

  componentDidMount() {
    ReactDom.findDOMNode(this.refs.navmobile).style.left = '-250px';
  }


  handleClick() {
    const navmobile = ReactDom.findDOMNode(this.refs.navmobile);

    navmobile.style.left = '0px';
    const div = document.createElement('div');
    div.id = 'sidenav-overlay';

    div.addEventListener('click', () => {
      navmobile.style.left = '-250px';
      div.parentNode.removeChild(div);
    }
    );

    ReactDom.findDOMNode(this).appendChild(div);
  }


  render() {
    const boundClick = this.handleClick.bind(this);
    const pageLink = window.location.pathname;
    return (
          <span>
          <a href="#" ref="navigation_menu"
            onClick={boundClick}
            data-activates="nav-mobile"
            className="button-collapse"
          >
              <i className="mdi-navigation-menu"></i>
          </a>
          <NavigationMenu ref="navmobile"
            id={this.props.id}
            className={this.props.className}
            links={this.props.links}
            pageLink={pageLink}
          />
          </span>
      );
  }
}

export default NavigationMenuButton;
