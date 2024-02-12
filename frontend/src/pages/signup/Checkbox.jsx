const Checkbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text ">Male</span>
          <input
            type="checkbox"
            className="checkbox border-s-slate-900"
            name=""
            id=""
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text ">Female</span>
          <input
            type="checkbox"
            className="checkbox border-s-slate-900"
            name=""
            id=""
          />
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
