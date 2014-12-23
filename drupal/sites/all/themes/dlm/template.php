<?php
/**
* Implements theme_menu_item_link()
*/
function dlm_menu_item_link($link) {
  if (empty($link['localized_options'])) {
    $link['localized_options'] = array();
  }

  if(strpos($link['localized_options']['attributes']['title'], '<img') === 0) {
    // Allow HTML if the menu description is an image tag:
    $link['localized_options']['html'] = TRUE;
    // exchange description with title
    $tmp = $link['localized_options']['attributes']['title'];
    $link['localized_options']['attributes']['title'] = $link['title'];
    $link['title'] = $tmp;
  }

  return l($link['title'], $link['href'], $link['localized_options']);
}
?>
