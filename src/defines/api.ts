export interface BbsDetail {
  id: number;
  title: string;
  content: string;
  bbsCode: string;
  memberDto: MemberDetail;
  regDate: string;
  imgList: [];
}

export interface MemberDetail {
  id: string;
  nickName: string;
  email: string;
  regDate: string;
}

export interface ReplyDetail {
  id: number;
  content: string;
  boardDto: BbsDetail;
  groupId: number;
  sequenceId: number;
  parentReplyId: number;
  levelId: number;
  nickName: string;
  myReply: boolean;
  hasChildren: boolean;
  regDate: string;
}

/* 커미션 신청 상세 */
export interface CmsApplyDetail {
  cmsName: string;
  cmsPayDto: PaymentDetail;
  cmsImgDtoList: ImgDetail[];
  id: string;
  title: string;
  content: string;
  cmsType: string | null;
  cmsTypeNm: string | null;
  status: string;
  statusNm: string;
  bankOwner: string;
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
  prsCnt: number;
  rsvCnt: number;
}

export interface ImgDetail {
  imgUrl: string;
  uuid: string;
  regDate?: string;
}

export interface PaymentDetail {
  id: number;
  title: string;
  amount: number;
  status: string;
  statusNm: string;
  paymentMethod: string;
  message: string;
  memberId: string;
  regDate: string;
}

export interface PageObj {
  first: boolean;
  last: boolean;
  size: number;
  totalPages: number;
  totalElements: number;
  empty: boolean;
  number: number;
}

export interface ReviewDetail {
    id: number;
    applyDto: CmsApplyDetail;
    content: string;
    displayYn: string;
    nickName: string;
    regDate: string;
    cmsName: string;
}

/** API 통신 Status Code */
export enum EApiStatus {
  Success = 200, // 성공
  Reissuance = 205, // 토큰 재발급
  NoAuth = 410, // 권한 없음
  BadRequest = 400, // 잘못된 요청
}


/** 인보이스  */
export interface Invoice {
  id: number;
  name: string;
  regDate: string;
}