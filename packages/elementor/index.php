<?php

/**
 * Plugin Name: Templarios Elementor
 * Version: 1.0.0
 * Text Domain: tp-widgets
 */
if(!defined('ABSPATH' )) exit();

/**
 * Elementor Extension main Class
 * @since 1.0.0
 */
final class Elementor_Tp_Widgets {
  const VERSION = '1.0.0';

  private static $_instance = null;

  /**
   * Singletone Instance Method
   * @since 1.0.0
   */
  public static function instance() {
    if(is_null( self::$_instance )) {
      self::$_instance = new self();
    }

    return self::$_instance;
  }

  /**
   * Construct Method
   * @since 1.0.0
   */
  public function __construct() {
    $this->define_constants();
    add_action('wp_enqueue_scripts', [$this, 'scripts_styles'], 1);
    add_action('plugins_loaded', [$this, 'init']);
  }

  /**
   * Define Plugin Constants
   * @since 1.0.0
   */
  public function define_constants() {
    define('TP_PLUGIN_URL', trailingslashit(plugins_url('/', __FILE__)));
    define('TP_PLUGIN_PATH', trailingslashit(plugin_dir_path(__FILE__)));
  }

  /**
   * Load Scripts & Styles
   * @since 1.0.0
   */
  public function scripts_styles() {
    wp_register_script('main-script', TP_PLUGIN_URL . 'assets/elementor.js', [], rand(), true);
    wp_register_style('main-styles', TP_PLUGIN_URL . 'assets/elementor.css', [], rand(), 'all');
  }

  /**
   * Initialize the plugin
   * @since 1.0.0
   */
  public function init() {
    add_action('elementor/elements/categories_registered', [$this, 'init_category']);
    add_action('elementor/widgets/widgets_registered', [$this, 'init_widgets']);
  }

  /**
   * Init Widgets
   * @since 1.0.0
   */
  public function init_widgets() {
    /**
     * Widgets E-commerce
     */
    if (file_exists(TP_PLUGIN_PATH . '/packages/php/widgets/ecommerce/featured-products/featured-products.php')) {
      require_once TP_PLUGIN_PATH . '/packages/php/widgets/ecommerce/featured-products/featured-products.php';
    }
    if (file_exists(TP_PLUGIN_PATH . '/packages/php/widgets/ecommerce/product-detail/product-detail.php')) {
      require_once TP_PLUGIN_PATH . '/packages/php/widgets/ecommerce/product-detail/product-detail.php';
    }

    /**
     * Widgets Institucional
     */
    if (file_exists(TP_PLUGIN_PATH . '/packages/php/widgets/institucional/example/example.php')) {
      require_once TP_PLUGIN_PATH . '/packages/php/widgets/institucional/example/example.php';
    }

    /**
     * Widgets Website
     */
    if (file_exists(TP_PLUGIN_PATH . '/packages/php/widgets/website/example/example.php')) {
      require_once TP_PLUGIN_PATH . '/packages/php/widgets/website/example/example.php';
    }
  }

  /**
   * Init Category Section
   * @since 1.0.0
   */
  public function init_category() {
    Elementor\Plugin::instance()->elements_manager->add_category(
      'institucional',
      [
        'title' => esc_html__('Templarios Institucional', 'tp-widgets'),
        'icon' => 'fa fa-plug'
      ],
      1
    );

    Elementor\Plugin::instance()->elements_manager->add_category(
      'website',
      [
        'title' => esc_html__('Templarios Website', 'tp-widgets'),
        'icon' => 'fa fa-plug'
      ],
      1
    );

    Elementor\Plugin::instance()->elements_manager->add_category(
      'ecommerce',
      [
        'title' => esc_html__('Templarios E-Commerce', 'tp-widgets'),
        'icon' => 'fa fa-plug'
      ],
      1
    );
  }
}

Elementor_Tp_Widgets::instance();

/**
 * Register additional document controls.
 * @param \Elementor\Core\DocumentTypes\PageBase $document The PageBase document instance.
 */
function register_document_controls( $document ) {
  if (!($document instanceof \Elementor\Core\DocumentTypes\PageBase) || !($document::get_property( 'has_elements'))) {
    return;
  }

  $document->start_controls_section(
    'custom_page_settings',
    [
      'label' => esc_html__( 'Configuração da página', 'tp-widgets' ),
      'tab' => \Elementor\Controls_Manager::TAB_STYLE
    ]
  );

$document->add_control(
  'page_color',
  [
    'label' => esc_html__( 'Selecione a cor da página', 'tp-widgets' ),
    'type' => \Elementor\Controls_Manager::COLOR,
    'selectors' => [
      '{{WRAPPER}}' => '--main-color: {{VALUE}}',
    ]
  ]
);

$document->add_control(
  'blur_left',
  [
    'label' => esc_html__( 'Selecione a cor do blur da esquerda', 'tp-widgets' ),
    'type' => \Elementor\Controls_Manager::COLOR,
    'selectors' => [
      '{{WRAPPER}}' => '--color-blur-left: {{VALUE}}',
    ]
  ]
);

$document->add_control(
  'blur_right',
  [
    'label' => esc_html__( 'Selecione a cor do blur da direita', 'tp-widgets' ),
    'type' => \Elementor\Controls_Manager::COLOR,
    'selectors' => [
      '{{WRAPPER}}' => '--color-blur-right: {{VALUE}}',
    ]
  ]
);

  $document->end_controls_section();
}
add_action( 'elementor/documents/register_controls', 'register_document_controls' );


/**
 * Function to add the type="module" attribute to the script tag
 */
function add_module_type_to_script($tag, $handle, $src) {
  if ('main-script' === $handle) {
    $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
  }

  return $tag;
}
add_filter('script_loader_tag', 'add_module_type_to_script', 10, 3);

/**
 * Hook into the_content filter to wrap it with ion-app and ion-content
 */
function add_ion_app_content_wrapper($content) {
  if (class_exists('Elementor\Plugin')) {
    $content = <<<HTML
      <ion-app>
        <ion-content>{$content}</ion-content>
      </ion-app>
    HTML;
  }

  return $content;
}
add_filter('elementor/frontend/the_content', 'add_ion_app_content_wrapper');
