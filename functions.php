<?php

    function load_stylesheets() {
        wp_enqueue_style('main_style', get_template_directory_uri() . '/style/css/main-style.min.css');
        wp_enqueue_style('header_style', get_template_directory_uri() . '/style/css/header-style.min.css');
        wp_enqueue_style('footer_style', get_template_directory_uri() . '/style/css/footer-style.min.css');
        wp_enqueue_style('single_style', get_template_directory_uri() . '/style/css/single-style.min.css');
    }

    function load_scripts() {
        //wp_enqueue_scripts('jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
        wp_enqueue_script('main', get_theme_file_uri('/index.js '), NULL, microtime(), true);
    }

    function   blog_features() {
        //fix for heaving 'head-title' set as page title
        add_theme_support('title-tag');

        //fix for custom menus
        register_nav_menu('sitemapMenu', 'Sitemap Menu');
        register_nav_menu('featuredMenu', 'Featured Menu');
    }

    //fix for amount of post per archive.php page
    function wpsites_query( $query ) {
        if ( $query->is_archive() && $query->is_main_query() && !is_admin() ) {
                $query->set( 'posts_per_page', 6 );
            }
        }
    
    add_action( 'pre_get_posts', 'wpsites_query' );

    add_action('wp_enqueue_scripts', 'load_stylesheets');
    add_action('wp_enqueue_scripts', 'load_scripts');
    add_action('after_setup_theme', 'blog_features');

    add_theme_support( 'post-thumbnails' );
?>