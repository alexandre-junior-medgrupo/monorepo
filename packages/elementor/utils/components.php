<?php
namespace Elementor;

class Tp_Components {

  // retorna um atributo formatado ex: name="value"
  public static function get_attr($name, $value, $ignore_empty = false) {
    if ($ignore_empty) {
      return $value ? "$name='$value'" : NULL;
    }

    return "$name='$value'";
  }

  // retorna a definição das custom properties definidas no array '$config' para serem utilizadas na propriedade 'style'
  public static function get_custom_styles($config = []) {
    $custom_var_definitions = '';

    foreach ($config as $key => $value) {
      if ($value) {
        $custom_var_definitions .= "--tp-elem-$key: $value;";
      }
    }

    return 'style="' . $custom_var_definitions . '"';
  }

  // retorna um valor alfa-numérico aleatório
  public static function get_random_id() {
    $unique_id = uniqid();
    $random_number = mt_rand(1000, 9999);

    return $unique_id . $random_number;
  }
}
