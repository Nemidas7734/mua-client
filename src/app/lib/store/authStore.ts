// store/authStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { loginUser, logoutUser, registerUser } from '@/app/firebase/utils/auth'
import { User, UserCredential } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore' // Add this line
import { db } from '@/app/firebase/firebase_config' // Add this line, adjust the path as necessary

interface AuthState {
  user: User | null
  userId: string
  role: string | null
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>
  register: (email: string, password: string, role?: string) => Promise<UserCredential | undefined>
  setUser: (user: User | null, role: string | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      userId: "",
      role: null,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const userCredential = await loginUser(email, password);
          const userDocRef = doc(db, 'users', userCredential.user.uid);
          const userDocSnap = await getDoc(userDocRef);

          let role = 'user'; // Default role
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            role = userData.role || 'user'; // Use 'user' as fallback if role is not set
          }

          set({ user: userCredential.user, userId: userCredential.user.uid, role, isLoading: false });
          document.cookie = "isLoggedIn=true; path=/; max-age=86400"; // expires in 1 day
          return userCredential.user; // Return the user object
        } catch (error: any) {
          console.error('Login error:', error);
          set({ error: error.message, isLoading: false, user: null, role: null });
          throw error; // Rethrow the error to be handled by the caller
        }
      },
      setUser: (user: User | null, role: string | null) => set({ user, role }),
      logout: async () => {
        set({ isLoading: true, error: null })
        try {
          await logoutUser()
          set({ user: null, userId: "", role: null, isLoading: false })
          document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

          // Clear localStorage
          localStorage.removeItem('auth-storage')

          // Force a page reload to ensure all state is cleared
          window.location.href = '/';
        } catch (error: any) {
          set({ error: error.message, isLoading: false })
        }
      },

      register: async (email: string, password: string, role: string = 'user'): Promise<UserCredential | undefined> => {
        set({ isLoading: true, error: null })
        try {
          const userCredential = await registerUser(email, password)
          set({ user: userCredential.user, userId: userCredential.user.uid, role, isLoading: false })
          // console.log('Registration successful:', userCredential.user, role)
          return userCredential;
        } catch (error: any) {
          console.error('Registration error:', error)
          set({ error: error.message, isLoading: false, user: null, role: null })
          throw error;
        }
      },

    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)