

export default function TabButton({children , onSelect }) {
  console.log('TabButton Conponente está sendo executado');
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
