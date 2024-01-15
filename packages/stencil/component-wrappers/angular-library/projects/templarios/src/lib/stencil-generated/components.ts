/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'templarios-core';


@ProxyCmp({
})
@Component({
  selector: 'dialog-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class DialogExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DialogExample extends Components.DialogExample {}


@ProxyCmp({
})
@Component({
  selector: 'modal-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class ModalExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ModalExample extends Components.ModalExample {}


@ProxyCmp({
})
@Component({
  selector: 'sheet-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SheetExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SheetExample extends Components.SheetExample {}


@ProxyCmp({
  inputs: ['color', 'loading']
})
@Component({
  selector: 'tp-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'loading'],
})
export class TpAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpAlert extends Components.TpAlert {}


@ProxyCmp({
  inputs: ['collapsed', 'color', 'loading'],
  methods: ['toggleExternal']
})
@Component({
  selector: 'tp-button-cluster',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'color', 'loading'],
})
export class TpButtonCluster {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tpButtonClusterCollapsed']);
  }
}


export declare interface TpButtonCluster extends Components.TpButtonCluster {
  /**
   * Emitido quando a propriedade collapsed é alterada.
   */
  tpButtonClusterCollapsed: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width']
})
@Component({
  selector: 'tp-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'height', 'loading', 'noLabel', 'value', 'width'],
})
export class TpChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpChartBar extends Components.TpChartBar {}


@ProxyCmp({
  inputs: ['color', 'items', 'size']
})
@Component({
  selector: 'tp-chart-radial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'items', 'size'],
})
export class TpChartRadial {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpChartRadial extends Components.TpChartRadial {}


@ProxyCmp({
  inputs: ['barValue', 'color', 'containerHeight', 'disabled', 'hasMarker', 'loading', 'markerValue', 'noLabel']
})
@Component({
  selector: 'tp-comparison-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['barValue', 'color', 'containerHeight', 'disabled', 'hasMarker', 'loading', 'markerValue', 'noLabel'],
})
export class TpComparisonChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpComparisonChartBar extends Components.TpComparisonChartBar {}


@ProxyCmp({
  inputs: ['color', 'icon']
})
@Component({
  selector: 'tp-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'icon'],
})
export class TpExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpExample extends Components.TpExample {}


@ProxyCmp({
  inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value']
})
@Component({
  selector: 'tp-horizontal-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'loading', 'maxCount', 'noLabel', 'size', 'value'],
})
export class TpHorizontalChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpHorizontalChartBar extends Components.TpHorizontalChartBar {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'inverted', 'loading', 'state']
})
@Component({
  selector: 'tp-input-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'inverted', 'loading', 'state'],
})
export class TpInputContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpInputContainer extends Components.TpInputContainer {}


@ProxyCmp({
  inputs: ['color', 'fixed', 'tpName']
})
@Component({
  selector: 'tp-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'fixed', 'tpName'],
})
export class TpLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpLoader extends Components.TpLoader {}


@ProxyCmp({
  inputs: ['loading', 'status']
})
@Component({
  selector: 'tp-rate-like',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['loading', 'status'],
})
export class TpRateLike {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tpChange']);
  }
}


export declare interface TpRateLike extends Components.TpRateLike {
  /**
   * Emitido quando a propriedade status é alterada.
   */
  tpChange: EventEmitter<CustomEvent<'like' | 'dislike'>>;
}


@ProxyCmp({
})
@Component({
  selector: 'tp-segment-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class TpSegmentContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpSegmentContainer extends Components.TpSegmentContainer {}


@ProxyCmp({
  inputs: ['collapsed', 'color', 'hover', 'loading', 'placement', 'position'],
  methods: ['toggle', 'toggleOnHover']
})
@Component({
  selector: 'tp-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'color', 'hover', 'loading', 'placement', 'position'],
})
export class TpTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TpTooltip extends Components.TpTooltip {}


