import { useRouter } from 'vue-router';
import { firebaseApp } from './useFirebase';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuth as firebaseUseAuth } from '@vueuse/firebase';

const auth = getAuth(firebaseApp);
const { isAuthenticated, user } = firebaseUseAuth(auth);

export const useAuth = () => {
  const router = useRouter();

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { isAuthenticated, login, logout, user };
};