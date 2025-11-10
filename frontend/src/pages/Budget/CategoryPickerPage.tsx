import { useNavigate } from "react-router-dom";

function BudgetCreationPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Category Page</h1>

            <button style={{marginTop: '1rem'}} onClick={() => navigate('../create-category')}>
                Create category
            </button>

            <button style={{marginTop: '1rem'}} onClick={() => navigate('../create-category')}>
                Existing category
            </button>

        </div>
    );
}

export default BudgetCreationPage;