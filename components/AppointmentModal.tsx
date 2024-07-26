"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import AppointmentForm from "./forms/AppointmentForm";
import { Appointment } from "@/types/appwrite.types";

function AppointmentModal({
  appointment,
  patientId,
  type,
  userId,
}: {
  appointment?: Appointment;
  description?: string;
  patientId: string;
  title?: string;
  type: "schedule" | "cancel";
  userId: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${type === "schedule" && "text-green-500"}`}
        >
          {type}
        </Button>
      </DialogTrigger>

      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} appointment</DialogTitle>
          <DialogDescription>
            Please fill in the following details to {type} the appointment
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm
          appointment={appointment as Appointment}
          patientId={patientId}
          setOpen={setOpen}
          type={type}
          userId={userId}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AppointmentModal;
