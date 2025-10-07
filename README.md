# Ecotrack_Webapp

Welcome to the official repository! This repo contains frontend and backend code in a simple structure and follows our branching and development workflow.

---

> **Note:**  
> Git does not track empty folders.  
> We included `.gitkeep` files as placeholders to keep empty directories in the repository.

---

## Branching Strategy

We will use a simple Git Flow to manage our codebase:

| Branch        | Purpose                             |
|---------------|-----------------------------------|
| `main`        | For Production-ready code only      |
| `dev`         | Our actual development branch         |
| `feature/*`   | New features (branched from `dev`) |
| `personal/*`  | You can have your personal branch(branched from `dev`)  |


---

## Developer Workflow

### API Overview

Our backend provides endpoints to calculate and track carbon emissions for trips within Nigeria.

#### Key Features

- Calculate CO₂ emissions for single or multi-stop trips.
- Uses real distances from OpenRouteService (ORS) with fallback logic:
  - Haversine + Nominatim if ORS fails.
  - A secondary fallback ensures distance calculation always succeeds.
- Verified emission factors (DEFRA, adjusted for Nigeria).
- Smart unit conversion: grams (g), kilograms (kg), or tonnes (t) automatically chosen for readability.
- Trip history stored in MongoDB with optional filters and pagination.

| Endpoint       | Method | Description |
|----------------|--------|-------------|
| `/calculate`   | POST   | Calculate and save a new trip. Accepts locations array and transport mode. |
| `/history`     | GET    | Fetch past trips. Supports query filters (`transportMode`, `startDate`, `endDate`) and pagination (`page`, `limit`). |

**Example Request – Calculate Trip**
```json
POST /calculate
Multi-stop trip
{
  "locations": ["Lagos, Nigeria", "Ibadan, Nigeria", "Abuja, Nigeria"],
  "transportMode": "car"
}

Single trip
{
  "from": "Lagos",
  "to": "Ibadan",
  "meansOfTransport": "car"
}

Example Response
{
  "transportMode": "car",
  "trips": [
    {
      "from": "Lagos, Nigeria",
      "to": "Ibadan, Nigeria",
      "co2": 6.93,
      "unit": "kgCO2e",
      "distance_km": 116.73,
      "distance_source": "Haversine",
      "emission_source": "DEFRA Nigeria adapted"
    },
    {
      "from": "Ibadan, Nigeria",
      "to": "Abuja, Nigeria",
      "co2": 25.99,
      "unit": "kgCO2e",
      "distance_km": 437.51,
      "distance_source": "Haversine",
      "emission_source": "DEFRA Nigeria adapted"
    }
  ],
  "emissions": 32.92,
  "unit": "kgCO2e",
  "distance_source": "Haversine",
  "emission_source": "DEFRA Nigeria adapted"
}


##### STEP 1. Clone the Repository

```bash
git clone https://github.com/your-org/Ecotrack_Webapp.git
cd Ecotrack_Webapp


