import ApplyBbs from "./components/bbs";
import CmsItems from "./components/cmsItem";

import "./CmsList.scss";

const CmsList = () => {

    return <>
    <div className="base-padding">
        <ApplyBbs />
        <CmsItems />
    </div>
    </>;
}

export default CmsList;