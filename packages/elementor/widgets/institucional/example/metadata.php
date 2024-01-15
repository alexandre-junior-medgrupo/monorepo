<?php
namespace Elementor;

class Tp_Example_Institucional_Metadata extends Widget_Base {
  public function get_name() {
    return 'tp-example-institucional';
  }

  public function get_title() {
    return esc_html__('Widget de exemplo - institucional', 'tp-widgets');
  }

  public function get_icon() {
    return 'eicon-code';
  }

  public function get_categories() {
    return ['institucional'];
  }

  public function get_keywords() {
    return ['exemplo', 'teste'];
  }

  public function get_script_depends() {
    return ['main-script'];
  }

  public function get_style_depends() {
    return ['main-styles'];
  }
}


