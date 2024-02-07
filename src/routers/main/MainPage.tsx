import SlideShow from "./SlideShow";

const MainPage = () => {
  /** 개발자, 컨텍트 정보 */
  const contact = (
    <div className="flex gap-5 justify-center my-10">
      {/* developers profile  */}
      <div>
        <h1 className="text-2xl font-bold py-3">DEVELOPERS</h1>
        <div className="border-t border-gray-700 py-5 pr-9">
          <h3 className="font-bold">jinvicky</h3>
          <div>
            <a href="">Github</a> / <a href="">Velog</a> / <a href="">Notion</a>
          </div>
          <h3 className="font-bold pt-3">wkdu0723</h3>
          <div>
            <a href="">Github</a> / <a href="">Velog</a> / <a href="">Notion</a>
          </div>
        </div>
      </div>
      {/* 고객센터 문의  */}
      <div className="">
        <h1 className="text-2xl font-bold py-3">고객센터</h1>
        <div className="border-t border-gray-700 py-5 px-9">
          <div className="flex items-center gap-10">
            <div className="font-bold">카카오톡으로 문의하기</div>
            <div className="w-20 h-10">
              <img
                className="w-full h-full border border-rose-300"
                src="https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg"
                alt="kakao"
              />
            </div>
          </div>
          <div>
            <p className="text-md pt-2">
              문의 후 답변까지 1~2일이 소요될 수 있습니다.
            </p>
            <p className="text-md">am 9시 ~ pm 12시 | 연중무휴</p>
          </div>
        </div>
      </div>
    </div>
  );

  /** 걍진 프로필 배너 */
  const illustratorProfile = (
    <>
      {/* <div className="p-5 bg-purple-50"> */}
      <div className="">
        <div>
          <div className="flex justify-center items-center gap-5 py-7 bg-purple-50">
            <div>
              <div className="w-40 h-40">
                <img
                  className="w-full h-full border border-gray-300 rounded-full"
                  src="https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg"
                  alt="profile"
                />
              </div>
              <div className="font-bold py-1 text-center">걍진(jinvicky)</div>
            </div>
            <div>
              <div className="text-gray-600">
                <h1 className="text-2xl font-bold pb-3">PROFILE</h1>
                <div className="border-t border-gray-700 pt-3 pr-9"></div>
                <div className="text-lg text-gray-500">
                  <div className="">
                    안녕하세요. SD 캐릭터를 그리는 웹 개발자 걍진입니다.
                  </div>
                  <div>
                    현재 카페, 트위터, 인스타 등을 통해서 SD 일러스트 작업을
                    하고 있습니다.
                  </div>
                  <div className="pt-3 font-bold text-gray-600">SNS</div>
                  <div>
                    <a href="">Twitter</a> / <a href="">Cafe</a> / <a href="">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="relative m-auto pb-10 w-full">
        <SlideShow />
        {illustratorProfile}
        {contact}
      </div>
    </>
  );
};

export default MainPage;
