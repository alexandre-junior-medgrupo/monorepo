<?php
namespace Elementor;

if (file_exists(__DIR__ . '/controls.php')) {
  require_once __DIR__ . '/controls.php';
}

if (file_exists(__DIR__ . '/../../../utils/components.php')) {
  require_once __DIR__ . '/../../../utils/components.php';
}

class Tp_Example_Website extends Tp_Example_Website_controls {
  protected function render() {
    $settings = $this->get_settings_for_display();

    // Properties
    $id = Tp_Components::get_attr('id', $settings['widget_id'], true);
    $label = Tp_Components::get_attr('label', $settings['label'], true);
    $type = Tp_Components::get_attr('type', $settings['type'], true);
    $styles = Tp_Components::get_custom_styles([
      'background' => '#909090',
      'alignment' => $settings['alignment']
    ]);

    echo <<<HTML
      <tp-elem-example-website {$id} {$label} {$type} {$styles}></tp-elem-example-website>
    HTML;
  }
}

Plugin::instance()->widgets_manager->register_widget_type(new Tp_Example_Website());



