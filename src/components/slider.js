

//SLIDER 1.0
function slider() {
    
    let slideIndex = 0;
    let slideArr = document.getElementsByClassName("slide");
    
    //automatic slidng
    function changeSlide() {
        //setting display = 'none' for all slides
        for (let i = 0; i < slideArr.length; i++) {
            slideArr[i].style.display = "none";
        }
        slideArr[slideIndex].style.display = "initial";
        slideIndex++;
        if (slideIndex>slideArr.length-1) {slideIndex = 0;}
        setTimeout(changeSlide, 5000);
    }
    changeSlide();

    //span buttons funcitonality
    function spanListeners() {
        let leftSpan = document.getElementById("left-span");
        let rightSpan = document.getElementById("right-span");
        //for left-span changeIndex should be -1 & for rigt-span 1
        function switchSlide(changeIndex) {
            slideIndex += changeIndex;
            for (let i = 0; i < slideArr.length; i++) {
            
                slideArr[i].style.display = "none";
            }
            if (slideIndex>slideArr.length-1) {
                slideIndex = 0;
            } else if (slideIndex<0) {
                slideIndex = slideArr.length-1;
            }
            slideArr[slideIndex].style.display = "initial";
        }
        leftSpan.addEventListener("click", function() {switchSlide(-1);});
        rightSpan.addEventListener("click", function() {switchSlide(1);});

    }
    spanListeners();
}

export default slider;