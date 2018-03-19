import React, {Component} from 'react';

/**
 * Footer.js
 *
 * This renders the footer of the site, including static links out to other
 * relavent resources.
 */
class Footer extends Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <p>
          <span className="logo">TV-Db</span> is{' '}
          <span role="img" aria-label="coded">
            ⌨️
          </span>{' '}
          with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by <a href="https://twitter.com/svinkle/">@svinkle</a>. View the
          source on <a href="https://github.com/svinkle/tv-db">GitHub</a>.
          <br />
          This app is a demo component to the article{' '}
          <a href="https://medium.com/@svinkle/creating-accessible-react-apps-38dc1c2775cf">
            Creating Accessible React Apps
          </a>.
          <br />
          Data, images, and content via{' '}
          <a href="https://tvmaze.com/api">TVMaze API</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
