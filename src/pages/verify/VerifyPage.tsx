import PageHeader from "@/components/PageHeader";
import Verify from "@/layouts/Verify"

function VerifyPage() {

    return (
        <div>
          <div>
            <PageHeader title="VERIFY" />
          </div>
          <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
            <div className="flex justify-between items-center mb-1 py-4 px-10 bg-white">
              <b className="text-lg px-2">Verify</b>
              <div className="px-10">
                <Verify buttonName="Verify" title="Verify" />
              </div>
            </div>
          </div>
        </div>
      );
}

export default VerifyPage;
