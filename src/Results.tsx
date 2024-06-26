import "./Results.css";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { formattedData } from "./lib/utils";

export default function Results() {
  return (
    <div className="results-container mx-auto p-4 lg:w-full">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-semibold text-gray-800">Patient Data</h2>
        </div>
        <div>
          <DataTable columns={columns} data={formattedData} />
        </div>
      </div>
    </div>
  );
}
