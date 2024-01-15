import {
  BreakPointNameEnum,
  BreakPointPixelEnum,
} from '../enums/breakpoint.enum';

export class BreakpointUtils {
  private static getWidth() {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  }

  public static mediaQueryUp(breakpoint: BreakPointPixelEnum): boolean {
    return BreakpointUtils.getWidth() >= breakpoint;
  }

  public static mediaQueryDown(breakpoint: BreakPointPixelEnum): boolean {
    return BreakpointUtils.getWidth() <= breakpoint;
  }

  public static mediaQueryBetween(
    breakpointLeft: BreakPointPixelEnum,
    brekpointRight: BreakPointPixelEnum,
  ): boolean {
    return (
      BreakpointUtils.getWidth() >= breakpointLeft &&
      BreakpointUtils.getWidth() <= brekpointRight
    );
  }

  public static mediaQueryOnly(breakpoint: BreakPointPixelEnum): boolean {
    switch (breakpoint) {
      case BreakPointPixelEnum.XXS:
        return BreakpointUtils.mediaQueryBetween(
          BreakPointPixelEnum.XXS,
          BreakPointPixelEnum.XS,
        );
      case BreakPointPixelEnum.XS:
        return BreakpointUtils.mediaQueryBetween(
          BreakPointPixelEnum.XS,
          BreakPointPixelEnum.SM,
        );
      case BreakPointPixelEnum.SM:
        return BreakpointUtils.mediaQueryBetween(
          BreakPointPixelEnum.SM,
          BreakPointPixelEnum.MD,
        );
      case BreakPointPixelEnum.MD:
        return BreakpointUtils.mediaQueryBetween(
          BreakPointPixelEnum.MD,
          BreakPointPixelEnum.LG,
        );
      case BreakPointPixelEnum.LG:
        return BreakpointUtils.mediaQueryBetween(
          BreakPointPixelEnum.LG,
          BreakPointPixelEnum.XL,
        );
      case BreakPointPixelEnum.XL:
      default:
        throw Error('Breakpoint não definido');
    }
  }

  public static sizeButtonMEDSmart(): BreakPointNameEnum {
    if (BreakpointUtils.mediaQueryDown(BreakPointPixelEnum.XXS)) {
      return BreakPointNameEnum.XS;
    } else if (BreakpointUtils.mediaQueryDown(BreakPointPixelEnum.SM)) {
      return BreakPointNameEnum.SM;
    } else {
      return BreakPointNameEnum.LG;
    }
  }
}
