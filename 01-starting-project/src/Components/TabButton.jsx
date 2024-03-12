

export default function TabButton({children ,isSelect, ...props}) {
  console.log('TabButton Conponente está sendo executado');
  return (
    <li>
      <button className={isSelect ? 'active' :undefined} {...props}>{children}</button>
    </li>
  );
}
