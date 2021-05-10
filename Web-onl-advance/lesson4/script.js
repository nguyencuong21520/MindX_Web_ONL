let dom = document.getElementById("input_fruit")

dom.onsubmit = (e)=>{
    e.preventDefault();
    
    let fruitNameInput = dom.fruitName.value


    console.log(fruitNameInput );
}


// let fruit = ["cam", "táo"]
// let cam = {
//     name: "cam",
//     color:"orange",
//     vi: "ngot"
// }

// console.log(cam.vi );

// let fruitData = [{name: "",url=""},{},{}]

let fruitData = [
    {
        name: "cam",
        url: "https://img.thuocbietduoc.com.vn/images/news/2015/12/qua-cam.jpg"
    },
    {
        name: "dau",
        url:""
    }
]