export const property_value=new RegExp('^(?!0*[1-9][0-9]{0,4}$)[1-9][0-9]{4,}$');
export const carpet_validation = new RegExp(/^(?!0)\d{3,}$/)
export const pincode_validation = new RegExp('^[1-9]{1}[0-9]{5}$');
export const name_validation = new RegExp('^[a-zA-Z]*$');
export const email_validation = new RegExp(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
export const mobile_validation = new RegExp(/^[6-9][0-9]{9}$/);
export const password_validation = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)
export const fullName_validation = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
export const pancard_validation= new RegExp('^[A-Z]{5}[0-9]{4}[A-Z]{1}');
export const flatNo_validation= new RegExp(/^[1-9]\d*([/-]?[A-Za-z0-9]([/-]?[\da-zA-Z]+)?)?$/);
export const street_validation=new RegExp(/^[A-Za-z0-9\s,-]+$/)


//This regex pattern enforces a password policy that includes at least one lowercase letter, one uppercase letter, one digit, one special character, and a minimum length of 8 characters.
