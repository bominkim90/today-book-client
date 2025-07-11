import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../../hooks/useLogout';
import ConfirmModal from '../../../components/modals/ConfirmModal';
import { useState } from 'react';

export default function LogoutButton() {
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

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
    <div>
    <button className="w-full h-[48px] bg-mainGray text-textSecondary rounded-sm" onClick={() => setShowConfirmModal(true)}>
      로그아웃
    </button>
    {showConfirmModal && 
    <ConfirmModal 
      title="로그아웃"
      message="로그아웃 하시겠습니까?"
      onConfirm={handleLogout}
      onCancel={() => setShowConfirmModal(false)}
    />}
    </div>
  );
}
