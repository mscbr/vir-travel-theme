<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <?php wp_enqueue_script('jquery'); ?>
    <?php wp_head(); ?>
    
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
   
</head>
<body <?php body_class(); ?>>
    <div id="background1"></div>
    <nav id="navbar">
        <div id="navlogo">
            <a href="#welcome">vir-travel.com</a>
        </div>
        <div id="navlinks">
            <a href="#background2" class="nav-link">NEWEST</a>
            <a href="#about" class="nav-link">ABOUT</a>
            <a href="<?php echo site_url('/archive'); ?>" class="nav-link">ARCHIVE</a>
            <a href="" class="nav-link" id="searchbtn">SEARCH</a>

            <a href="#" class="nav-link">CONTACT</a>
            <div class="nav-dropdown">
                <button class="navbtn">FEATURED</button>
                <div class="drop-content">
                    <?php
                        wp_nav_menu(array(
                            'theme_location' => 'featuredMenu'
                        ));
                    ?>
                </div>
            </div>
        </div>
    </nav>
    <section id="welcome">
            <div id="slide-holder">
                <span id="left-span"></span>
                <span id="right-span"></span>
                <?php 
                $count = 0;
                while($count<4) {
                    $count++;
                    the_post();
                    ?>
                    <div class="slide">
                        <a href="<?php the_permalink(); ?>">
                            <img src="<?php echo get_the_post_thumbnail_url(); ?>">
                        </a>
                        <label><?php the_title(); ?></label>
                    </div>
                <?php } ?>
                 
                </div>
        <div id="headers">
            <h1>virtual travel</h1>
            <h5>travel blog</h5>
        </div> 
    </section>
    <div id="background2"></div>
    <section id="latest">
        <?php 
        $count = 0;
        while($count<6) {
            $count++;
            the_post();
            ?>
            <a class="post-thumbnail" href="<?php the_permalink(); ?>">
                <figure class="post-thumbnail-mask">
                    
                    <img src=" <?php echo get_the_post_thumbnail_url(); ?>" class="post-thumbnail-img" />
                    <figcaption>
                        <h2>CONTINUE READING</h2>
                    </figcaption>
                    <h3><?php the_title(); ?></h3>
                    <p>
                        <?php 
                            $content = get_the_content();
                            $content = strip_tags($content);
                            echo substr($content, 0, 280);
                        ?>...
                    </p>
                </figure>
            </a>
        <?php }
        rewind_posts();
        ?>
        <div id="sidebar">
            <div id="sidebar-pics">
                <h5>INSTAGRAM</h5>
                <div id="sidebar-pics-holder">
                    <?php

                        $access_token="430962433.1677ed0.d8ff8c29b801441babdf4a52f4e0d0d9";
                        $photo_count=9;
                            
                        $json_link="https://api.instagram.com/v1/users/self/media/recent/?";
                        $json_link.="access_token={$access_token}&count={$photo_count}";

                        $json = file_get_contents($json_link);
                        $obj = json_decode($json, true, 512, JSON_BIGINT_AS_STRING);

                        foreach ($obj['data'] as $post) {
        
                            $pic_text=$post['caption']['text'];
                            $pic_link=$post['link'];
                            $pic_like_count=$post['likes']['count'];
                            $pic_comment_count=$post['comments']['count'];
                            $pic_src=str_replace("http://", "https://", $post['images']['standard_resolution']['url']);
                            $pic_created_time=date("F j, Y", $post['caption']['created_time']);
                            $pic_created_time=date("F j, Y", strtotime($pic_created_time . " +1 days"));
                            
                            echo "<div class='col-md-4 col-sm-6 col-xs-12 item_box'>";        
                                echo "<a href='{$pic_link}' target='_blank'>";
                                    echo "<img class='img-responsive photo-thumb' src='{$pic_src}' alt='{$pic_text}'>";
                                echo "</a>";
                                
                            echo "</div>";
                        }
                    ?>
                 
                </div>
            </div>
            <div id="recent-sidebar">
                <h5>RECENT POSTS</h5>
                <div id="recent-posts">
                    <?php
                    rewind_posts();
                    $count = 0;
                    while ($count<5) {
                        $count++;
                        the_post(); ?>
                        <a href="<?php the_permalink(); ?>">
                            <div class="recent-post">
                                <h5><?php the_title(); ?></h5>
                                <p>
                                    <?php 
                                        $content = get_the_content();
                                        $content = strip_tags($content);
                                        echo substr($content, 0, 160);
                                    ?>
                                </p>
                            </div>
                        </a>
                    <?php } ?>
                    
                    
                </div>
            </div>
        </div>
    </section>

    <section id="about">
                <div id="background3"></div>
            <h3>ABOUT</h3>
            <p>Virtual travel is a blog where we share our best momments of traveling, tips and our ideas. Also we are trying to find best deals to travel cheaper for you (and for ourselves) and we share them here.
                    Our plan is in 30 years visit each country and put everything from that in this small website. So far we visited only 8 countries and started our blog while we are in Iceland. Next stop is in November – Denmark and later that month – Thailand.
                    Make sure you follow us on facebook to get news from our blog
            </p>
            <div id="social-icons">
                <a href="#"><img src=" <?php bloginfo('template_directory'); ?>/style/icons/if_facebook2_325018.svg" class="social-icon"></a>
                <a href="#"><img src=" <?php bloginfo('template_directory'); ?>/style/icons/if_instagram_322606.svg" class="social-icon"></a>
                <a href="#"><img src=" <?php bloginfo('template_directory'); ?>/style/icons/if_youtube_324893.svg" class="social-icon"></a>
            </div>
    </section>

<?php get_footer(); ?>

