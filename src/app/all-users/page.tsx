"use client";

import { useEffect, useState } from "react";

export default function AllUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow flex flex-col items-center">
            <img src={user.imageUrl} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
            <div className="font-semibold">{user.fullName || user.username}</div>
            <div className="text-gray-500">{user.primaryEmailAddress?.emailAddress}</div>
            <div className="text-gray-400 text-xs">ID: {user.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}