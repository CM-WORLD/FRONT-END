export interface BbsDetail {
    title: string;
    content: string;
    bbsCode: string;
    nickName: string;
    imgList: []
}

export interface ReplyDetail {
    content: string;
    nickName: string;
    regDate: string;
}

/* 커미션 신청 상세 */ 
export interface CmsApplyDetail {
    cmsDto: CommissionDetail;
    id: string;
    title: string;
    content: string;
    cmsType: string | null;
    bankOwner: string;
    depositYn: string;
    status: string;
    statusNm: string;
    regDate: string;
}

export interface CommissionDetail {
    id: string;
    name: string;
    content: string;
    profileImg: string;
    status: string;
    delYn: string;
    regDate: string;
    uptDate: string;
}

export interface ImgDetail {
    imgUrl: string;
    uuid: string;
    regDate?: string;
}

export interface CmsPayDetail {
    comment: string;
    payAmt: number;
    regDate: string;
}