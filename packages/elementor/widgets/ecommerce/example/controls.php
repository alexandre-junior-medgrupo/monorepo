<?php
namespace Elementor;

if (file_exists(__DIR__ . '/metadata.php')) {
  require_once __DIR__ . '/metadata.php';
}

class Tp_Example_Ecommerce_Controls extends Tp_Example_Ecommerce_Metadata {
  protected function register_controls() {
    // controls in content tab
    $this->start_controls_section(
      'content_section',
      [
        'label' => esc_html__('Conteúdo', 'tp-widgets'),
        'tab' => Controls_Manager::TAB_CONTENT
      ]
    );

    $this->add_control(
      'widget_id',
      [
        'label' => esc_html__('ID do widget', 'tp-widgets'),
        'type' => Controls_Manager::TEXT,
        'default' => esc_html__('', 'tp-widgets'),
        'label_block' => true
      ]
    );

    $this->add_control(
      'label',
      [
        'label' => esc_html__('Rótulo', 'tp-widgets'),
        'type' => Controls_Manager::TEXT,
        'default' => esc_html__('Rótulo', 'tp-widgets'),
        'label_block' => true
      ]
    );

    $this->add_control(
			'type',
			[
        'label' => esc_html__('Tipo', 'tp-widgets'),
        'type' => Controls_Manager::SELECT,
        'default' => 'text',
        'options' => [
          'text' => esc_html__('Texto', 'tp-widgets'),
          'number' => esc_html__('Número', 'tp-widgets'),
          'email' => esc_html__('E-mail', 'tp-widgets')
        ]
      ]
		);

		$this->end_controls_section();

    // controls in style tab
    $this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__('Style', 'tp-widgets'),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

    $this->add_responsive_control(
			'alignment',
			[
				'label' => esc_html__('Alignment', 'tp-widgets'),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__('Start', 'tp-widgets'),
						'icon' => 'eicon-text-align-left'
					],
					'center' => [
						'title' => esc_html__('Center', 'tp-widgets'),
						'icon' => 'eicon-text-align-center'
					],
					'flex-end' => [
						'title' => esc_html__('End', 'tp-widgets'),
						'icon' => 'eicon-text-align-right'
					]
				],
				'default' => 'flex-start',
				'toggle' => true
			]
		);

    $this->end_controls_section();
  }
}


