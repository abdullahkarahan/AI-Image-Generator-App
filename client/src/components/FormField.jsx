import React from 'react';

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-black">
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#252422] py-1 px-2 text-[#fffcf2]"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-[#ccc5b9] border border-[#adb5bd] text-[#252422] text-sm rounded-sm focus:ring-[#403d39]
         focus:border-[#403d39] outline-none block w-full p-3 "
      />
    </div>
  );
};

export default FormField;
