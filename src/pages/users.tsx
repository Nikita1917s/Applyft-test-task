import { useState, useEffect } from "react";
import { fetchUsers } from "@services/api";
import type { User } from "@/types/User";
import { Spinner } from "@components/UI/Spinner";
import { Users } from "@components/Users";
import { toast } from "react-toastify";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => {
        toast.error(`Failed to load users: ${err.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;

  return <Users users={users} />;
};
