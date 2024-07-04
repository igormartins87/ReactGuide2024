
export default function Input({ label, invalid, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <Input {...props} />
    </p>
  );
}
