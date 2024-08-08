export default function CheckBox({ children, checked, onChange }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="blind"
        onChange={onChange}
        checked={checked}
      />
      {children}
    </label>
  );
}
