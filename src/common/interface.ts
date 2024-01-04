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
    bankOwner: string;
    cmsType: string | null;
    title: string;
    content: string;
    depositYn: string;
    id: string;
    regDate: string;
    status: string;
}

export interface ImgDetail {
    imgUrl: string;
    uuid: string;
    regDate?: string;
}