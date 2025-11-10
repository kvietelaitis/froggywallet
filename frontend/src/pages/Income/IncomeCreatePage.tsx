import { useNavigate } from "react-router-dom";

function IncomeCreationPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Income Creation Page</h1>
            </div>

            <div>
                <label>
                    Total Amount:
                    <input type="number" />
                </label>
            </div>

            <button style={{ marginTop: '1rem' }} onClick={() => navigate(-1)}>
                Create Income
            </button>
        </div>
    );
}

export default IncomeCreationPage;