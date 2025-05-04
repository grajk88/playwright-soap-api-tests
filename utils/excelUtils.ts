import path from 'path';
import * as XLSX from 'xlsx';

/**
 * Reads values from a specified column in the Excel file.
 * @param columnName The header of the column (e.g., "intB")
 * @param sheetName Optional: sheet name to read from (defaults to first)
 * @returns Array of values in the column
 */
export function getColumnValuesFromExcel(columnName: string, sheetName?: string): any[] {
  const filePath = path.join(__dirname, '..', 'data', 'data.xlsx');
  const workbook = XLSX.readFile(filePath);
  const worksheet = sheetName
    ? workbook.Sheets[sheetName]
    : workbook.Sheets[workbook.SheetNames[0]];

  const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(worksheet);

  return jsonData
    .map(row => row[columnName])
    .filter(value => value !== undefined && value !== null);
}
