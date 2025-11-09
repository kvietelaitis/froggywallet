import { Routes, Route, Navigate } from 'react-router-dom';
import GroupsPage from './GroupsPage';
import GroupCreationPage from './GroupCreationPage';
import GroupEditPage from './GroupEditPage';
import GroupMemberInfoPage from './GroupMemberInfoPage';

function GroupRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GroupsPage />} />
      <Route path="create-group" element={<GroupCreationPage />} />
      <Route path="edit-group" element={<GroupEditPage />} />
      <Route path="/add-members" element={<GroupMemberInfoPage />} />
      
      {/* Catch-all: redirect invalid routes */}
      <Route path="*" element={<Navigate to="/groups" replace />} />
    </Routes>
  );
}

export default GroupRoutes;