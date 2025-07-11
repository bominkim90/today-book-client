
import { useMutation } from '@tanstack/react-query';
import { logout } from '../api/user';

export function useLogout() {
  return useMutation({
    mutationFn: logout,
  });
}
