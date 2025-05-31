import React from "react";
import { LabeledInputProps } from "@/interfaces";

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  id,
  placeholder,
}) => {
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium mb-1">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34967c]"
    />
  </div>;
};
