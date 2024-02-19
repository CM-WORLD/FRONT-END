/** 결제 관련 타입, 상태코드 */
export const enum PaymentStatus {
    PAYMENT_PENDING = "PM01",
    PAYMENT_COMPLETE = "PM02",
    PAYMENT_FAIL = "PM03",
    PAYMENT_CANCEL = "PM04",
    PAYMENT_REFUND = "PM05",
    PAYMENT_BANK_PROCESS = "PM06"

}