# Centralized Wallet System
---

## Project Structure

```
centralWalletSystem/
│
├── app.js                # Application
├── db.json               # Sample/mock database (not used T_T)
├── config/               # App config (e.g., status codes)
├── controllers/          # Handles business logic per route
├── models/               # Auth credential values
├── routes/               # Express route handlers
├── services/             # Logic for login encryption
├── utils/                # Shared helper functions
├── validators/           # Joi validation schemas
├── .gitignore            # Git exclusions
├── package.json          # Project metadata and dependencies
└── package-lock.json     # Version-locked dependency tree
```
---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Raineecorn/centralWalletSystem.git
cd centralWalletSystem
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
node app.js
```

---

## API Endpoints

### POST `/auth/login`

Authenticate user.

**Request Body:**
```json
{
  "username": "testUser",
  "password": "testingpass123"
}
```

**Success Response:**
```json
{
    "message": "Login successful",
    "links": [
        {
            "name": "balance",
            "url": "/balance"
        },
        {
            "name": "Cash-in",
            "url": "/cashin"
        },
        {
            "name": "debit",
            "url": "/debit"
        }
    ]
}
```

**Error Response:**
```json
{ "error": "Invalid credentials" }
```

---

### GET `/balance/`

Precautions for getting balance of a certain user. Requires login.
```
{
    "message": "To perform a balance check, use GET /balance/username"
}
```


### GET `/balance/:userID`

Returns current balance. Requires login.

**Response:**
```json
{
    "Status": {
        "user": {
            "name": "testUser",
            "balance": 0
        }
    }
}
```

---
### GET `/cashin/`

Precautions for cash-in, must be for user. Requires login.
```json
{
    "message": "To perform a cashin, use POST /cashin/username with body: { \"amount\": number }"
}
```

### POST `/cashin/:userID`

Adds funds to the wallet. Requires login.

**Request Body:**
```json
{
  "amount" : 1000
}
```

**Response:**
```json
{
    "message": "Cash-in successful!",
    "name": "testUser",
    "balance": 1000
}
```

---
### GET `/debit/`

Precautions for debit/withdraw, must be for user. Requires login.
```json
{
    "message": "To perform a debit, use POST /debit/username with body: { \"amount\": number }"
}
```

### POST `/debit/:userID`

Withdraws funds from the wallet. Requires login.

**Request Body:**
```json
{ "amount": 500 }
```

**Response:**
```json
{
    "message": "debit successful!",
    "amount": 500,
    "name": "testUser",
    "balance": 500
}
```

---

## Error Handling

- **Validation Errors:**
```json
{ "error": "\"amount\" must be a number"}
```

- **Unauthorized Access:**
```json
{ "error" : "Unauthorized", "message": 'Please log in first using POST /auth/login with body: { "username": "user_name", "password": "user_password" }', }
```

