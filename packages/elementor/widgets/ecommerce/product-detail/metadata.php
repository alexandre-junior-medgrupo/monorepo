<?php
namespace Elementor;

class Tp_Product_Detail_Metadata extends Widget_Base {
  public function get_name() {
    return 'tp-product-detail';
  }

  public function get_title() {
    return esc_html__('Detalhes do Produto', 'tp-widgets');
  }

  public function get_icon() {
    return 'eicon-product-description';
  }

  public function get_categories() {
    return ['ecommerce'];
  }

  public function get_keywords() {
    return ['produto', 'produtos', 'detalhes'];
  }

  public function get_script_depends() {
    return ['main-script'];
  }

  public function get_style_depends() {
    return ['main-styles'];
  }
}
