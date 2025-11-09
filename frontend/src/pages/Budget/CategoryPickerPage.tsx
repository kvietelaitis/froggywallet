import { useNavigate } from "react-router-dom";

function BudgetCreationPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Category Picker Page</h1>

            <button onClick={() => navigate('../create-category')}>
                Create category
            </button>

        </div>
    );
}

export default BudgetCreationPage;