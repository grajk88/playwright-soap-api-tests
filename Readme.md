# Playwright SOAP API Testing Framework

This project demonstrates how to perform SOAP-based API testing using Playwright, Faker for data generation, and Excel as a data source.

## 🧩 Features

- Sends SOAP requests to a public calculator service (`http://www.dneonline.com/calculator.asmx`)
- Uses external XML template for request bodies
- Reads test data (`intB`) from an Excel file
- Dynamically generates `intA` using Faker
- Parses XML response using fast-xml-parser and validates `<AddResult>`

## 📁 Project Structure

```
/project-root
├── data/
│   └── data.xlsx                 # Excel data source (intB values)
├── templates/
│   └── addRequestTemplate.xml   # External SOAP request template with placeholders
├── utils/
│   └── excelUtils.ts            # Reusable Excel column reader
└── tests/
    └── soapAdd.test.ts          # Main test script using Playwright
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install @playwright/test @faker-js/faker fast-xml-parser xlsx
npx playwright install
```

### 2. Sample Excel File (data.xlsx)

Create a file at `data/data.xlsx` with the following format:

| intB |
|------|
| 10   |
| 25   |
| 40   |

### 3. SOAP Request Template (addRequestTemplate.xml)

Create a file at `templates/addRequestTemplate.xml` with the following content:

```xml
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:xsd="http://www.w3.org/2001/XMLSchema"
               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Add xmlns="http://tempuri.org/">
      <intA>{{intA}}</intA>
      <intB>{{intB}}</intB>
    </Add>
  </soap:Body>
</soap:Envelope>
```

### 4. Run the Test

```bash
npx playwright test tests/soapAdd.test.ts
```

## 📦 Author

Created with ❤️ using Playwright, Faker, and Excel integration.