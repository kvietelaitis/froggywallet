import { useNavigate } from "react-router-dom";

function GroupCreationPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Group Creation Page</h1>

            <button onClick={() => navigate('/groups/add-members', { state: { from: 'create' } })}>
                Add members
            </button>
        </div>
    );
}

export default GroupCreationPage;