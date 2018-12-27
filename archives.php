
<?php
    get_header();
?>

<?php
    /*
     Template Name: Archives
    */
?>
   

<section id="archive">
    <div id="background1"></div>
    <div id="page-title">
        <h2>Blog</h2>
    </div>
    <div id="page-archive">
        <div class="archive-menu">
        
            <div id="archive-menu-title">
                <h3>ARCHIVE</h3>
            </div>
            <div class="month-dropdown">
                <button class="dropbtn">Month</button>
                <div class="drop-content">
                    <?php 
                        wp_get_archives( array(
                            'format' => 'custom'
                        ) );
                    ?>
                </div>
            </div>
            <div class="month-dropdown">
                <?php
                    $categories = get_categories( array(
                    'orderby' => 'name',
                    'parent'  => 0
                    ) );
                    
                    
                ?>
                <button class="dropbtn">Category</button>
                <div class="drop-content">
                    <?php
                    foreach ( $categories as $category ) {
                            printf( '<a href="%1$s">%2$s</a>',
                                esc_url( get_category_link( $category->term_id ) ),
                                esc_html( $category->name )
                            );
                        }
                    ?>
                </div>
            </div>
            <div class="month-dropdown">
                <button class="dropbtn">Author</button>
                <div class="drop-content">
                    <?php wp_list_authors( array(
                            'html' => true
                        ) ); ?>
                </div>
            </div>
        </div>
        <div class="archive-content">
        
            <?php 
                $paged = ( get_query_var( 'paged' ) ) ? absint( get_query_var( 'paged' ) ) : 1;

                $archivePosts = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 6,
                    
                    'paged' => $paged
                ));

                while($archivePosts->have_posts()) {
                    $archivePosts->the_post(); ?>
                    <div class="archive-post">
                        
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <div class="archive-meta">
                            <p>Posted by <?php the_author_posts_link(); ?> on <?php the_time('F j, Y'); ?>
                                in <?php echo get_the_category_list(', '); ?></p>
                        </div>
                    
                        <div class="archive-generic-content">
                            <?php the_excerpt(); ?>
                            <p><a href="<?php the_permalink(); ?>">CONTINUE READING &raquo;</a></p>
                            
                        </div> 
                    </div>
              <?php  }  
            
              ?>
              
        </div>
        <!-- PAGINATION -->
        <div class="paginate">
            <?php 
                $big = 999999999; // need an unlikely integer

                echo paginate_links( array(
                    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                    'format' => '?paged=%#%',
                    'current' => max( 1, get_query_var('paged') ),
                    'total' => $archivePosts->max_num_pages
                ) );
                
            ?>
        </div>
    </div>
</section>

        


<?php
    get_footer();
?>


