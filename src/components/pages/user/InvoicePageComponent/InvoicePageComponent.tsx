'use client';

import { DownloadIcon, MailIcon } from './icons';

const InvoicePageComponent = ({ id }: { id: string }) => {
  // const [isPrinting, setIsPrinting] = useState(false);

  // const handlePrint = () => {
  //   setIsPrinting(true);
  //   window.print();
  //   setTimeout(() => setIsPrinting(false), 1000);
  // };
  return (
    <div className="min-h-screen py-4 print:p-0 print:bg-white">
      <div className="max-w-4xl bg-white rounded-lg shadow-sm overflow-hidden print:shadow-none">
        {/* Header Actions - Hidden when printing */}
        <div className="bg-gray-800 text-white p-6 flex justify-between items-center print:hidden">
          <h1 className="text-xl font-semibold">Invoice #2036441478</h1>
          <div className="flex space-x-3">
            {/* <button
              onClick={handlePrint}
              className="flex items-center px-4 py-2 bg-primary rounded-md hover:bg-blue-700 transition-colors"
            >
              <PrinterIcon className="h-4 w-4 mr-2" />
              Print
            </button> */}
            <button className="flex items-center px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition-colors">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </button>
            <button className="flex items-center px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors">
              <MailIcon className="h-4 w-4 mr-2" />
              Email
            </button>
          </div>
        </div>

        {/* Invoice Content */}
        <div className="p-6 md:p-8">
          {/* Company Branding */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="h-12 w-12 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <h2 className="text-xl font-bold mt-2">Rabin Pandey</h2>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-800 print:text-gray-800">
                INVOICE
              </h1>
              <p className="text-gray-500">#2036441478</p>
            </div>
          </div>

          {/* Billing Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
                Billed To
              </h3>
              <div className="text-gray-800">
                <p className="font-semibold">Company Name</p>
                <p>Company address</p>
                <p>City, Country - 00000</p>
                <p>+1 (000) 123-4567</p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
                    Invoice Number
                  </h3>
                  <p className="text-gray-800">#AB2324-01</p>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
                    Reference
                  </h3>
                  <p className="text-gray-800">INV-057</p>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
                    Date Issued
                  </h3>
                  <p className="text-gray-800">26 Apr, 2025</p>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
                    Due Date
                  </h3>
                  <p className="text-gray-800 font-medium">26 Apr, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Items */}
          <div className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-2 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Item Description
                    </th>
                    <th className="py-3 px-2 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Qty
                    </th>
                    <th className="py-3 px-2 text-right text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th className="py-3 px-2 text-right text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-2 text-gray-800">Item Name</td>
                    <td className="py-4 px-2 text-center text-gray-800">1</td>
                    <td className="py-4 px-2 text-right text-gray-800">
                      $3,000.00
                    </td>
                    <td className="py-4 px-2 text-right text-gray-800">
                      $3,000.00
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-2 text-gray-800">Item Name</td>
                    <td className="py-4 px-2 text-center text-gray-800">1</td>
                    <td className="py-4 px-2 text-right text-gray-800">
                      $1,500.00
                    </td>
                    <td className="py-4 px-2 text-right text-gray-800">
                      $1,500.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-full md:w-64">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800">$4,500.00</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="text-gray-800">$450.00</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-200 font-semibold">
                <span className="text-gray-800">Total</span>
                <span className="text-gray-800">$4,950.00</span>
              </div>
              <div className="mt-4 bg-primary text-white p-4 rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">Total Due</span>
                  <span className="font-bold">$4,950.00</span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500 text-center">
                USD Four Thousand Nine Hundred Fifty Only.
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-gray-200 pt-8">
            <div>
              <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
                Payment Details
              </h3>
              <div className="text-gray-800">
                <p>
                  <span className="font-medium">Bank:</span> Bank of America
                </p>
                <p>
                  <span className="font-medium">Account Name:</span> Acme
                  Corporation
                </p>
                <p>
                  <span className="font-medium">Account Number:</span>{' '}
                  XXXX-XXXX-XXXX-1234
                </p>
                <p>
                  <span className="font-medium">Routing Number:</span>{' '}
                  XXX-XXX-XXX
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
                Business Details
              </h3>
              <div className="text-gray-800">
                <p>Business address</p>
                <p>City, State, IN - 000 000</p>
                <p>TAX ID 0XXXXXXX1234XXX</p>
              </div>
            </div>
          </div>

          {/* Notes & Terms */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-gray-500 font-medium mb-2 text-sm uppercase tracking-wider">
              Notes
            </h3>
            <p className="text-gray-600 mb-4">
              Thank you for your business! Payment is due within 30 days of
              issue.
            </p>

            <div className="flex justify-between items-center text-gray-500 text-sm">
              <div>Thank you for the business!</div>
              <div className="flex space-x-4">
                <span>+91 00000 00000</span>
                <span>hello@email.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePageComponent;
