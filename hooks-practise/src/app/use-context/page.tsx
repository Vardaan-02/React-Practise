"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { UserContext, useUserContext } from "./context";

export default function UseContext() {
  const user = {
    imageUrl: "/Vardaan_profile.jpg",
    name: "Vardaan",
    role: "Wannabe Intern",
  };

  return (
    //  Provide a Context Provider
    <UserContext.Provider value={user}>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <Card className="w-80 overflow-hidden rounded-xl shadow-lg bg-white flex justify-center items-center">
          <AvatarWrapper />
          <CardContentWrapper />
        </Card>
      </div>
    </UserContext.Provider>
  );
}

function AvatarWrapper() {
  return (
    <Avatar className="w-24 h-24 border-2 border-gray-300 rounded-full shadow-sm transition-transform duration-300 hover:scale-105">
      <AvatarImageWrapper />
      <AvatarFallbackWrapper />
    </Avatar>
  );
}

function AvatarImageWrapper() {
  {
    /*  use the custom Hook */
  }
  const { imageUrl, name } = useUserContext();

  return <AvatarImage src={imageUrl} alt={name} />;
}

function AvatarFallbackWrapper() {
  const { name } = useUserContext();

  return (
    <AvatarFallback className="bg-gray-200 text-gray-500 rounded-full font-bold text-lg">
      {name
        .split(" ")
        .map((n) => n[0])
        .join("")}
    </AvatarFallback>
  );
}

function CardContentWrapper() {
  return (
    <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
      <NameComponent />
      <RoleComponent />
    </CardContent>
  );
}

function NameComponent() {
  const { name } = useUserContext();

  return <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>;
}

function RoleComponent() {
  const { role } = useUserContext();

  return <p className="text-md text-gray-500">{role}</p>;
}
