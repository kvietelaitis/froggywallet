import { useNavigate } from "react-router-dom";

export default function ProfitLossTimePickerPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div style={{ maxWidth: 420, margin: "40px auto", textAlign: "center" }}>
        <h1>Pelno/Nuostolio laikotarpio pasirinkimas</h1>
        <p>Šitame puslapyje bus pasirinkamas Pelno/Nuostolių laikotarpis</p>

        <div style={{ alignContent: "center", width: "100%" }}>
          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() =>
              navigate("/investments/profitlosstimepicker/profitlosssummary")
            }
          >
            Eiti į Pelno/Nuostolių puslapį
          </button>
        </div>
      </div>
    </div>
  );
}
