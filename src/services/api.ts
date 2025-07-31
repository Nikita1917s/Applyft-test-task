import type { User } from "@/types/User";
import { JSON_URL } from "@services/contants";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(`${JSON_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const fetchUserById = async (id: number): Promise<User> => {
  const res = await fetch(`${JSON_URL}/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user details");
  return res.json();
};
