

export default function TabButton({children , onSelect ,isSelect}) {
  console.log('TabButton Conponente está sendo executado');
  return (
    <li>
      <button className={isSelect ? 'active' :undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
