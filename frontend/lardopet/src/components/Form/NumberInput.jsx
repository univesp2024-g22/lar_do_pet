import { useField } from "formik";

/* eslint-disable react/prop-types */
export const NumberInput = ({ label, ...props }) => {
  const {field} = useField(props)
  return (
    <>
      <label>{label}</label>
      <input type="number" {...field} {...props} />
    </>
  );
};
