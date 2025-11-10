import { useLocation, useNavigate } from 'react-router-dom';

function GroupMemberInfoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from, groupId } = location.state || {};
  
  const handleSave = () => {
    if (from === 'create') {
      // Save and go back to create page or finish creation
      navigate('/groups/create-group');
    } else if (from === 'edit') {
      // Save and go back to edit page
      navigate('/groups/edit-group', { state: { groupId } });
    }
  };
  
  return (
    <div>
      <h1>{from === 'create' ? 'Add Members to New Group' : 'Add Group Members'}</h1>
        <input type="email" placeholder="Member Email" />

        <button style={{ marginTop: '1rem' }} onClick={() => navigate(-1)}>
            Add member
        </button>
    </div>
  );
}

export default GroupMemberInfoPage;