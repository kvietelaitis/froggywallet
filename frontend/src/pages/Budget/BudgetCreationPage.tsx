import { useNavigate } from "react-router-dom";

function BudgetCreationPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Budget Creation Page</h1>

            <div>
                <label>
                    Budget Name:
                    <input type="text" />
                </label>
            </div>

            <div>
                <label>
                    Total Amount:
                    <input type="number" />
                </label>
            </div>

            <div>
                <label>
                    Start Date:
                    <input type="date" />
                </label>
            </div>

            <div>
                <label>
                    End Date:
                    <input type="date" />
                </label>
            </div>

            <button onClick={() => navigate('../add-category')}>
                Add category
            </button>

            <button style={{ marginTop: '1rem' }} onClick={() => navigate(-1)}>
                Create Budget
            </button>
        </div>
    );
}

export default BudgetCreationPage;