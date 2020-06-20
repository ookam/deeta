import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div>
    <div
      data-uk-sticky="media: 1000"
      className="uk-navbar-container tm-navbar-container uk-navbar-transparent uk-sticky uk-sticky-fixed"
    >
      <div
        className="uk-container uk-container-expand"
      >
        <nav className="uk-navbar">
          <div className="uk-navbar-left">
            <Link
              to="/"
              className="uk-navbar-item uk-logo"
            >
              <img
                src={'/static_assets/img/logo.svg'}
                className="uk-margin-small-right"
              />
              mahiro oka / website
            </Link>
          </div>
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-visible@m">
              <li>
                <Link
                  to="/page1"
                >
                  page1
                </Link>
              </li>
              <li>
                <Link
                  to="/page2"
                >
                  page2
                </Link>
              </li>
              <li>
                <Link
                  to="/page3"
                >
                  page3
                </Link>
              </li>
            </ul>

            <div className="uk-navbar-item uk-visible@m">
              <a href="https://twitter.com/sesere115" target="_blank" className="uk-button uk-button-default tm-button-default uk-icon">
                Twitter
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <a data-uk-navbar-toggle-icon="" href="#offcanvas" data-uk-toggle="" className="uk-navbar-toggle uk-hidden@m uk-icon uk-navbar-toggle-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg></a>
          </div>
        </nav>
      </div>
    </div>
    <div className="uk-sticky-placeholder">
    </div>
    <div id="offcanvas" data-uk-offcanvas="mode: push; overlay: true" className="uk-offcanvas">
      <div className="uk-offcanvas-bar">
        <div className="uk-panel">
          <ul className="uk-nav uk-nav-default tm-nav">
            <li className="uk-nav-header">メニュー</li>
            <li>
              <a href="/">
                TOP
              </a>
            </li>

            <li>
              <a href="/">
                page1
              </a>
            </li>
            <li>
              <a href="/">
                page2
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sesere115" target="_blank">
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header
