"use client"

export function SidebarAffiliate() {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
        <h3 className="font-semibold mb-3 text-center text-sm">Featured Deals</h3>
        <a
          href="https://www.seedsman.com/us-en/cannabis-seeds/flowering-type/autoflowering-feminised-cannabis-seeds?a_aid=6898fd6444bda&a_bid=c0f03fc3"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 transition-opacity"
        >
          <img
            src="https://seedsman.postaffiliatepro.com/accounts/default1/aang5ubmn24/c0f03fc3.gif"
            alt="Seedsman Autoflowering Seeds"
            title="Seedsman Autoflowering Seeds"
            className="w-full h-auto rounded-lg"
          />
        </a>
        <img
          style={{ border: 0 }}
          src="https://seedsman.postaffiliatepro.com/scripts/aang5uimn24?a_aid=6898fd6444bda&a_bid=c0f03fc3"
          width="1"
          height="1"
          alt=""
        />
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
        <h4 className="font-semibold mb-2 text-sm">Need Growing Supplies?</h4>
        <p className="text-xs text-gray-600 mb-3">Complete cultivation kits and nutrients</p>
        <a
          href="https://www.seedsman.com/us-en/cultivation-supplies/seedsman-nutrients?a_aid=6898fd6444bda&a_bid=ef01b00a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors"
        >
          Shop Supplies
        </a>
        <img
          style={{ border: 0 }}
          src="https://seedsman.postaffiliatepro.com/scripts/aang5uimn24?a_aid=6898fd6444bda&a_bid=ef01b00a"
          width="1"
          height="1"
          alt=""
        />
      </div>
    </div>
  )
}
