
<!-- <div id="background3"></div> -->
<?php
    get_header();
    the_post(); ?>
<section id='single'>
    <div id="background1"></div>


    <div id="single-title">
    <h2> <?php the_title(); ?> </h2>
    </div>
    <div id="single-meta">
        <p>Posted by <?php the_author_posts_link(); ?> on <?php the_time('F j, Y'); ?>
            in <?php echo get_the_category_list(', '); ?></p>
    </div>
    <?php echo get_post_meta( $post->ID, '_wp_attachment_image_alt', true ); ?>
    <div id="thread">
        
        <?php the_content(); ?>
    </div>
</section>
<?php
get_footer();
?>