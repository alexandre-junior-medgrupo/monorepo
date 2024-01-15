<?php
namespace Elementor;

if (file_exists(__DIR__ . '/controls.php')) {
  require_once __DIR__ . '/controls.php';
}

if (file_exists(__DIR__ . '/../../../utils/components.php')) {
  require_once __DIR__ . '/../../../utils/components.php';
}

class Tp_Product_Detail extends Tp_Product_Detail_Controls {
  protected function render() {
    $settings = $this->get_settings_for_display();
    $current_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $path = parse_url($current_url, PHP_URL_PATH);
    $product_slug = basename($path);
    $product_post_object = get_page_by_path($product_slug, OBJECT, 'product');

    if ($product_post_object) {
      $product_id = $product_post_object->ID;
      $product = wc_get_product($product_id);

      if ($product) {
        $product_title = $product->get_title();
        $product_description = $product->get_description();
        $product_regular_price = $product->get_regular_price();
        $product_sale_price = $product->get_sale_price();
        $product_categories = $product->get_category_ids();
        $product_sku = $product->get_sku();
        $image_id = $product->get_image_id();
        $image_url = wp_get_attachment_url($image_id);

        // If you want to get an array containing all product data, you can use the get_data method
        // $product_data = $product->get_data();
      } else {
        echo '<div style="border: 1px solid white; color: white;">';
        echo 'Product not found';
        echo '</div>';
      }
    } else {
      echo '<div style="border: 1px solid white; color: white;">';
      echo 'Product slug not found';
      echo '</div>';
    }

    $product_categories_names = array();
    foreach ($product_categories as $key => $category_id) {
      $category = get_term($category_id, 'product_cat');

      if ($category && !is_wp_error($category)) {
        $product_categories_names[] = array(
          'name' => $category->name,
          'link' => get_term_link($category)
        );
      }
    }

    $test = json_encode($product_categories_names);

    echo <<<HTML
      <tp-elem-product-detail
        title="$product_title"
        description="$product_description"
        image-url="$image_url"
        regular-price="$product_regular_price"
        sale-price="$product_sale_price"
        sku="$product_sku"
        categories=$test
        link="https://medgrupo.com.br"
        ></tp-elem-product-detail>
        <!-- go-to-cart="true" -->
    HTML;
  }
}

Plugin::instance()->widgets_manager->register_widget_type(new Tp_Product_Detail());



