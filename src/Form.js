import React from "react";
import "./App.css";
import FormValidate from "./FormValidate";

const Form = () => {
  const {
    values,
    nameError,
    phoneError,
    emailError,
    bioError,
    dobError,
    genderError,
    disabled,
    handleChange,
    handleSubmit,
    resetForm,
  } = FormValidate();

  return (
    <>
      <div className="form" >
        <h1>Form Validation</h1>

        <label>Name</label>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        {nameError && <span>{nameError}</span>}

        <label>phone</label>
        <input
          name="phone"
          type="number"
          placeholder="phone"
          value={values.phone}
          onChange={handleChange}
        />
        {phoneError && <span>{phoneError}</span>}

        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {emailError && <span>{emailError}</span>}

        <label>Bio</label>
        <input
          name="bio"
          placeholder="Bio"
          value={values.bio}
          onChange={handleChange}
        />
        {bioError && <span>{bioError}</span>}

        <label>DOB</label>
        <input
          type="date"
          name="DOB"
          placeholder="DOB"
          value={values.DOB}
          onChange={handleChange}
        />
        {dobError && <span>{dobError}</span>}

        <label htmlFor="gender">gender</label>
        <select name="gender" value={values.gender} onChange={handleChange}>
          <option value=""></option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        {genderError && <span>{genderError}</span>}

        <div className="buttons">
          <button
            className="resetButton"
            type="submit"
            onClick={resetForm}
            style={{ background: "red" }}
          >
            Reset
          </button>

          <button
            className="submitButton"
            type="submit"
            onClick={handleSubmit}
            disabled={disabled}
            style={{ background: disabled ? "#ccc" : "rgb(2, 2, 110)" }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
