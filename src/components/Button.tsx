type ButtonProps = {
  title: string
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, isDisabled }) => {
  return <button className={`btn btn-primary btn-lg ${isDisabled ? 'btn-disabled' : ''}`}>{title}</button>
}

export default Button