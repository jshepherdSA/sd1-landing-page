import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows: [string, string, string, string][] = [
  ["Addresses Overflows", "Yes", "Yes", "Yes"],
  ["Eliminates Bullittsville Pump Station", "No", "Yes", "No"],
  ["Maximizes Gravity", "No", "Yes", "Partial"],
  ["Additional Pumping / Storage Infrastructure", "More", "Less", "More"],
  ["Gravity Service Flexibility", "Limited", "Greatest", "Less"],
  ["Construction Complexity", "Lower", "Higher", "Lower"],
];

/** Styled after the report's comparison tables: solid blue header, bold blue row labels. */
export function OptionsTable() {
  return (
    <Table className="min-w-[520px] border-collapse text-[15px]">
      <TableCaption className="sr-only">
        Options summary comparing alternatives A3, B2 and B3
      </TableCaption>
      <TableHeader>
        <TableRow className="border-0 hover:bg-transparent">
          <TableHead className="h-auto bg-sd1-blue px-4 py-3 font-semibold text-white">
            Evaluation Area
          </TableHead>
          {["A3", "B2", "B3"].map((opt) => (
            <TableHead
              key={opt}
              className={
                opt === "B2"
                  ? "h-auto border-x-4 border-t-4 border-sd1-leaf bg-sd1-navy px-4 py-3 text-center font-semibold text-white"
                  : "h-auto bg-sd1-blue px-4 py-3 text-center font-semibold text-white"
              }
            >
              {opt}
              {opt === "B2" && (
                <span className="block text-xs font-medium text-sd1-leaf">
                  Selected
                </span>
              )}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(([label, a3, b2, b3], i) => (
          <TableRow
            key={label}
            className="border-b border-white hover:bg-transparent"
          >
            <TableHead
              scope="row"
              className="h-auto bg-sd1-report px-4 py-3 font-semibold whitespace-normal text-sd1-blue"
            >
              {label}
            </TableHead>
            <TableCell className="bg-sd1-mist px-4 py-3 text-center">
              {a3}
            </TableCell>
            <TableCell
              className={`border-x-4 border-sd1-leaf bg-white px-4 py-3 text-center font-semibold text-sd1-navy ${i === rows.length - 1 ? "border-b-4" : ""}`}
            >
              {b2}
            </TableCell>
            <TableCell className="bg-sd1-mist px-4 py-3 text-center">
              {b3}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
