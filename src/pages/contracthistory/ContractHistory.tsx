import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ContractHistory() {

  return (
    <div>
      <div>
        <PageHeader title="CONTRACT HISTORY" />
      </div>
      <div className="bg-white border border-white rounded-lg py-4 px-4 m-2" style={{ borderRadius: '0.5rem' }}>
        <div className="flex justify-between items-center mb-1 py-4 px-10 bg-white">
          <b>Contract List</b>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2 px-10">
          <Input type="" placeholder="Enter Contract ID" className="w-72" />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">Show History</Button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ContractHistory;
