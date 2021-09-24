function activateFunc(event) {
    var newActiveClass = "#" + (event.id) + "";
    document.querySelector("#bottomNav .activated").classList.remove("activated");
    document.querySelector(newActiveClass).classList.add("activated");
}


function partMenuFunc(e){
    var pedMenu = ".pedMenu #" + (e.id) + "";
    var pedItems = "#pedItems #" + (e.id) + "";
    console.log(pedMenu + pedItems);


    document.querySelector(".pedMenu .black_gray").classList.remove("black_gray");
    document.querySelector(pedMenu).classList.add("black_gray");

    document.querySelector("#pedItems .activated_part").classList.remove("activated_part");
    document.querySelector(pedItems).classList.add("activated_part");

}