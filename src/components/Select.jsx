const Select = ({ arr, onChange, k }) => {
  return (
    <select
      aria-label="Default select example"
      className="SelectBox"
      defaultValue={arr[0]?.board_id}
      onChange={onChange}
    >
      {arr.map((item, index) => (
        <option value={item} key={index}>
          {item?.[k]}
        </option>
      ))}
    </select>
  );
};

export default Select;
