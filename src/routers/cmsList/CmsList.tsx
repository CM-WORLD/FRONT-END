import CmsItems from "./CmsItem";
import ApplyNoticeBbs from "./CmsNoticeLIST";

const CmsList = () => {
  return (
    <div className="w-3/4 m-auto p-5">
      <ApplyNoticeBbs />
      <CmsItems />
    </div>
  );
};

export default CmsList;
