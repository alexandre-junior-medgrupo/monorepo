<?php
namespace Elementor;

if (file_exists(__DIR__ . '/controls.php')) {
  require_once __DIR__ . '/controls.php';
}

if (file_exists(__DIR__ . '/../../../utils/components.php')) {
  require_once __DIR__ . '/../../../utils/components.php';
}

class Tp_Featured_Products extends Tp_Featured_Products_controls {
  protected function render() {
    $settings = $this->get_settings_for_display();

    $queryString = $_SERVER['QUERY_STRING'];
    $params = [];
    parse_str($queryString, $params);

    $query = [
      'limit' => -1,
      'page' => 1,
      'orderby' => [
        'price' => 'ASC'
      ]
      // 'meta_key' => 'image_id'
      // 'orderby' => 'meta_value_num',
      // 'meta_key' => '_total_views_count',
      // 'order' => 'ASC'
      // 'limit' => -1,
      // 'orderby' => 'date'
    ];

    $products = wc_get_products($query);

    echo '<div style="border: 1px solid white; color: white;">';
    // print_r($products[0]);
    // echo $queryString;
    echo '</div>';

    $products_html = '';
    foreach ($products as $product) {
      $image_url = wp_get_attachment_url($product->get_image_id());
      $product_page_url = $product->get_permalink();

      $rating = $product->get_average_rating();
      // echo '<div style="border: 1px solid white; color: white;">';
      //   echo $rating;
      // echo '</div>';

      $products_html .= <<<HTML
        <tp-elem-product-item
          name="$rating"
          price="$product->price"
          image-url="$image_url"
          product-page-url="$product_page_url"
        >
        </tp-elem-product-item>
      HTML;
    }

    echo <<<HTML
      <tp-elem-popup-filter></tp-elem-popup-filter>
      <div style="display: flex; flex-direction: column; gap: 30px;">
        {$products_html}
      </div>
      <!-- <div style="padding: 200px 50px;">
        <tp-elem-select></tp-elem-select>
      </div> -->
    HTML;
  }
}

Plugin::instance()->widgets_manager->register_widget_type(new Tp_Featured_Products());



