
export function random(min, max) {
 min = 0;
 max = 700;
 let result = Math.floor((Math.random() * (max - min + 1)) + min)
return result;
}