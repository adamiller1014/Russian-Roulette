import UserStatsPage from '../../components/UserStatsPage';
import UserStatsProvider from '../../providers/UserStatsProvider';

const UserStats = () => {
  return (
    <UserStatsProvider>
      <UserStatsPage />
    </UserStatsProvider>
  );
};

export default UserStats;
