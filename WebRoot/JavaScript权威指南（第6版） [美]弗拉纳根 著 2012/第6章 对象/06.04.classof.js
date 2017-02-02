/**
 * 获取目标对象的类。
 * 
 * @param o
 *          目标对象。
 * @returns 目标对象的类。
 */
function classof(o){

	if (o === null)
		return "Null";
	if (o === undefined)
		return "Undefined";
	/* 需要调用默认的toString方法，该方法返回值[object class] */
	return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classof(null));//Null
console.log(classof(undefined));//Undefined
console.log(classof(1));//Number
console.log(classof(''));//String
console.log(classof(false));//Boolean
console.log(classof({}));//Object
console.log(classof([]));//Array
console.log(classof(/./));//Regex
console.log(classof(new Date()));//Date
console.log(classof(window));//Window，有些浏览器返回global

function f(){

}

console.log(classof(new f()));//Object
console.log(classof(f));//Function
