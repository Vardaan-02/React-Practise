import { createContext, useContext } from "react";

export type User = {
  imageUrl: string;
  name: string;
  role: string;
};

// Creating a new Context
export const UserContext = createContext<User | undefined>(undefined);

// Create Custom Hook for useContext for handling undefined state
export function useUserContext() {
  const user = useContext(UserContext);

  if (user === undefined)
    throw new Error(
      "useUserContext must be used in within a userContext Provider"
    );

  return user;
}
