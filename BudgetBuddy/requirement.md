# Budget Buddy UI Prompts

## 1. Layout (Sidebar & Global Navigation)

**Prompt:**

Design a sidebar layout for the “Budget Buddy” budgeting app. The theme should be flat and minimal, with consistent typography, light shadow, rounded corners, and subtle borders. Use icons for navigation items. The sidebar will be fixed on the left with the top logo and user avatar at the bottom. Include the following navigation items:

- Dashboard  
- Transactions  
- Budgets  
- Reports  
- Goals  
- Settings

The page layout should allow for easy access to these navigation items, with the sidebar and content area clearly defined. Ensure uniform spacing and a modern look.

---

## 2. Dashboard (Homepage Overview)

**Prompt:**

Generate the homepage/dashboard for the "Budget Buddy" app with the theme of flat design and minimalistic style. The page should display a financial overview with three primary sections: **Income**, **Expenses**, and **Savings**. Each section should be represented by a card layout, with a balance, percentage change, and a link to view details for each section. Use rounded corners for the cards, a light shadow for the layout, and subtle borders around each card.

**Model to use: `BudgetOverview`**

- Id (string)  
- Category (string) – Income, Expenses, Savings  
- Amount (decimal)  
- PercentageChange (decimal)  
- UserId (string)  

Include a “+ New Transaction” button at the top, which will open a transaction creation dialog. Clicking “View Details” should navigate to the transaction page for more detailed information.

---

## 3. Transactions Page

**Prompt:**

Design the “Transactions” page for the "Budget Buddy" app with a flat design and minimalistic style. At the top, allow the user to filter transactions by date range and category (e.g., income, food, transport). Below, display a table showing transaction details including the date, description, amount, category, and status. Each row should have icons for editing or deleting, and a “View Details” link for more information. Cards or rows should have rounded corners and light shadows for a clean, modern look.

**Model to use: `Transaction`**

- Id (string)  
- Date (DateTime)  
- Description (string)  
- Amount (decimal)  
- Category (string)  
- Status (string) – Pending, Completed, Cancelled  
- UserId (string)  

Use uniform spacing between rows, and ensure each row is clearly distinguishable with a soft border or subtle shadow.

---

## 4. Budgets Page

**Prompt:**

Generate a “Budgets” page for the "Budget Buddy" app, following a flat design with minimal style. Display the user’s current budgets in a card-based layout. Each card should show the budget name, allocated amount, current spending, and remaining amount. Include an overflow menu with options to “Edit,” “Delete,” or “Duplicate.” Each card should have rounded corners, light shadows, and subtle borders. A “+ New Budget” button should be placed at the top of the page, opening a budget creation dialog.

**Model to use: `Budget`**

- Id (string)  
- Name (string)  
- AllocatedAmount (decimal)  
- CurrentSpending (decimal)  
- RemainingAmount (decimal)  
- UserId (string)  

Clicking on a card should allow the user to edit or view the budget details.

---

## 5. Reports Page

**Prompt:**

Design a “Reports” page with a clean and modern flat design. The page should display financial summaries using visual graphs (e.g., bar charts, pie charts) to represent income vs. expenses, savings, and category breakdowns. Allow users to filter reports by date range (weekly, monthly, yearly) and category. The charts should have light shadows, rounded corners, and be placed within a grid layout for clarity. The filters should be placed above the charts, and there should be a “Download Report” button at the top.

**Model to use: `Report`**

- Id (string)  
- DateRange (string) – Weekly, Monthly, Yearly  
- Category (string)  
- TotalIncome (decimal)  
- TotalExpenses (decimal)  
- TotalSavings (decimal)  
- UserId (string)  

The layout should be responsive and designed to handle multiple charts cleanly in a grid layout.

---

## 6. Goals Page

**Prompt:**

Create a “Goals” page for the "Budget Buddy" app with a flat, minimal design. Each goal should be displayed as a card that includes the goal’s name, target amount, current savings, progress bar, and a deadline. Use rounded corners for the cards, light shadows, and subtle borders. At the top, include a “+ New Goal” button that opens a goal creation form. Each card should allow the user to click and view or update details about the specific goal.

**Model to use: `FinancialGoal`**

- Id (string)  
- Name (string)  
- TargetAmount (decimal)  
- CurrentSavings (decimal)  
- Deadline (DateTime)  
- UserId (string)  

The layout should include progress indicators and allow users to update their savings.

---

## 7. Settings Page

**Prompt:**

Design a “Settings” page for the "Budget Buddy" app with a flat and modern design. Include tabs at the top for **Profile**, **Preferences**, and **Notifications**. Each section should be within its own card with a soft shadow.

- **Profile:** Edit name, email, and profile picture.  
- **Preferences:** Set default budget categories, preferred currency, and time zone.  
- **Notifications:** Toggle email alerts for overspending, goal milestones, and new transactions.

**Model to use: `UserSettings`**

- Id (string)  
- UserId (string)  
- DefaultCurrency (string)  
- PreferredCategories (string[])  
- TimeZone (string)  
- NotifyOverspending (bool)  
- NotifyMilestones (bool)  
- NotifyNewTransactions (bool)  

Each card should have save/cancel buttons and allow easy customization. Use consistent spacing and rounded corners for a clean interface.
