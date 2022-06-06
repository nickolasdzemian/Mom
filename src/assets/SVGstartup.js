/* eslint-disable no-unused-vars */
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {
  Path,
  G,
  Circle,
  Ellipse,
  LinearGradient,
  Defs,
  Stop,
} from 'react-native-svg';
import {bottomBarTHeme} from '../theme/bottomBar';

const colorRef = '#AAACAE';
const barProps = {height: 20, width: 20};

const styles = StyleSheet.create({
  view: {
    aspectRatio: 1,
  },
});

export function Logo({color = bottomBarTHeme.inactiveColor, props = barProps}) {
  return (
    <View style={[styles.view, props]}>
      <Svg height="100%" width="100%">
        <Path
          d="M19.2675 7.56104L12.9467 1.23938C12.1644 0.459375 11.1047 0.0213623 10 0.0213623C8.89528 0.0213623 7.83563 0.459375 7.05334 1.23938L0.732509 7.56104C0.499531 7.79253 0.314818 8.06796 0.189079 8.37136C0.0633393 8.67477 -0.000925333 9.00011 1.00662e-05 9.32854V17.5094C1.00662e-05 18.1724 0.263402 18.8083 0.732242 19.2771C1.20108 19.746 1.83697 20.0094 2.50001 20.0094H17.5C18.163 20.0094 18.7989 19.746 19.2678 19.2771C19.7366 18.8083 20 18.1724 20 17.5094V9.32854C20.0009 9.00011 19.9367 8.67477 19.8109 8.37136C19.6852 8.06796 19.5005 7.79253 19.2675 7.56104ZM12.5 18.3427H7.5V15.0644C7.5 14.4013 7.76339 13.7654 8.23223 13.2966C8.70108 12.8278 9.33696 12.5644 10 12.5644C10.663 12.5644 11.2989 12.8278 11.7678 13.2966C12.2366 13.7654 12.5 14.4013 12.5 15.0644V18.3427ZM18.3333 17.5094C18.3333 17.7304 18.2455 17.9423 18.0892 18.0986C17.933 18.2549 17.721 18.3427 17.5 18.3427H14.1667V15.0644C14.1667 13.9593 13.7277 12.8995 12.9463 12.1181C12.1649 11.3367 11.1051 10.8977 10 10.8977C8.89493 10.8977 7.83513 11.3367 7.05372 12.1181C6.27232 12.8995 5.83334 13.9593 5.83334 15.0644V18.3427H2.50001C2.27899 18.3427 2.06703 18.2549 1.91075 18.0986C1.75447 17.9423 1.66668 17.7304 1.66668 17.5094V9.32854C1.66745 9.10769 1.75517 8.89603 1.91084 8.73937L8.23167 2.42021C8.70142 1.95266 9.33722 1.69017 10 1.69017C10.6628 1.69017 11.2986 1.95266 11.7683 2.42021L18.0892 8.74187C18.2442 8.89791 18.3319 9.10856 18.3333 9.32854V17.5094Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}
