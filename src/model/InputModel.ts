import React from "react";

export interface InputModelProps<T> {
  id: string;
  name: string;
  value: T;
  type: string;
  label: string;
  changeInput: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}
