//LIVE SEARCH


class Search {
    
    constructor() { 
        this.resultsDiv = document.getElementById("search-overlay__results");
        this.openButton = document.getElementById("search-trigger");
        this.closeButton = document.getElementById("search-overlay-btn-close");
        this.searchOverlay = document.getElementById("search-overlay");
        this.searchField = document.getElementById("search-term");
        this.events();
        this.isOverlayOpen = false;
        this.isSpinnerVisible = false;
        this.previousValue;
        this.typingTimer;
    }

    //events
    events() {
        this.openButton.addEventListener("click", this.openOverlay.bind(this));
        this.closeButton.addEventListener("click", this.closeOverlay.bind(this));
        document.addEventListener("keydown", this.keyPressDispatcher.bind(this));
        this.searchField.addEventListener("keyup", this.typingLogic.bind(this));
    }

    //methods
    typingLogic() {
        if (this.searchField.value !== this.previousValue) {
            clearTimeout(this.typingTimer);
            if (this.searchField.value) {
                if (!this.isSpinnerVisible) {
                    this.resultsDiv.innerHTML = "<div class='spinner-loader'></div>";
                    this.isSpinnerVisible = true;  
                }
                this.typingTimer = setTimeout(this.getResults.bind(this), 800); 
            } else {
                this.resultsDiv.innerHTML = "";
                this.isSpinnerVisible = false;
            }
            
        }
        this.previousValue = this.searchField.value;
    }
    getResults() {
        jQuery.getJSON("http://virtualtravel.local/wp-json/wp/v2/posts?search=" + this.searchField.value, posts => {
            this.resultsDiv.innerHTML = `
                <h2 class="search-overlay__section-title">Genneral Information</h2>
                <ul class="link-list min-list">
                    ${posts.map(post => {
                        return `<li><a href='${post.link}'>${post.title.rendered}</a></li>`;
                    }).join(``)}    
                </ul>
            `;
        });

        this.resultsDiv.innerHTML = "paragraph";
        this.isSpinnerVisible = false;
    }
    keyPressDispatcher(e) {
        if (e.keyCode === 27 && this.isOverlayOpen ) {
           this.closeOverlay();
       }
    }

    openOverlay() {
        event.preventDefault();
        document.getElementsByTagName("body")[0].classList.add("body-no-scroll");
        this.searchOverlay.classList.add("search-overlay--active");
        this.isOverlayOpen = true;
    }

    closeOverlay() {
        document.getElementsByTagName("body")[0].classList.remove("body-no-scroll");
        this.searchOverlay.classList.remove("search-overlay--active");
        this.isOverlayOpen = false;
    }
}

export default Search;

