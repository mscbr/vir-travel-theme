//LIVE SEARCH

class Search {
    
    constructor() { 
        this.openButton = document.getElementById("search-trigger");
        this.closeButton = document.getElementById("search-overlay-btn-close");
        this.searchOverlay = document.getElementById("search-overlay");
        this.events();
    }

    //events
    events() {
        this.openButton.addEventListener("click", this.openOverlay.bind(this));
        this.closeButton.addEventListener("click", this.closeOverlay.bind(this));
    }

    //methods
    openOverlay() {
        event.preventDefault();
        document.getElementsByTagName("body")[0].classList.add("body-no-scroll");
        this.searchOverlay.classList.add("search-overlay--active");
    }

    closeOverlay() {
        document.getElementsByTagName("body")[0].classList.remove("body-no-scroll");
        this.searchOverlay.classList.remove("search-overlay--active");
    }
}

export default Search;

