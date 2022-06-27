
const Alert = ({ type = 'danger', text = 'alert goes here' }) => {
  return <div className={`alert alert-${type}`}>{text}</div>
}

export default Alert