import Image from "next/image";
import React from "react";

import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

async function Register({ params: { userId } }: SearchParamProps) {
  const user = await getUser(userId!);

  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container flex-1 flex-col py-10 max-w-[860px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10
          "
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© {new Date().getFullYear()}</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[390px]"
      />
    </main>
  );
}

export default Register;
