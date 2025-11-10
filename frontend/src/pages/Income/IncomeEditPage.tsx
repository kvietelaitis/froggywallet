import { useNavigate } from "react-router-dom";

function IncomeEditPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Income Edit Page</h1>

            <div>
                <label>
                    Total Amount:
                    <input type="number" />
                </label>
            </div>

            <button style={{ marginTop: '1rem' }} onClick={() => navigate(-1)}>
                Create Income
            </button>

            <button onClick={() => navigate(-1)}>
                Delete income
            </button>
        </div>
    );
}

export default IncomeEditPage;