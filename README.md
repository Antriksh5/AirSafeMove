# AirSafe Move - AI-Powered Migration Advisory System

🌐 **Live Demo:** [https://airsafemove.vercel.app/](https://airsafemove.vercel.app/)

An AI-powered web application that helps users decide which Indian city to migrate to for better air quality, improved health outcomes, and long-term life expectancy gains.

## 🚀 Features

- **ML-Powered Recommendations**: City suitability prediction, AQI improvement forecasting, health impact estimation
- **Real Data**: 26 Indian cities with actual AQI, rent, job market, and healthcare data
- **AI Advisory**: ChatGroq (llama-3.3-70b-versatile) for personalized, explainable recommendations
- **Beautiful UI**: Pixel-perfect implementation with modern design

## 📁 Project Structure

```
airsafe-move/
├── src/                      # Next.js frontend
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── wizard/           # Multi-step form
│   │   └── results/          # Recommendations page
│   ├── components/           # React components
│   └── lib/                  # Utilities & API
├── backend/                  # FastAPI backend
│   ├── app/
│   │   ├── main.py           # FastAPI entry
│   │   ├── routers/          # API endpoints
│   │   ├── services/         # Business logic
│   │   ├── models/           # Pydantic schemas
│   │   └── ml/               # ML prediction service
│   └── requirements.txt
├── render.yaml               # Render deployment config
└── README.md
```

## 🛠️ Setup

### Frontend (Next.js)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Backend (FastAPI)

```bash
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Create .env file
copy .env.example .env
# Add your GROQ_API_KEY

# Run development server
uvicorn app.main:app --reload --port 8000
```

## 🔑 Environment Variables

### Backend (.env)
```
GROQ_API_KEY=your_groq_api_key_here
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 🧠 ML Models

1. **City Suitability Predictor**: Scores cities 0-100 based on AQI, distance, rent, job match
2. **AQI Improvement Predictor**: Calculates % improvement when migrating
3. **Health Impact Estimator**: Predicts respiratory risk reduction and life expectancy gain
4. **Migration Readiness Score**: Assesses overall readiness based on multiple factors

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/cities/` | GET | List all cities with AQI data |
| `/api/cities/names` | GET | Get city names for dropdowns |
| `/api/cities/professions` | GET | Get profession list |
| `/api/cities/description/{city}` | GET | Get AI-generated city description |
| `/api/recommendations/` | POST | Get top 5 city recommendations |
| `/api/advisory/` | POST | Get AI-generated migration advisory |
| `/api/report/generate` | POST | Generate migration report |

## 📊 Data Sources

- **AQI Data**: CPCB / Kaggle (5-year historical)
- **Cost of Living**: Numbeo / Kaggle
- **Health Research**: WHO / Harvard studies on PM2.5 exposure
- **Job Market**: NSSO / LinkedIn Insights

## 🚢 Deployment

### Frontend (Vercel)
- **Live URL**: [https://airsafemove.vercel.app/](https://airsafemove.vercel.app/)
- Auto-deploys from `main` branch
- Set `NEXT_PUBLIC_API_URL` environment variable to backend URL

### Backend (Render)
- **API URL**: [https://air-safe-move-12pf.onrender.com](https://air-safe-move-12pf.onrender.com)
- Auto-deploys from `main` branch using `render.yaml`
- Set `GROQ_API_KEY` environment variable

## 📝 License

MIT License - Built for hackathon demonstration.
