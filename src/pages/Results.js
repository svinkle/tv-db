import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Show from '../components/Show';
import Loader from '../components/Loader';
import Announcements from '../components/Announcements';

/**
 * Results.js
 *
 * This renders the results "page" after submitting the search form.
 */
class Results extends Component {
  constructor() {
    super();

    // The container to receive focus on page load
    this.container = React.createRef();

    // Bind the custom method(s) to the class
    this.fetchShowData = this.fetchShowData.bind(this);

    // Set the initial component state
    this.state = {
      loading: true,
      results: null,
      q: null,
      announcementMessage: null
    };
  }

  componentDidMount() {

    // Cache the `q` URL param which comes in from the router, defined
    // in App.js
    const q = this.props.match.params.q;

    // Update the `title` element text
    document.title = 'Loading… | TV-Db';

    // Go and get the data via `fetchShowData()` method
    this.fetchShowData(q);

    // Ensure the viewport returns to the top of the document window
    window.scrollTo(0, 0);
  }

  /**
   * Fetch TV data from TVMaze API based on the `q` URL param.
   *
   * @param {String} q Search terms from Search.js
   * @return null
   */
  fetchShowData(q) {

    // Timeout to allow old school TV loading gif to run for a bit 😎
    setTimeout(() => {

      // Use the new `fetch()` API to go and grab some data
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      fetch(`https://api.tvmaze.com/search/shows?q=${q}&page=2`)
        .then(data => data.json())
        .then(data => {

          // Once we have the data, set it to the `results` state property
          // and update the `loading` property, `q` property, and
          // `announcementMessage` property
          this.setState({
            loading: false,
            results: data,
            q: q,
            announcementMessage: `Total results found: ${data.length}`
          });

          // Update the `title` element text
          document.title = `Search Results for "${q}" | TV-Db`;

          // Set focus to the content container after the data has been fetched
          // Note: this happens _after_ setting the `loading` state property,
          // so the loading screen will be gone by this point
          this.container.current.focus();
        });
    }, 750);
  }

  render() {

    // Show the loading screen only if the current state of the `loading`
    // property retirns `true`
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <div
        aria-labelledby="pageTitle"
        className="container"
        ref={this.container}
        role="region"
        tabIndex="-1"
      >
        <Header />

        <main className="main">
          <h1 id="pageTitle" className="heading heading--1">
            Search Results for "{this.state.q}":
          </h1>
          {/*
            Iterate over the data and output show links in a list via `<Show/>`
            component, passing the `id` via `showId` prop
          */}
          <ul className="show__list">
            {this.state.results.map(show => {
              return (
                <li className="show__list-item" key={show.show.id}>
                  <Show showId={show.show.id} />
                </li>
              );
            })}
          </ul>
        </main>

        <Footer />

        {/*
          Announce any changes to the `announcementMessage` state property
        */}
        <Announcements message={this.state.announcementMessage} />
      </div>
    );
  }
}

export default Results;
