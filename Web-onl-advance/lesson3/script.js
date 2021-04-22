// Chữa bài tập về nhà
// in ra các số chẵn từ 58 - 78
// for(let i = 58 ; i<=78; i= i+2){
//     console.log(i);
// }

// for(let i = 58 ; i<=78; i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }

// --------------lesson3---------------------

// function inTheMorning(b,a) {
//   console.log(a);
//   console.log(b);

// }

// inTheMorning("Hello","bye")

// function tinhTong (a,b){
//     let c = a+ b
//     return c
// }


// function show(a){
//     for(let i = 0; i<=a; i++){
//         console.log(i);
//     }
// }


// function kiểm tra xem số đó có chia hết cho 3 không
// function ktTraChia(i){
//     if(i%3 == 0){
//         console.log("co");

//     }else{
//         console.log("khong");
//     }
// }


//Array
// CRUD => C: create , R: read, u: update, d : delete
//create
let fruit = ["xoai","tao","cam","quat"]
// console.log(fruit);
// //read
// console.log(fruit[2]);
// //update
// fruit[3] = "chuoi"
// console.log(fruit);
// fruit[1] = "mit"
// console.log(fruit);

// //delete
// fruit.pop()
// fruit.pop()
// console.log(fruit);

function showFruit(){
    for(let i =0; i<4; i++){
        console.log(fruit[i]);
    }
}
showFruit()






