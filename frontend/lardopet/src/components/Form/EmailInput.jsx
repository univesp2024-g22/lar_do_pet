import { useField } from "formik";

/* eslint-disable react/prop-types */
export const EmailInput = ({ label, error, ...props }) => {
  const {field} = useField(props)
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'.5rem'}}>
      <label>{label}</label>
      <input type="email" {...field} {...props} style={{width: '16rem'}}/>
      {error && <span style={{color:'red'}}>{error}</span>}
    </div>
  );
};
