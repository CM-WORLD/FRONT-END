import React, { useEffect, useState, Suspense } from "react";
import CommonLoading from "../../../components/loading";

const LoginBtnsComponent = React.lazy(
  () => import("../../signIn/page/component")
);
const BadRequest = React.lazy(() => import("../../../error/badRequest"));

const SignInPage = () => {
  const [notLogined, setNotLogined] = useState(true);

  useEffect(() => {
    // jwt 토큰 체크를 해서 로그인 되어있으면 badRequest를 띄워준다.
  }, []);

  return (
    <>
      <Suspense fallback={<CommonLoading />}>
        {/* {notLogined ?  */}
        <>
          <LoginBtnsComponent />
        </>
        {/* : <BadRequest desc="이미 로그인 되어 있습니다." />
      } */}
      </Suspense>
    </>
  );
};

export default SignInPage;
