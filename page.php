
<?php
    get_header();
?>

   
   
   <?php
        while(have_posts()) {
            the_post(); ?>
            <section id="page">
                <div id="page-title">
                    <h2><?php the_title(); ?></h2>
                </div>
                
                <div id="page-content">
                    <?php the_content(); ?>
                </div>
            </section>

        <?php }
        ?>


<?php
    get_footer();
?>


