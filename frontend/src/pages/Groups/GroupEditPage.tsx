import { useNavigate } from "react-router-dom";

function GroupEditPage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Group Edit Page</h1>

            <input type="text" placeholder="Group Name" />

            <input type="text" placeholder="Group Description" />

            <button style={{ marginTop: '1rem' }} onClick={() => navigate('/groups/add-members', { state: { from: 'edit', groupId: 1 } })}>
                Add members
            </button>

            <button style={{ marginTop: '1rem' }} onClick={() => navigate(-1)}>
                Save Changes
            </button>
        </div>
    );
}

export default GroupEditPage;