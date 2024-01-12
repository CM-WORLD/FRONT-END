import React, { Suspense } from 'react';
import CommonLoading from '../../../../components/loading';

const MyCmsDetailComponent = React.lazy(() => import('../component/index'));

const MyCmsApplyDetail = () => {
    return (
      <Suspense fallback={<CommonLoading />}>
        <MyCmsDetailComponent />
      </Suspense>
    );
  };
export default MyCmsApplyDetail;