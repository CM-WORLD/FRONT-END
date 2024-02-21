/** 결제 관련 타입, 상태코드 */
export const enum PaymentStatus {
    PAYMENT_PENDING = "PM01",
    PAYMENT_COMPLETE = "PM02",
    PAYMENT_FAIL = "PM03",
    PAYMENT_CANCEL = "PM04",
    PAYMENT_REFUND = "PM05",
    PAYMENT_BANK_PROCESS = "PM06"
}

export const enum PaymentMethod {
    /** 토스 */
    PAYMENT_TOSS = "PY01",
    /** 계좌이체 */
    PAYMENT_BANK = "PY02",
};

export const enum PaymentType {
    /** 기본금 */
    PAY_BASE_AMT = "PD01", 
    /** 추가금 */
    PAY_ADD_AMT = "PD02",
};
