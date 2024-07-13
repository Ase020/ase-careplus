"use client";

import { E164Number } from "libphonenumber-js/core";
import React from "react";
import { Control } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Image from "next/image";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomProps {
  control: Control<any>;
  children?: React.ReactNode;
  dateFormat?: string;
  disabled?: boolean;
  fieldType: FormFieldType;
  iconAlt?: string;
  iconSrc?: string;
  label?: string;
  name: string;
  placeholder?: string;
  renderSkeleton?: (field: any) => React.ReactNode;
  showTimeSelect?: boolean;
}

export default function CustomFormField(props: CustomProps) {
  const {
    control,
    children,
    dateFormat,
    disabled,
    fieldType,
    iconAlt,
    iconSrc,
    label,
    name,
    placeholder,
    renderSkeleton,
    showTimeSelect,
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    control,
    children,
    dateFormat,
    disabled,
    fieldType,
    iconAlt,
    iconSrc,
    label,
    name,
    placeholder,
    renderSkeleton,
    showTimeSelect,
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            {...field}
            className="input-phone"
            defaultCountry="KE"
            international
            onChange={field.onChange}
            placeholder={placeholder}
            value={field.value as E164Number | undefined}
            withCountryCallingCode
          />
        </FormControl>
      );

    default:
      break;
  }
};
