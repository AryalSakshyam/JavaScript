const img_array=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg']
// array lenght
const array_lenght=img_array.length
let i=0
let set=setInterval(sliderFunction,5000) 
// sliderFUnction()-> function
// 5000-> 5sec

function sliderFunction(){
    i++
    i=i%array_lenght
    //0%5=0
    //1%5=1
    //4%4=4
    //5%5=0
    // attribute ko value change garda attribute naam nai rakhnu parcha
    document.getElementById('image').src=`images/${img_array[i]}`
}
function next(){
    i++
    i=i%array_lenght
    document.getElementById('image').src=`images/${img_array[i]}`


}
function prev(){
    i--
    if(i<0){
        i=array_lenght-1
    }
    document.getElementById('image').src=`images/${img_array[i]}`

    
}
function stop(){
    clearInterval(set)// set garya time lai clear garcha

}
function start(){
    set=setInterval(sliderFunction,5000) 
}



// Assingment background color change garney
// color ko naam array hunu paryo 