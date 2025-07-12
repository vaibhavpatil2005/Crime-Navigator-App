# 🛡️ Crime Navigator – AI-Powered Crime Analysis and Safe City Prediction System  

**Crime Navigator** is a powerful full-stack web application that leverages machine learning and interactive visualizations to predict and analyze urban crime trends. Designed for public safety, the platform processes real-time and historical crime data from NCRB and empowers users, law enforcement, and policymakers to make data-driven decisions for a safer tomorrow.

## [App Dashboard] 

<img width="1888" height="937" alt="image" src="https://github.com/user-attachments/assets/d20c001e-ba65-4927-b040-78e5054785f5" />

 ## [ML Prediction]

![WhatsApp Image 2025-07-12 at 19 52 36_cdc57cb7](https://github.com/user-attachments/assets/4aa28abb-0ddd-4d96-90e3-baaea7df660f)

##  [Smart Dashboard - Crime Analysis]

<img width="1237" height="955" alt="image" src="https://github.com/user-attachments/assets/a375f9ed-392a-42d2-88e5-a476f6e4c4e3" />


---

## 🎯 Key Features

### 🔐 1️⃣ Secure User Authentication
- Role-based access with JWT
- AES-encrypted analytics and PDF exports
- HTTP-only cookies for session security

### 📊 2️⃣ Crime Data Visualization
- Interactive charts using Chart.js and D3.js
- Bar, Line, Radar, and Heatmaps for exploring trends
- City-wise, year-wise, and crime-type filters

### 🔮 3️⃣ ML-Based Crime Prediction
- Trained on 5.8M+ NCRB records from 19 Indian cities
- Random Forest Regressor (MAE: 2.49 | R²: 0.93)
- Predicts crime rate, case count, and severity label

### 📰 4️⃣ Real-Time Crime News Integration
- Live crime-related headlines via NewsAPI
- Region/category-based filtering
- Clickable news cards with source and timestamps

### 🧠 5️⃣ Smart Dashboard Experience
- Responsive frontend using React.js
- Admin, Analyst, and Public User modes
- Historical analysis + predictive overlays

---

## 🛠️ Tech Stack

### 🔹 Backend
- **Node.js + Express.js** (REST APIs)
- **Flask** (ML predictions with scikit-learn)
- **MongoDB** (crime records & user data)

### 🔹 Frontend
- **React.js** (v18)
- **Chart.js + D3.js**
- **Bootstrap**, **Axios**

### 🔹 ML/AI
- **Scikit-learn**
- **Pandas**, **NumPy**

---

## 🧱 System Architecture
```bash
/CrimeNavigator
├── /client
│   ├── /components
│   └── /pages
├── /server
│   ├── /routes
│   ├── /middleware
│   └── /controllers
├── /ml_model
│   ├── model.pkl
│   ├── app.py (Flask)
│   └── predict_pipeline.py
├── /public
│   ├── /assets
├── /data
│   └── NCRB_Crime_Records.csv
├── package.json
├── requirements.txt
└── README.md
```

---
## 📄 Installation and Setup

```bash
###  1. Clone the Repository
git clone https://github.com/avadheshgithub/Crime_Navigator-App.git
cd Crime_Navigator-App

``` 
```bash
### 2. Install Frontend Dependencies
cd client
npm install
```
``` bash
### 3. Install Backend Dependencies
cd ../server
npm install
```
```bash
### 4. Setup Python Environment for ML
cd ../ml_model
pip install -r requirements.txt
```
```bash
### 5. Run the Application

# Start Flask (ML Backend)
python app.py

# In a new terminal, start Node.js Server
cd ../server
npm start

# In another terminal, start React Frontend
cd ../client
npm start
```
---
