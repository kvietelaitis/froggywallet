import { useNavigate } from "react-router-dom";

function GroupEditPage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Group Edit Page</h1>

            <button onClick={() => navigate('/groups/add-members', { state: { from: 'edit', groupId: 1 } })}>
                Add members
            </button>
        </div>
    );
}

export default GroupEditPage;