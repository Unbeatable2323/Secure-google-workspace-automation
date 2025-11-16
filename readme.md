# Secure Intake & Role-Based Workflow Automation (Google Workspace)

## 📌 Overview
This project demonstrates a **secure, privacy-focused automation workflow** built using Google Workspace tools.  
It simulates how sensitive intake data (such as psychological evaluations or internal case records) can be handled safely using **role-based access control (RBAC)**, automation, and least-privilege principles.

The system automates intake processing, document creation, secure storage, and controlled access — without exposing data publicly.

---

## 🎯 Problem Statement
Manual handling of sensitive intake data often leads to:
- Accidental data exposure
- Inconsistent file organization
- Over-permissioned access
- Human error in document routing

This project addresses these issues by enforcing **predictable, automated, and secure workflows**.

---

## 🛠️ Technologies Used
- **Google Forms** – Secure data intake
- **Google Sheets** – Structured data storage
- **Google Apps Script** – Automation logic (JavaScript-based)
- **Google Drive & Google Docs** – Document management
- **Google Groups** – Role-based access control
- **Google Drive API (Advanced Service, v2)** – Secure permission handling
- **MailApp** – Automated email notifications

---

## 🔐 Key Features
- Automated intake processing from Google Forms
- Automatic Google Doc generation from submissions
- Isolated case folders per intake
- **Role-based access control (RBAC)** using Google Groups
- Secure permission assignment via Advanced Drive API
- No public or link-based sharing
- Privacy-aware email notifications (no sensitive data in emails)

---

## 🔄 Workflow Overview
1. User submits an intake form
2. Responses are stored in Google Sheets
3. Apps Script:
   - Reads the latest submission
   - Creates a private case folder
   - Generates a formatted Google Doc
   - Moves the document into the case folder
   - Applies role-based permissions using Google Groups
   - Sends notification emails to relevant roles
4. Only authorized users can access the case

---

## 🧠 Security & Design Decisions
- Each case is isolated in its own folder to minimize data exposure
- Google Groups are used instead of individual emails for scalable access management
- Advanced Drive API is used because group permissions are restricted by default
- Emails include only metadata and permission-protected links
- Automation favors reliability and maintainability over complexity

---

## 📂 Project Structure
- Code.gs # Google Apps Script automation logic
- README.md # Project documentation

---

## 📧 Email Notifications
When a new case is created:
- **Admins** receive a notification that a new secure case exists
- **Evaluators** are notified when a case is available for review
- Emails include:
  - Case name
  - Case type
  - Secure folder link
- **No sensitive intake content is included in emails**

---

## 🚀 Future Enhancements
- Automatic case archival after a defined retention period
- Audit logging (who created/accessed cases and when)
- Error handling and retry logic
- Admin dashboard for monitoring workflow health

---

## 👤 Author
**Sandesh Pahari**  
Focused on secure, reliable, and privacy-first workflow automation

---

## ⚠️ Note on Data Privacy
All IDs, email addresses, and links in this repository are placeholders.  
Live systems use private resources and are not shared publicly to maintain confidentiality.
