//import { useRouter } from 'vue-router'
import router from '../router'

import { firebaseApp } from '@/composables/useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseUseAuth } from '@vueuse/firebase'

const auth = getAuth(firebaseApp);

const { isAuthenticated, user } = firebaseUseAuth(auth)

export const useAuth = () => {
    const router = useRouter()

    const login = async (username, password) => {
        await signInWithEmailAndPassword(auth, username, password)
        return isAuthenticated.value
    }

    const logout = async () => {
        await signOut(auth)
        router.push({ name: 'Home' })
    }
    
    return { isAuthenticated, user, login, logout }

}
