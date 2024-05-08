/* eslint-disable react/prop-types */
export const Button = ({children, ...props}) => {
  return (
    <button  {...props}>{children}</button>
  )
}