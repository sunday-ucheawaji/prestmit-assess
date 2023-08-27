interface Props {
  title: string;
  className: string;
}

function Button({ title, className }: Props) {
  return <button className={className}>{title}</button>;
}

export default Button;
