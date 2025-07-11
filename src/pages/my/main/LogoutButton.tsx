import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../../hooks/useLogout';

export default function LogoutButton() {
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();

  async function handleLogout() {
    logout(undefined, {
      onSuccess: () => {
        navigate('/');
      },
      onError: (error) => {
        console.error('로그아웃 실패:', error);
      },
    });
  }

  return (
    <button className="w-full h-[48px] bg-mainGray text-textSecondary rounded-sm" onClick={handleLogout}>
      로그아웃
    </button>
  );
}
