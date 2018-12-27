
        
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
        <?php wp_footer(); ?>
    </body>
</html>