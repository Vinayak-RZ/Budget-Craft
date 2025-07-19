<div align="center">
    <img width="350" height="350" alt="ChatGPT Image Jul 19, 2025, 09_16_06 PM" src="https://github.com/user-attachments/assets/575a2fa4-0984-4178-9ce3-a6e5b89edc16" />
</div>
<p></p>
<p></p>
<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![EJS](https://img.shields.io/badge/EJS-8A2BE2?style=for-the-badge&logo=ejs&logoColor=white)](https://ejs.co)
[![Hugging Face](https://img.shields.io/badge/HuggingFace-FFD21F?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**A Basic Finance Tracker built as part of the MDG JS Assignment**

*A full-stack personal finance manager that helps users track income, expenses, and get AI-generated financial advice. Designed with modularity and security in mind, and powered by Hugging Face for natural language-based insights.*

</div>

---

## Demo Screenshots

**Signup Page**  
![image](https://github.com/user-attachments/assets/cde41c8f-663f-4f40-9560-96a16ecc52f3)

**Login Page**  
![image](https://github.com/user-attachments/assets/dc6e6fcb-e136-4b17-8a50-7783236445ea)

**Home Dashboard**  
![image](https://github.com/user-attachments/assets/8f7abddd-4bae-402d-8e4c-c48c3c949800)

**AI Prediction Page**  
![image](https://github.com/user-attachments/assets/d7e17805-6b54-40f6-aa4b-b7607393094c)

---

## Table of Contents

<details>
<summary>Project Overview</summary>

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [AI Integration](#ai-integration)

</details>

<details>
<summary>Folder Structure</summary>

- [File Summary](#file-summary)
- [Backend & Routes](#backend--routes)
- [Frontend & Styling](#frontend--styling)

</details>

<details>
<summary>Setup & Installation</summary>

- [Environment Setup](#environment-setup)
- [Installation Steps](#installation-steps)

</details>

<details>
<summary>Features</summary>

- [Authentication](#authentication)
- [Transaction Handling](#transaction-handling)
- [AI-Powered Advice](#ai-powered-advice)
- [Data Visualization](#data-visualization)

</details>

<details>
<summary>Future Roadmap</summary>

- [Upcoming Features](#upcoming-features)

</details>

<details>
<summary>License & Credits</summary>

- [License](#license)
- [Acknowledgments](#acknowledgments)

</details>

---

## Overview

This is a basic personal finance tracker designed for the MDG JS assignment. It allows users to:

- Register/login securely
- Track income and expenses
- Visualize data in summaries
- Get intelligent financial suggestions from an AI model

All data is stored locally via MongoDB, and the app supports secure JWT-based sessions.

---

## Tech Stack

- **Frontend:** HTML, CSS, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI:** Hugging Face Transformers
- **Authentication:** JWT-based token system

---

## AI Integration

Using Hugging Face APIs, the app can:

- Analyze spending trends
- Provide user-friendly financial tips
- Offer tailored suggestions on saving

---

## File Summary

| Path | Description |
|------|-------------|
| `src/ai/llmcall.js` | Hugging Face integration for budget suggestions |
| `src/controllers/` | Auth and transaction controller logic |
| `src/routes/` | Express.js endpoints |
| `src/models/User.cjs` | MongoDB schema for users and their data |
| `src/public/` | Static stylesheets and client UI |
| `src/server.cjs` | Main Express app entry point |

---

## Installation

### Environment Setup

Create a `.env` file in the root:

```env
MONGO_URL=your_mongodb_connection_string
HUGGINGFACE_API_KEY=your_api_key
JWT_SECRET=your_jwt_secret
```
#Run the App

```
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker
npm install
node src/server.cjs
```

## Authentication

- JWT-secured sign up and login  
- Passwords hashed via bcrypt  
- Auth middleware for secure routes  

## Transaction Handling

- Add/edit income or expense transactions  
- Automatically updates totals and categories  
- Basic budget breakdown shown on home  

## AI-Powered Advice

- Input your current budget/spending  
- Get text-based suggestions from LLMs  
- Simple and natural interface for predictions  

## Data Visualization

- Summary stats on homepage  
- Income vs. expense bar graphs  
- Balance & savings displayed  

## Upcoming Features

- CSV export for all data  
- Email reminders & spending alerts  
- Blockchain-backed encrypted storage  
- ZK-Proof validation of transactions  

## License

This project is under the MIT License. See the [LICENSE](LICENSE) file.

## Acknowledgments

- MDG IIT Roorkee  
- Hugging Face  
- MongoDB & Mongoose  
- Open Source community  

---

> Made with ♥ for the MDG JS Assignment


