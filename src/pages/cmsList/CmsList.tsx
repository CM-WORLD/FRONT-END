import ApplyNoticeBbs from "./components/notice";
import CmsItems from "./components/cmsItem";

import "./CmsList.scss";

const CmsList = () => {
  return (
    <>
      <div className="base-padding">
        <ApplyNoticeBbs />
        <CmsItems />
      </div>
    </>
  );
};

export default CmsList;
