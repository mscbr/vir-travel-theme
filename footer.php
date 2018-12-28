
        
        <footer id="footer">
        <div id='sitemap'>
    <?php
        wp_nav_menu(array(
            'theme_location' => 'sitemapMenu'
        ));
    ?>
    </div>
                <div id="button-up">
                    <a href="#background1">
                            &#8593; <br />
                            GO UP
                    </a>
                </div>
                <div id="foot-note">
                    <h5>developed by mscbr</h5>
                </div>
        </footer>

        <div id="search-overlay" class="search-overlay">
            <div class="search-overlay__top">
                <div class="container">
                    <button id="search-overlay-btn" class="search-overlay-btn" ><img src=" <?php bloginfo('template_directory'); ?>/style/icons/iconfinder_icon-ios7-search-strong_211817.svg" class="search-overlay__icon"></button>
                    <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term" />
                    <i id="search-overlay-btn-close" class="search-overlay__icon">X</i>
                </div>
            </div>
        </div>

        <?php wp_footer(); ?>
    </body>
</html>