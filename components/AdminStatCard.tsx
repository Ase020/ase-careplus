import React from "react";

interface AdminStatsProps {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
}

function AdminStatCard({ type, count = 0, label, icon }: AdminStatsProps) {
  return <div>AdminStatCard</div>;
}

export default AdminStatCard;
