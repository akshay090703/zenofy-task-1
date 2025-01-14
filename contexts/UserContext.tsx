"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "@/lib/axios"
import { toast } from 'sonner'
import { useRouter } from "next/navigation";

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  signIn: (credentials: { email: string; password: string }) => Promise<void>
  signOut: () => void
  loading: boolean
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const checkAuth = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }

  useEffect(() => {
    checkAuth()
  }, []);

  const signIn = async ({ email, password }: { email: string, password: string }) => {
    try {
      setLoading(true)
      const res = await axios.post("/auth/login", { email, password })

      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify({
          id: "12345",
          fullName: "Akshay Kumar Pandey",
          email: email,
          role: "user",
        }));

        toast.success("User logged in successfully!")
        router.push('/')
      }
    } catch (error) {
      console.error(error)
      toast.error("There was an error logging in")
    } finally {
      setLoading(false)
      checkAuth()
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      const res = await axios.get("/auth/logout")

      if (res.status === 200) {
        localStorage.removeItem("user")

        toast.success("User logged out successfully!")
        router.push('/auth/signin');
      }
    } catch (error) {
      console.error(error)
      toast.error("There was an error logging out")
    } finally {
      setLoading(false)
      checkAuth()
    }
  }

  return (
    <UserContext.Provider value={{ user, signIn, signOut, loading }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
