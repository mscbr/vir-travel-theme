<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <?php wp_enqueue_script('jquery'); ?>
        <?php wp_head(); ?>

        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <nav id="navbar">
            <div id="navlogo">
                <a href="<?php echo get_home_url(); ?>">vir-travel.com</a>
            </div>
            <div id="navlinks">
                <a href="javascript:history.back()" class="nav-link">&#8592; BACK</a>
            </div>
        </nav>
        <div id="header">
                <h1>virtual travel</h1>
                <h5>travel blog</h5>
        </div>
