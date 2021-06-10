import { useState, useEffect } from "react";

const FormValidate = () => {
  const [values, setValues] = useState({
    name: "",
    phone: 0,
    email: "",
    bio: "",
    DOB: "",
    gender: "",
  });

  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [bioError, setBioError] = useState("");
  const [dobError, setDobError] = useState("");

  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    var specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      setNameError("name is required");
    } else if (values.name.length > 20) {
      setNameError("name should not more than 20 character");
    } else if (values.name.match(specialChars)) {
      setNameError("name should not contain any special character");
    } else {
      setNameError("");
    }

    if (!values.phone) {
      setPhoneError("");
    } else if (values.phone.length !== 10) {
      setPhoneError("phone number should have 10 digit");
    } else {
      setPhoneError("");
    }

    if (!values.email) {
      setEmailError("email required");
    } else if (values.email.match(emailPattern)) {
      setEmailError("");
    } else {
      setEmailError("invalid email");
    }

    if (!values.bio) {
      setBioError("");
    } else if (values.bio.split(" ").length > 60) {
      setBioError("Bio Should not contain more than 60 words");
    } else {
      setBioError("");
    }

    if (!values.DOB) {
      setDobError("DOB required");
    } else {
      setDobError("");
    }

    if (!values.gender) {
      setGenderError("gender required");
    } else {
      setGenderError("");
    }
  }, [values]);

  useEffect(() => {
    if (
      nameError ||
      phoneError ||
      emailError ||
      bioError ||
      dobError ||
      genderError
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    bioError,
    disabled,
    dobError,
    emailError,
    genderError,
    nameError,
    phoneError,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(values));
    resetForm();
  };

  const resetForm = () => {
    setValues({
      name: "",
      phone: 0,
      email: "",
      bio: "",
      DOB: "",
      gender: "",
    });
  };
  return {
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
  };
};

export default FormValidate;
