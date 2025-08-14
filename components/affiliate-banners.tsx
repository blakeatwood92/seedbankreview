"use client"

export function AffiliateBanners() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Cannabis Seed Deals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exclusive promotions and discounts from our trusted international partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
          {/* Summer Promotions Banner */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4">
              <h3 className="font-semibold mb-3 text-center">Summer Cannabis Seed Discounts</h3>
              <a
                href="https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://seedsman.postaffiliatepro.com/accounts/default1/aang5ubmn24/0dde5432.gif"
                  alt="Summer Cannabis Seed Discounts!"
                  title="Summer Cannabis Seed Discounts!"
                  className="w-full h-auto rounded-lg"
                />
              </a>
              <img
                style={{ border: 0 }}
                src="https://seedsman.postaffiliatepro.com/scripts/aang5uimn24?a_aid=6898fd6444bda&a_bid=0dde5432"
                width="1"
                height="1"
                alt=""
              />
            </div>
          </div>

          {/* Autoflowering Seeds Banner */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-4">
              <h3 className="font-semibold mb-3 text-center">Autoflowering Cannabis Seeds</h3>
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
          </div>

          {/* Cannabis Super Store Banner */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="p-4">
              <h3 className="font-semibold mb-3 text-center">Cannabis Cultivation Supplies</h3>
              <a
                href="https://www.seedsman.com/us-en/cultivation-supplies/seedsman-nutrients?a_aid=6898fd6444bda&a_bid=ef01b00a"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://seedsman.postaffiliatepro.com/accounts/default1/aang5ubmn24/ef01b00a.jpg"
                  alt="Seedsman - Cannabis Super Store"
                  title="Seedsman - Cannabis Super Store"
                  className="w-full h-auto rounded-lg max-h-64 object-cover"
                />
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
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            * International shipping times may vary. Please check local regulations before ordering.
          </p>
        </div>
      </div>
    </section>
  )
}
