import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { Button } from "./components/ui/button";
import { formatQuality } from "./lib/utils";
import { Event, Quality } from "./data";

export interface Result {
  patientId: string; // the client specific identifier
  scannedAt: Date; // the time at which the sample was digitally scanned
  score: number; // the score of the sample
  event: Event; // the event that the sample was taken at
  sampleQuality: Quality; // the quality of the sample
  dateOfBirth: string; // the date of birth of the patient
}

export interface FormattedResult extends Result {
  formattedScannedAt: string;
  formattedDateOfBirth: string;
}

export const columns: ColumnDef<FormattedResult>[] = [
  {
    accessorKey: "scannedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Scanned At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "event",
    header: "Event",
  },
  {
    accessorKey: "sampleQuality",
    header: "Quality",
    cell: ({ row }) => (
      <div className="flex items-center">
        <span
          className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
            row.original.sampleQuality === "high"
              ? "bg-green-200 text-green-800"
              : formatQuality(row.original.sampleQuality) === "med"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {row.original.sampleQuality}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
  },
];
