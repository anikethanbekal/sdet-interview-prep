---
title: Manual Testing Basics
tags:
  - manual-testing
  - performance-testing
  - test-strategy
  - defect-management
  - bug-reporting
  - test-design
  - qa
  - sdet
  - unit-test
  - integration-test
  - end-to-end-test
categories:
  - Manual Testing
  - Test Design
  - QA Processes
  - SDET Topics
difficulty: 
  - easy
background: bg-[#d1fae5]  # Light green for easy
badge_color: text-green-800 bg-green-100
topic: manual-testing
date: 2025-06-28
author: Anikethan Bekal
intro: |
   This cheat sheet provides an overview of manual testing concepts, techniques, and best practices.
   Manual testing is a foundational skill for QA engineers and is often emphasized in interviews to assess understanding of testing methodologies and practices.
---

# 1. 📘 Manual Testing Basics

Manual testing involves manually verifying software for defects by simulating end-user behavior. It requires analytical skills, domain expertise, and proficiency in test execution to ensure the software meets functionality and quality standards.
This is only quick, concepts for more detailed notes refer `tech-essentials-guide` section

---

## 1.1. 🧠 What is Manual Testing?

Manual testing is the process of evaluating software manually without relying on automation tools. Testers design and execute test cases, observe system behavior, and document any defects or inconsistencies. This approach is essential for uncovering usability issues, edge cases, and scenarios that automated tests may overlook.

---

### 1.1.1. 🔑 Key Benefits of Manual Testing

- **Human Insight**: Allows testers to identify usability and design flaws.
- **Flexibility**: Adaptable to ad-hoc and exploratory testing scenarios.
- **Comprehensive Coverage**: Helps uncover issues in areas where automation is impractical.

---

### 1.1.2. 🚩 When to Use Manual Testing

- For exploratory, usability, and ad-hoc testing.
- When testing new features or prototypes.
- In scenarios where automation setup is time-consuming or infeasible.

---

### 1.1.3. 📌 Pro Tip

Manual testing is often the first step in the testing lifecycle, providing valuable insights that inform the design of automated test cases.

---

## 1.2. ✅ Key Concepts

- **📝 Test Case**: A set of actions executed to verify a particular feature or functionality.
- **📄 Test Plan**: A document that outlines the strategy, scope, and timeline for testing.
- **🐞 Bug Report**: A report logged in a defect management system describing a found issue.
- **🔍 Exploratory Testing**: Ad-hoc testing without predefined cases, focusing on discovery.
- **🔥 Smoke Testing**: Initial testing to check basic functionality.
- **🔄 Regression Testing**: Verifying previously working functionality after code changes.

---

## 1.3. 🔄 Manual vs Automation Testing

| Feature               | Manual Testing                        | Automation Testing                     |
|-----------------------|----------------------------------------|----------------------------------------|
| 🧑‍💻 Execution         | Performed by humans                    | Performed by tools/scripts             |
| ⏱️ Speed               | Slower                                 | Faster                                 |
| 💰 Cost               | Higher over time                       | Lower for repetitive tasks             |
| ✅ Accuracy            | Prone to human error                   | High if scripts are reliable           |
| 🏆 Best for            | Exploratory, usability, ad-hoc tests   | Repetitive, regression, performance    |

---

## 1.4. 🔄 SDLC

Software Development Life Cycle:
1. 🌊 Waterfall Model
2. 🔄 Spiral Model
3. ✅ V-Model
4. 🚀 Agile Model

---

## 1.5. 🧪 Testing Methods

1. ⚪ White Box Testing
2. ⚫ Black Box Testing
3. ⚪⚫ Grey Box Testing

---

## 1.6. 🧰 Testing Types

1. 🔥 Smoke / Sanity Testing
2. ✅ Functional Testing
3. 🔗 Integration Testing
4. 🌐 End-to-End Testing
5. 🔄 Regression Testing
6. 👁️ Usability Testing
7. 🔒 Security Testing
8. 🅰️ Alpha Testing
9. 🅱️ Beta Testing
10. 🌍 Crowd Testing
11. 🔍 Exploratory Testing
12. 🚀 Performance Testing
   - 💪 Stress Testing
   - 📈 Load Testing

---

## 1.7. 🛠️ Common Tools in Manual Testing

- **📋 Test Case Management**: TestLink, TestRail, Zephyr
- **🐞 Defect Tracking**: Jira, Bugzilla, MantisBT
- **📚 Documentation**: Confluence, Google Docs

---

## 1.8. 🧩 Test Case Design Techniques

1. 🧮 Equivalence Partitioning
2. 📏 Boundary Value Analysis
3. 🔄 State Transition Testing
4. 📖 Use Case Testing

---

## 1.9. 🔄 Software Testing Life Cycle

1. 📜 Requirement Analysis
2. 📝 Test Planning
3. 🧪 Test Case Development
4. 🛠️ Test Environment Setup
5. 🚀 Test Execution
6. ✅ Test Closure

---

## 1.10. 📌 Best Practices

- 🧐 Understand the requirements before testing
- ✍️ Write clear, concise test cases
- 🔁 Reproduce bugs consistently
- 🔗 Maintain traceability between test cases and requirements
- 🤝 Collaborate with developers and product owners

---

## 1.11. 💡 Tips for SDETs and QA Engineers

- 📝 Learn to document test cases for both manual and automation workflows
- 🧠 Manual testing builds intuition for edge cases that automation may miss
- 🚀 It's often the first step before automating complex test cases

---

## 1.12. 🏷 Tags

`manual-testing`, `test-design`, `qa`, `defect-management`, `test-strategy`

---