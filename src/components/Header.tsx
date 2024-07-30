import { HashLink as Link } from 'react-router-hash-link';
import { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../assets/css/header.css';

class Header extends Component {
  state = {
    isOpen: false // メニューの初期状態は閉じている
  };

  // メニューが開かれたときにスクロールを制限する
  handleStateChange = (state) => {
    this.setState({ isOpen: state.isOpen }, () => {
      document.body.style.overflow = this.state.isOpen ? 'hidden' : 'auto';
    });
  };

  // メニューを閉じる
  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <header className='header-contents'>
        <div className='header-inner'>
          <div id="outer-container" className='hamburger-block'>
            <Menu isOpen={this.state.isOpen} onStateChange={this.handleStateChange} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
              <ul id='page-wrap'>
                <li className='header-nav-burger-link'>
                  <Link smooth to='/#Work' onClick={this.closeMenu} className='header-nav-burger'>・Work</Link>
                  <div className='header-nav-burger-link'>
                    <Link smooth to='/#Client' onClick={this.closeMenu} className='header-nav-burger sub'>Client Work</Link>
                  </div>
                </li>
                <li className='header-nav-burger-link'>
                  <Link smooth to='/#About' onClick={this.closeMenu} className='header-nav-burger'>・About</Link>
                </li>
              </ul>
              <div className=''>
                <p className='header-nav-burger link'>
                  <a href='message:'>nakajishuta215@gmail.com</a>
                </p>
                <p className='header-nav-burger link'>
                  <a href='https://github.com/nakaji215' className='' target='_blank'>Github</a>
                </p>
              </div>
            </Menu>
          </div>
          <div className='window-btn-block'>
            <a href='https://github.com/nakaji215' className='window-btn'>Github</a>
          </div>
          <div className='header-nav'>
            <nav className='header-nav-list'>
              <li className='header-nav-link'>
                <Link smooth to='/#Work' className="header-nav-link-text">Work</Link>
              </li>
              <li className='header-nav-link'>
                <Link smooth to='/#About' className="header-nav-link-text">About</Link>
              </li>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
