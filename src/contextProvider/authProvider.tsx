"use client";
import { createContext, useState } from "react";

interface IUserContext {
  user: String | null;
  setUser: (user: string) => void;
}
export const AuthContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
