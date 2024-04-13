import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Verify from "@/components/Verify"

function VerifyPage() {

    return (
        <div>
          <div>
            <PageHeader title="VERIFY" />
          </div>
          <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
            <div className="flex justify-between items-center mb-1 py-4 px-10 bg-white">
              <b>Verify</b>
              <div>
                <Verify buttonName="Verify" title="Verify" />
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      );
}

export default VerifyPage;
