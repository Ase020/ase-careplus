import Image from "next/image";
import React from "react";

import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

async function NewAppointment({ params: { userId } }: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10"
          />

          <AppointmentForm
            patientId={patient?.$id}
            type="create"
            userId={userId}
          />

          <p className="copyright mt-10 py-12">© {new Date().getFullYear()}</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        alt="appointment"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </main>
  );
}

export default NewAppointment;
