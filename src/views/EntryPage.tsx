import React, { ReactElement } from "react";

function EntryPage ({route}): ReactElement {

  const currentRoute = route;

  function onTest () {

    console.log('test', currentRoute);

    currentRoute.ignoreConfirm = true;

    console.log('test2', currentRoute);
    
  }

  return <>
      이것은 엔트리 진입 페이지 입니다.
      <button onClick={onTest}>
          BUTTON
      </button>
    </>;
}

export default EntryPage;
