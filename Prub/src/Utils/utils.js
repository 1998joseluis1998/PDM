export default class Utils{
  static isValidateField=(value)=>{
    return value.trim().length>0;
  }

  static isValidEmail =(email)=>{
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
