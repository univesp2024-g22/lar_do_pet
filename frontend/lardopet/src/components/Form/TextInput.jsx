import {useField} from 'formik'

/* eslint-disable react/prop-types */
export const TextInput = ({ label, ...props }) => {
  const {field} = useField(props)
  return (
    <>
      <label>{label}</label>
      <input type="text" {...field} {...props} />
    </>
  );
};
