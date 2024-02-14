// import Modal from "../../../components/modal";
// import Locale from "../../../components/locale";
// import Button from "../../../components/button";

// import { CmsPayDetail } from "../../../defines/api";

// interface PaymentModalProps {
//   paymentData: CmsPayDetail;
//   display: boolean;
//   onClick?: () => void;
// }

// /** read-only로 결제 내역을 쉽게 볼 수 있는 모달 */
// const PaymentModal = (props: PaymentModalProps) => {
//   const paymentContent = (
//     <>
//       <div className="min-w-96">
//         <div className="flex justify-between mb-6">
//           <div className="text-gray-700">
//             <div>결제 ID: INV12345</div>
//             <div>결제 요청 날짜: 01/05/2023</div>
//           </div>
//         </div>
//         <table className="w-full mb-8">
//           <thead>
//             <tr>
//               <th className="text-left font-bold text-gray-700">항목</th>
//               <th className="text-right font-bold text-gray-700">금액</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="text-left text-gray-700">장식 추가금</td>
//               <td className="text-right text-gray-700">100.00</td>
//             </tr>
//             <tr>
//               <td className="text-left text-gray-700">이펙트 추가금</td>
//               <td className="text-right text-gray-700">50.00</td>
//             </tr>
//             <tr>
//               <td className="text-left text-gray-700"></td>
//               <td className="text-right text-gray-700">75.00</td>
//             </tr>
//           </tbody>
//           <tfoot>
//             <tr>
//               <td className="text-left font-bold text-gray-700">
//                 <Locale k="payment_amount" />
//               </td>
//               <td className="text-right font-bold text-gray-700">225.00</td>
//             </tr>
//             <tr className="">
//               <td className="text-left font-bold text-gray-700 py-5">
//                 <Locale k="payment_type" />
//               </td>
//               <td className="text-right font-bold text-gray-700">
//                 <Button color="Blue">
//                   <Locale k="toss_payment" />
//                 </Button>
//                 <Button color="Emerald" className="ml-3">
//                   <Locale k="bank_transfer" />
//                 </Button>
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//         <hr />
//         <div className="mt-5 mb-8">
//           <h2 className="text-lg font-bold mb-4 text-gray-700">작가 코멘트</h2>
//           <div className="p-4 bg-gray-100">
//             <div className="text-gray-700 mb-2">
//               추가금 관련 문의는 문의 게시판 이용 부탁드립니다.
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
//   return (
//     <>
//       <Modal
//         title={<Locale k="payment_detail" />}
//         display={props.display}
//         content={paymentContent}
//         onClose={props.onClick}
//         onSubmit={() => {}}
//       />
//     </>
//   );
// };

// export default PaymentModal;
