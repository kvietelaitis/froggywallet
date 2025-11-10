import { useNavigate } from "react-router-dom";

function GroupCreationPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Group Creation Page</h1>

            <input type="text" placeholder="Group Name" />

            <input type="text" placeholder="Group Description" />

            <button style={{ marginTop: '1rem' }} onClick={() => navigate('/groups/add-members', { state: { from: 'create' } })}>
                Add members
            </button>

            <button style={{ marginTop: '1rem' }} onClick={() => navigate(-1)}>
                Create Group
            </button>
        </div>
    );
}

export default GroupCreationPage;