import { useNavigate } from "react-router-dom";

export default function InvestmentsPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div style={{ maxWidth: 420, margin: "40px auto", textAlign: "center" }}>
        <h1>Investicijų diversifikacija</h1>
        <p>Šiuo metu čia rodoma Investicijų diversifikacija.</p>

        <div style={{ alignContent: "center", width: "100%" }}>
          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/investments/addinvestments")}
          >
            Pridėti investiciją
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/investments/deleteinvestments")}
          >
            Pašalinti investiciją
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/investments/investmentpredictionstime")}
          >
            Investicijų prognozė
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/investments/profitlosstimepicker")}
          >
            Pelno/Nuostolių apibendrinimo langas
          </button>
        </div>
      </div>
    </div>
  );
}