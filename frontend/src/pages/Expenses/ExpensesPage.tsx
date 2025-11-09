import { useNavigate } from "react-router-dom";

export default function ExpensesPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div style={{ maxWidth: 420, margin: "40px auto", textAlign: "center" }}>
        <h1>Išlaidų peržiūra</h1>
        <p>Šiuo metu čia rodoma išlaidų peržiūra.</p>

        <div style={{ alignContent: "center", width: "100%" }}>
          
          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/expenses/addexpenses")}
          >
            Pridėti išlaidas
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/expenses/addperiodicalexpenses")}
          >
            Pridėti pasikartojančias išlaidas
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/expenses/compareexpenses")}
          >
            Palyginti išlaidas
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/expenses/deleteexpenses")}
          >
            Pašalinti išlaidas
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/expenses/editexpenses")}
          >
            Redaguoti išlaidas
          </button>

          <button
            style={{
              margin: "10px",
              height: "70px",
              width: "400px",
              maxWidth: "400px",
            }}
            onClick={() => navigate("/expenses/groupexpenses")}
          >
            Grupuoti išlaidas
          </button>
        </div>
      </div>
    </div>
  );
}
