import { useEffect, useState } from "react";

import Locale from "../../../components/locale";
import Modal from "../../../components/modal";

import { ApiClient } from "../../../libs/ApiClient";
import { Invoice } from "../../../defines/api";

interface InvoiceListModalProps {
  display: boolean;
  cmsApplyId: string;
  onClose: () => void;
}

/** Read-Only용 인보이스 리스트 조회 모달, 신청 리스트 페이지서 바로 접근 */
const InvoiceListModal = (props: InvoiceListModalProps) => {
  /** 인보이스 리스트 조회 */
  const [invoiceList, setInvoiceList] = useState([]);
  const { cmsApplyId } = props;

  useEffect(() => {
    ApiClient.getInstance().get(
      "/invoice/list/" + cmsApplyId,
      {},
      (data) => {
        setInvoiceList(data.data);
      },
      (data) => { console.log("error: ", data)}
    );
  }, []);

  const listContent = (
    <>
      <div className="min-w-96">
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-700">
                <Locale k="invoice_id" />
              </th>
              <th className="text-right font-bold text-gray-700">
                <Locale k="invoice_date" />
              </th>
            </tr>
          </thead>
          <tbody>
            {invoiceList.map((invoice: Invoice, index) => {
              return (
                <tr key={`invoice-list-modal -${index}`}>
                  <td className="text-left text-gray-700">
                    {invoice.id || "test Id"}
                  </td>
                  <td className="text-right text-gray-700">
                    {invoice.regDate || "test Date"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <Modal
      title={<Locale k="payment" />}
      display={props.display}
      onClose={props.onClose}
      content={listContent}
    ></Modal>
  );
};

export default InvoiceListModal;
