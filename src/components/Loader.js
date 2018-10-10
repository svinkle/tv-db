import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Loader.js
 *
 * This renders the loading screen in between a search and viewing the
 * details page, Details.js.
 */
class Loading extends Component {
  constructor() {
    super();

    // The container to receive focus on page load
    this.container = React.createRef();
  }

  componentDidMount() {

    // When the component mounts, set focus onto the container in order to
    // announce the current state of the app — "Loading…"
    this.container.current.focus();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <main className="main">
          {/*
            Need to create a ref to the `div` element here in order to
            set focus on this container within the `componentDidMount()`
            lifecycle method
          */}
          <div
            aria-label="Loading…"
            className="loader"
            ref={this.container}
            role="region"
            tabIndex="-1"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/loading.gif`}
              alt=""
              className="loader__image"
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Loading;
