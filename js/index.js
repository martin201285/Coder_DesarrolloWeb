function scrollUp(pxScreen){
    window.addEventListener('scroll', () => {
        var scroll  = document.documentElement.scrollTop;
        var upButton = document.getElementById('upButton');

        if(scroll > pxScreen){
            upButton.style.display = 'block';
        } else {
            upButton.style.display = 'none';
        }
    })
}

scrollUp(100);