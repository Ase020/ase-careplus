import AdminStatCard from "@/components/AdminStatCard";
import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function AdminPage() {
  const appointments = await getRecentAppointmentList();

  console.log(appointments);
async function AdminPage() {
  const appointments = await getRecentAppointmentList();

  console.log(appointments);
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={162}
            height={32}
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semilbold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <AdminStatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <AdminStatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <AdminStatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
}

export default AdminPage;
