const validationRules = {
  required: (val: string | number) =>
    val !== null && val !== undefined && val !== "",
  phone: (phone: number) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone));
  },
  email: (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  zipcode: (zipcode: string) => {
    const re = /^[0-9]{2}-[0-9]{3}/;
    return re.test(String(zipcode));
  },
};
export const inputsList = [
  {
    label: "name",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "Name is required",
      },
    ],
  },
  {
    label: "surname",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "Surname is required",
      },
    ],
  },
  {
    label: "phone number",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "Phone number is required",
      },
      {
        rule: validationRules.phone,
        message: "Phone number is invalid",
      },
    ],
  },
  {
    label: "email",
    inputValidationRules: [
      { rule: validationRules.required, message: "Email is required" },
      { rule: validationRules.email, message: "Email is invalid" },
    ],
  },
  {
    label: "date of birth",
    type: "date",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "Date of birth is required",
      },
    ],
  },
  {
    label: "adress",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "Adress is required",
      },
    ],
  },
  {
    label: "city",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "City is required",
      },
    ],
  },
  {
    label: "state",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "State is required",
      },
    ],
  },
  {
    label: "zip code",
    inputValidationRules: [
      {
        rule: validationRules.required,
        message: "Zip code is required",
      },
      {
        rule: validationRules.zipcode,
        message: "Zip code is invalid",
      },
    ],
  },
];
