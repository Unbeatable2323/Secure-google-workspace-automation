function createSecureCaseWithAccess() {

  const SHEET_ID = "YOUR_SHEET_ID";
  const PARENT_FOLDER_ID = "YOUR_PARENT_FOLDER_ID";

  const ADMIN_GROUP = "admins@domain.com";
  const EVALUATOR_GROUP = "evaluators@domain.com";

  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  const data = sheet.getDataRange().getValues();

  const headers = data[0];
  const lastRow = data[data.length - 1];

  const fullName = lastRow[1];
  const caseType = lastRow[3];

  const parentFolder = DriveApp.getFolderById(PARENT_FOLDER_ID);
  const caseFolder = parentFolder.createFolder("Case - " + fullName);

  const doc = DocumentApp.create("Secure Intake Case");
  const body = doc.getBody();

  for (let i = 0; i < headers.length; i++) {
    body.appendParagraph(headers[i] + ": " + lastRow[i]);
  }

  const file = DriveApp.getFileById(doc.getId());
  caseFolder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);

  // Role-based access
  Drive.Permissions.insert(
    { role: "writer", type: "group", value: ADMIN_GROUP },
    caseFolder.getId()
  );

  Drive.Permissions.insert(
    { role: "reader", type: "group", value: EVALUATOR_GROUP },
    caseFolder.getId()
  );

  // Email notifications (no sensitive data)
  MailApp.sendEmail(
    ADMIN_GROUP,
    "New Secure Case Created",
    "A new case has been created.\n\nCase Name: " + fullName +
    "\nCase Type: " + caseType +
    "\n\nAccess folder:\n" + caseFolder.getUrl()
  );
}
