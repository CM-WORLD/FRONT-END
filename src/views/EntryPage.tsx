// /* eslint-disable react-hooks/rules-of-hooks */
import { createBrowserHistory } from "history";
import React, { ReactElement } from "react";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

function EntryPage(): ReactElement {
  function useNavi() {
    // currentRoute.ignoreConfirm = true;
  }

  // type LocationListener<State = LocationState> = (location: Location<State>, action: Action) => void;

  const history = createBrowserHistory();
  history.listen(({ location, action }) => {
    console.log(
      `The current URL is ${location.pathname}${location.search}${location.hash}`
    );
    console.log(`The last navigation action was ${action}`);
  });

  return (
    <>
      이것은 엔트리 진입 페이지 입니다.
      <button onClick={useNavi}>BUTTON</button>
    </>
  );
}

export default EntryPage;
