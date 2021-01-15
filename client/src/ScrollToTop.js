import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    // Without this it shows memory leakage,have to cancel all the asyc subscriptions in a clean up function
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(ScrollToTop);
