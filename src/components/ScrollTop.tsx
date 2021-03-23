import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type Location = {
  hash: string,
  pathname: string,
  search: string,
  state: string | undefined | unknown
}

interface ScrollToTopProps extends RouteComponentProps {
  location: Location
}

class ScrollToTop extends React.Component<ScrollToTopProps> {
  componentDidUpdate(prevProps: ScrollToTopProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
