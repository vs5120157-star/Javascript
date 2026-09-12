const heros = ["Ironman", "Thor", "Hulk"]
const dc_heros = ["Batman", "Flash", "Superman"]
heros.push(dc_heros)
console.log(heros);
console.log(heros[3][1]);

const allheros = heros.concat(dc_heros)
console.log(allheros);

const all_new_heros = [...heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Vikas"));

// from ke andar sabi ko array bana dega
console.log(Array.from("Vikas"));

console.log(Array.from({name: "Vikas"})); //intresting array

let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score, score1,score2));