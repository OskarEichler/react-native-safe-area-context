function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { useWindowDimensions, View } from 'react-native';
export function CompatNativeSafeAreaProvider({
  children,
  style,
  onInsetsChange,
  ...rest
}) {
  const window = useWindowDimensions();
  React.useEffect(() => {
    const insets = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
    const frame = {
      x: 0,
      y: 0,
      width: window.width,
      height: window.height
    };
    // @ts-ignore: missing properties
    onInsetsChange({
      nativeEvent: {
        insets,
        frame
      }
    });
  }, [onInsetsChange, window.height, window.width]);
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: style
  }), children);
}
//# sourceMappingURL=CompatNativeSafeAreaProvider.js.map