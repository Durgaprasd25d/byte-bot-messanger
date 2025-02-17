const Checkbox = ({ onCheckboxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender ==='male'? "selected":""}`}>
          <span className="label-text ">Male</span>
          <input
            type="checkbox"
            className="checkbox border-s-slate-900"
            checked={selectGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender ==='female'? "selected":""}`}>
          <span className="label-text ">Female</span>
          <input
            type="checkbox"
            className="checkbox border-s-slate-900"
            checked={selectGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
