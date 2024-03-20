const var1 = 1024;
const var2 = '1024';
console.log(var1 == var2); //true
console.log(var1 === var2); //false
console.log(null == undefined); //false
console.log(null == 0 ); //false
console.log(undefined == 0); //false

const id = 'admin';
const res = ( id !== null && id !== undefined ) ? '아이디 입력' : '입력 안 함';
const res2 = (id ?? null) ? '아이디 입력' : '입력 안 함';
console.log(res);
console.log(res2);