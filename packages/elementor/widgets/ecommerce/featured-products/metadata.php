<?php
namespace Elementor;

class Tp_Featured_Products_Metadata extends Widget_Base {
  public function get_name() {
    return 'tp-featured-products';
  }

  public function get_title() {
    return esc_html__('Produtos em Destaque', 'tp-widgets');
  }

  public function get_icon() {
    return 'eicon-products-archive';
  }

  public function get_categories() {
    return ['ecommerce'];
  }

  public function get_keywords() {
    return ['produto', 'produtos', 'destaque'];
  }

  public function get_script_depends() {
    return ['main-script'];
  }

  public function get_style_depends() {
    return ['main-styles'];
  }
}


