<div id="header-wrapper" class="container-fluid">
  <div id= "logo">
    <?php if ($logo): ?>
      <a href="<?php print $base_path; ?>" title="<?php print t('Click to return to the Homepage'); ?>" />
      <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a>
    <?php endif; ?>
    <?php print render($page['header']); ?>
  </div>
  <?php print render($page['page_top']); ?>
    <!-- feed icons -->
    <?php print render($page['social']); ?>
</div>

<div id="wrapper">
  <div class="container">
    <div class="row">

      <!-- <nav class="col-sm-3"> -->
     <nav>
        <div id="main-menu">
          <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('class' => array('links', 'menu', 'inline', 'clearfix')))); ?>
        </div>
      </nav>

      <div class="slide-show">
        <?php print render($page['slideshow']); ?>
      </div>

    </div>
    <div class="row">

      <article>

        <div class="main_content">
        <!-- breadcrumb trail -->
        <?php if ($breadcrumb): ?>
          <?php print $breadcrumb; ?>
        <?php endif; ?>

        <!-- tabs -->
       <?php if ($tabs): ?>
          <?php print render($tabs); ?>
        <?php endif; ?>
          <?php print render($page['content']); ?>
        </div>

      </article>

  </div>
</div>

    <footer>
      <?php print render($page['footer']); ?>
    </footer>
  </div>
</div>


