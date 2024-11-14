//wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    //get all necessary elements for the slider
    var nextbuttons = document.querySelector('.next'), //next button element
        prevbuttons = document.querySelector('.prev'), //previous button element
        sliders = document.querySelector('.sliders'), //slider container element
        list = document.querySelector('.list'); //list of slider items

    //set up the click event for the next button
    nextbuttons.onclick = function() {
        showSlider('next'); //show the next slider item
    };

    //set up the click event for the previous button
    prevbuttons.onclick = function() {
        showSlider('prev'); //show the previous slider item
    };

    //function to show the next or previous slider item
    function showSlider(type) {
        let sliderItemsDom = list.querySelectorAll('.sliders .list .item'); //get all slider items
        if(type === 'next') {
            list.appendChild(sliderItemsDom[0]); //move the first item to the end of the list
            sliders.classList.add('next'); //add 'next' class for CSS animation
        } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1]); //move the last item to the beginning of the list
            sliders.classList.add('prev'); //add 'prev' class for CSS animation
        }
    }

    //make slider images clickable
    document.querySelectorAll('.sliders .list .item').forEach(sliderItem => {
        sliderItem.addEventListener('click', () => {
            showClickedSlider(sliderItem); //show the clicked slider item
        });
    });

    //function to show the clicked slider item
    function showClickedSlider(clickedItem) {
        let sliderItemsDom = list.querySelectorAll('.sliders .list .item'); //get all slider items
        let currentIndex = Array.from(sliderItemsDom).indexOf(clickedItem); //find the index of the clicked item

        //move the clicked item to the first position
        for (let i = 0; i < currentIndex; i++) {
            list.appendChild(sliderItemsDom[0]); //move each item to the end of the list
        }

        sliders.classList.add('clicked'); //add clicked class for CSS animation
    }

    //set up click events for slider item buttons to show the popup
    document.querySelectorAll('.sliders .list .item').forEach(sliderItem => {
        sliderItem.querySelector('.buttons button').addEventListener('click', (e) => {
            e.stopPropagation(); //prevent triggering click event on the slider item
            //show the popup with background image
            const popup = document.querySelector('.popup');
            popup.style.backgroundImage = sliderItem.style.backgroundImage; //set the popup background image
            popup.classList.add('show'); //show the popup
        });
    });

    //close popup functionality
    document.querySelector('.popup-close').addEventListener('click', () => {
        document.querySelector('.popup').classList.remove('show'); //hide the popup
        console.log("Popup closed");
    });

    //set up click events for color buttons
    document.querySelectorAll('.clrbutton').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); //prevent triggering other events
            const color = e.target.getAttribute('data-colour'); //get the color data from the button
            document.querySelectorAll('.content .title, .content .des').forEach(element => {
                element.style.color = color; //change the color of the content elements
            });
        });
    });

    //set up click events for font change buttons
    document.querySelectorAll('.fontbutton').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); //prevent triggering other events
            const font = e.target.getAttribute('data-font'); //get the font data from the button
            document.querySelectorAll('body *:not(header *)').forEach(element => {
                element.style.fontFamily = font; //change the font family of the content elements
            });
        });
    });
});
