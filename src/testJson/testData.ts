/** post json 배열  */
export const postJsonArr = [{
    "id": 2,
    "title": "\"new cm type\"",
    "content": "\"http://velog/jinvicky\"",
    "imgUrl": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "type": "TY02",
    "isNotBg": null,
    "regDate": "2023.12.19"
}, {
    "id": 3,
    "title": "\"new cm type\"",
    "content": "\"http://velog/jinvicky\"",
    "imgUrl": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "type": "TY01",
    "isNotBg": null,
    "regDate": "2023.12.19"
}, {
    "id": 4,
    "title": "\"new cm type\"",
    "content": "\"http://velog/jinvicky\"",
    "imgUrl": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "type": "TY01",
    "isNotBg": null,
    "regDate": "2023.12.19"
}]

/** banner json 배열 */
export const bannerJsonArr = [
    {
        "id": 1,
        "hrefUrl": "http://localhost:3000/commissions",
        "comment": "first banner by qmeng",
        "startDate": null,
        "endDate": null,
        "delYn": "N",
        "regDate": "2023-12-28 01:06:15.933056",
        "uptDate": "2023-12-28 01:06:15.933056",
        "imgUrl": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/cmsList/1703725572057_bnr_QM.jpg"
    },
    {
        "id": 2,
        "hrefUrl": "http://localhost:3000/commissions",
        "comment": "second banner by qmeng",
        "startDate": "2024.1.1",
        "endDate": "2024.1.20",
        "delYn": "N",
        "regDate": "2024-01-02 00:55:45.277935",
        "uptDate": "2024-01-02 00:55:45.277935",
        "imgUrl": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/banner/1704156943940_test_01.jpg"
    }
]

/** commission > 공지사항 게시판 json 배열 */
export const noticeJsonArr = [
    {
        "id": 4,
        "memberDto": {
            "id": 2,
            "uid": "0",
            "nickName": "user_8e03168d",
            "profileImg": "",
            "status": "US01",
            "loginType": null,
            "lastLoginTime": "2024.01.28 10:15",
            "refreshToken": null,
            "regDate": "2024-01-11 15:11:05.256312"
        },
        "bbsCode": "BS01",
        "title": "jwtTest",
        "content": "jwtContent",
        "viewCnt": 0,
        "displayYn": "Y",
        "delYn": "N",
        "regDate": "2024-01-21 23:55:30.966782",
        "uptDate": "2024-01-21 23:55:30.966782"
    },
    {
        "id": 2,
        "memberDto": {
            "id": 1,
            "uid": "0",
            "nickName": "user_1463d9b2",
            "profileImg": "",
            "status": "US01",
            "loginType": null,
            "lastLoginTime": "2024.01.12 00:06",
            "refreshToken": null,
            "regDate": "2024-01-05 07:33:48.748090"
        },
        "bbsCode": "BS01",
        "title": "title 왜 여깃음ㅋㅋ",
        "content": "문의 이거 어케함\n",
        "viewCnt": 0,
        "displayYn": "Y",
        "delYn": "N",
        "regDate": "2024-01-04",
        "uptDate": null
    }
];


/** 신청 가능한 커미션 리스트 json 배열 */
export const commissionJsonArr = [
    {
        "id": "7505b1f2-7c6c-48d3-904b-c37ca8d57be7",
        "name": "저가고퀄커미션",
        "content": "0.3부터 시작하는 저렴이",
        "profileImg": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/cmsList/1704327067936_test_01.jpg",
        "status": "RP02",
        "delYn": "N",
        "regDate": "2024-01-04 00:11:08.722881",
        "uptDate": "2024-01-04 00:11:08.722881",
        "prsCnt": 0,
        "rsvCnt": 0
    },
    {
        "id": "7505b1f2-7c6c-48d3-904b-c37ca8d57be8",
        "name": "테스트용커미",
        "content": "0.3부터 시작하는 저렴이",
        "profileImg": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/cmsList/1704327067936_test_01.jpg",
        "status": "RP02",
        "delYn": "N",
        "regDate": "2024-01-04 00:11:08.722881",
        "uptDate": "2024-01-04 00:11:08.722881",
        "prsCnt": 0,
        "rsvCnt": 0
    }
];


/** 신청 리뷰 json 배열 */
export const reviewJsonArr = [
    {
        "id": 2,
        "applyDto": {
            "id": "8125065b-8bf9-4214-9b44-7dc8a1ed05d8",
            "cmsDto": {
                "id": "7505b1f2-7c6c-48d3-904b-c37ca8d57be7",
                "name": "저가고퀄커미션",
                "content": "0.3부터 시작하는 저렴이",
                "profileImg": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/cmsList/1704327067936_test_01.jpg",
                "status": "RP02",
                "delYn": "N",
                "regDate": "2024-01-04 00:11:08.722881",
                "uptDate": "2024-01-04 00:11:08.722881",
                "prsCnt": null,
                "rsvCnt": null
            },
            "memberDto": {
                "id": 2,
                "uid": "0",
                "nickName": "user_8e03168d",
                "profileImg": "",
                "status": "US01",
                "loginType": null,
                "lastLoginTime": "2024.01.28 10:15",
                "refreshToken": null,
                "regDate": "2024-01-11 15:11:05.256312"
            },
            "cmsType": "1인",
            "cmsTypeNm": null,
            "title": "환불해주세요",
            "content": "안녕하세요. 김진혁입니다. 커미션 신청합니다.",
            "bankOwner": "김진혁",
            "status": "CM07",
            "regDate": "2024.01.12 15:13",
            "statusNm": "리뷰 작성 완료",
            "cmsName": null
        },
        "content": "리뷰 상태 변경해주세용",
        "nickName": "user_8e03168d",
        "memberId": 2,
        "cmsId": "7505b1f2-7c6c-48d3-904b-c37ca8d57be7",
        "displayYn": "Y",
        "regDate": "2024-01-24 09:09:36",
        "cmsName": "저가고퀄커미션"
    },
    {
        "id": 5,
        "applyDto": {
            "id": "8125065b-8bf9-4214-9b44-dfsdfsdfdsfs",
            "cmsDto": {
                "id": "7505b1f2-7c6c-48d3-904b-c37ca8d57be7",
                "name": "저가고퀄커미션",
                "content": "0.3부터 시작하는 저렴이",
                "profileImg": "https://jvk-world.s3.ap-northeast-2.amazonaws.com/cmsList/1704327067936_test_01.jpg",
                "status": "RP02",
                "delYn": "N",
                "regDate": "2024-01-04 00:11:08.722881",
                "uptDate": "2024-01-04 00:11:08.722881",
                "prsCnt": null,
                "rsvCnt": null
            },
            "memberDto": {
                "id": 5,
                "uid": "0",
                "nickName": "user_90015bee",
                "profileImg": "",
                "status": "US01",
                "loginType": null,
                "lastLoginTime": "2024.01.12 00:38",
                "refreshToken": null,
                "regDate": "2024-01-11 15:38:48.807505"
            },
            "cmsType": null,
            "cmsTypeNm": null,
            "title": "rkdwl",
            "content": "rkdwl",
            "bankOwner": "rkdwl",
            "status": "CM07",
            "regDate": "2024.01.12 15:13",
            "statusNm": "리뷰 작성 완료",
            "cmsName": null
        },
        "content": "user_djflsjdflksdf",
        "nickName": "user_djflsjdflksdf",
        "memberId": 5,
        "cmsId": "7505b1f2-7c6c-48d3-904b-c37ca8d57be7",
        "displayYn": "N",
        "regDate": null,
        "cmsName": "저가고퀄커미션"
    }
];