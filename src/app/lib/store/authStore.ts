// store/authStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { loginUser, logoutUser, registerUser } from '@/app/firebase/utils/auth'
import { User, UserCredential } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore' // Add this line
import { db } from '@/app/firebase/firebase_config' // Add this line, adjust the path as necessary

interface AuthState {
  user: User | null
  userId: string | null
  role: string | null
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string, role?: string) => Promise<UserCredential | undefined>
  setUser: (user: User | null, role: string | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      userId: null,
      role: null,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null })
        try {
          const userCredential = await loginUser(email, password)
          const userDocRef = doc(db, 'users', userCredential.user.uid)
          const userDocSnap = await getDoc(userDocRef)
          const role = userDocSnap.exists() ? userDocSnap.data().role : 'user'
          set({ user: userCredential.user, userId: userCredential.user.uid, role, isLoading: false })
          console.log('Login successful:', userCredential.user, role)
        } catch (error: any) {
          console.error('Login error:', error)
          set({ error: error.message, isLoading: false, user: null, role: null })
        }
      },        
      setUser: (user: User | null, role: string | null) => set({ user, role }),
      logout: async () => {
        set({ isLoading: true, error: null })
        try {
          await logoutUser()
          set({ user: null, userId:null, role: null, isLoading: false })
        } catch (error: any) {
          set({ error: error.message, isLoading: false })
        }
      },

      register: async (email: string, password: string, role: string = 'user'): Promise<UserCredential | undefined> => {
        set({ isLoading: true, error: null })
        try {
          const userCredential = await registerUser(email, password)
          set({ user: userCredential.user, userId: userCredential.user.uid, role, isLoading: false })
          console.log('Registration successful:', userCredential.user, role)
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