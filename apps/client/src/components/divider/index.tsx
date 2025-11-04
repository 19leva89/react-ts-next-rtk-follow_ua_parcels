import './style.css'

type Props = {
  className: string
}

export const Divider: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>
}
