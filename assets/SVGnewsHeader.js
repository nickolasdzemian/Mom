/* eslint-disable no-unused-vars */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const colorRef = "#AAACAE";

const styles = StyleSheet.create({
  view: {
    aspectRatio: 1,
  },
});

export function BackBtn({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 15, height: 15 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M7.69414 1.09719C7.93822 1.34127 7.96041 1.72321 7.76071 1.99236L7.69414 2.06946L1.76392 8L7.69414 13.9305C7.93822 14.1746 7.96041 14.5565 7.76071 14.8257L7.69414 14.9028C7.45007 15.1469 7.06812 15.1691 6.79898 14.9694L6.72187 14.9028L0.305206 8.48613C0.0611281 8.24205 0.038939 7.86011 0.238639 7.59097L0.305206 7.51386L6.72187 1.09719C6.99036 0.828707 7.42566 0.828707 7.69414 1.09719Z"
          fill={color}
        />
        <Path d="M0.999023 8L7.74951 8L14.5 8L22 8" stroke={color} />
        <Path d="M24 40H48.5" stroke={color} />
      </Svg>
    </View>
  );
}

export function Parmalat({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 25, height: 25 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M15.1998 13.5999L15.1998 3.1999C15.1998 2.98773 15.2841 2.78425 15.4341 2.63422C15.5841 2.48419 15.7876 2.3999 15.9998 2.3999C16.212 2.3999 16.4155 2.48419 16.5655 2.63422C16.7155 2.78425 16.7998 2.98773 16.7998 3.1999L16.7998 13.5999C16.7998 13.8121 16.7155 14.0156 16.5655 14.1656C16.4155 14.3156 16.212 14.3999 15.9998 14.3999C15.7876 14.3999 15.5841 14.3156 15.4341 14.1656C15.2841 14.0156 15.1998 13.8121 15.1998 13.5999ZM15.1998 20.7999L15.1998 17.5999C15.1998 17.3877 15.2841 17.1842 15.4341 17.0342C15.5841 16.8842 15.7876 16.7999 15.9998 16.7999C16.212 16.7999 16.4155 16.8842 16.5655 17.0342C16.7155 17.1842 16.7998 17.3877 16.7998 17.5999L16.7998 20.7999C16.7998 21.0121 16.7155 21.2156 16.5655 21.3656C16.4155 21.5156 16.212 21.5999 15.9998 21.5999C15.7876 21.5999 15.5841 21.5156 15.4341 21.3656C15.2841 21.2156 15.1998 21.0121 15.1998 20.7999Z"
          fill={color}
        />
        <Path
          d="M13.1998 15.5999C13.1998 15.0461 13.364 14.5048 13.6717 14.0443C13.9794 13.5838 14.4167 13.225 14.9283 13.013C15.4399 12.8011 16.0029 12.7457 16.5461 12.8537C17.0892 12.9617 17.5881 13.2284 17.9797 13.62C18.3713 14.0116 18.638 14.5105 18.746 15.0536C18.854 15.5968 18.7986 16.1598 18.5867 16.6714C18.3747 17.183 18.0159 17.6203 17.5554 17.928C17.0949 18.2357 16.5536 18.3999 15.9998 18.3999C15.2572 18.3999 14.545 18.1049 14.0199 17.5798C13.4948 17.0547 13.1998 16.3425 13.1998 15.5999ZM17.1998 15.5999C17.1998 15.3626 17.1294 15.1306 16.9976 14.9332C16.8657 14.7359 16.6783 14.5821 16.459 14.4912C16.2398 14.4004 15.9985 14.3767 15.7657 14.423C15.5329 14.4693 15.3191 14.5836 15.1513 14.7514C14.9835 14.9192 14.8692 15.133 14.8229 15.3658C14.7766 15.5986 14.8003 15.8398 14.8911 16.0591C14.982 16.2784 15.1358 16.4658 15.3331 16.5977C15.5305 16.7295 15.7625 16.7999 15.9998 16.7999C16.3181 16.7999 16.6233 16.6735 16.8483 16.4484C17.0734 16.2234 17.1998 15.9182 17.1998 15.5999ZM7.1998 20.7999L7.1998 10.3999C7.1998 10.1877 7.28409 9.98425 7.43412 9.83422C7.58415 9.68419 7.78763 9.5999 7.9998 9.5999C8.21198 9.5999 8.41546 9.68419 8.56549 9.83422C8.71552 9.98425 8.7998 10.1877 8.7998 10.3999L8.7998 20.7999C8.7998 21.0121 8.71552 21.2156 8.56549 21.3656C8.41546 21.5156 8.21198 21.5999 7.9998 21.5999C7.78763 21.5999 7.58415 21.5156 7.43412 21.3656C7.28409 21.2156 7.1998 21.0121 7.1998 20.7999ZM7.1998 6.3999L7.1998 3.1999C7.1998 2.98773 7.28409 2.78425 7.43412 2.63422C7.58415 2.48419 7.78763 2.3999 7.9998 2.3999C8.21198 2.3999 8.41546 2.48419 8.56549 2.63422C8.71552 2.78425 8.7998 2.98773 8.7998 3.1999L8.7998 6.3999C8.7998 6.61207 8.71552 6.81556 8.56549 6.96559C8.41546 7.11562 8.21198 7.1999 7.9998 7.1999C7.78763 7.1999 7.58415 7.11562 7.43412 6.96559C7.28409 6.81556 7.1998 6.61207 7.1998 6.3999Z"
          fill={color}
        />
        <Path
          d="M5.1998 8.4001C5.1998 7.84631 5.36402 7.30496 5.67169 6.8445C5.97936 6.38404 6.41666 6.02516 6.92829 5.81324C7.43992 5.60131 8.00291 5.54586 8.54606 5.6539C9.0892 5.76194 9.58812 6.02861 9.9797 6.4202C10.3713 6.81179 10.638 7.3107 10.746 7.85385C10.854 8.39699 10.7986 8.95998 10.5867 9.47161C10.3747 9.98324 10.0159 10.4205 9.5554 10.7282C9.09494 11.0359 8.55359 11.2001 7.9998 11.2001C7.2572 11.2001 6.54501 10.9051 6.0199 10.38C5.4948 9.8549 5.1998 9.1427 5.1998 8.4001ZM9.1998 8.4001C9.1998 8.16276 9.12942 7.93075 8.99757 7.73341C8.86571 7.53608 8.67829 7.38227 8.45902 7.29144C8.23975 7.20062 7.99847 7.17685 7.7657 7.22316C7.53292 7.26946 7.3191 7.38375 7.15128 7.55157C6.98345 7.71939 6.86916 7.93321 6.82286 8.16599C6.77656 8.39877 6.80032 8.64005 6.89115 8.85932C6.98197 9.07859 7.13578 9.266 7.33312 9.39786C7.53046 9.52972 7.76247 9.6001 7.9998 9.6001C8.31806 9.6001 8.62329 9.47367 8.84833 9.24863C9.07337 9.02358 9.1998 8.71836 9.1998 8.4001Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function Looopa({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 24, height: 24 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M20.8751 20.1974L20.875 20.1973L18.1616 17.4896C19.5529 15.9398 20.4004 13.8918 20.4004 11.6497C20.4004 6.82463 16.4757 2.9 11.6506 2.9C6.82553 2.9 2.9 6.82462 2.9 11.6497C2.9 16.4749 6.82552 20.4004 11.6506 20.4004C13.6822 20.4004 15.5542 19.7044 17.0408 18.5385L19.7922 21.2823L19.7924 21.2824C19.9423 21.4314 20.1385 21.506 20.3336 21.506C20.5292 21.506 20.7265 21.4316 20.876 21.2804C21.1754 20.9809 21.1742 20.4966 20.8751 20.1974ZM4.43237 11.6497C4.43237 7.66968 7.67054 4.43237 11.6506 4.43237C15.6298 4.43237 18.868 7.66968 18.868 11.6497C18.868 15.6298 15.6298 18.868 11.6506 18.868C7.67056 18.868 4.43237 15.6298 4.43237 11.6497Z"
          fill={color}
          stroke={color}
          strokeWidth={0.2}
        />
      </Svg>
    </View>
  );
}

export function DropDown() {
  return (
    <View style={[styles.view, { width: 8, height: 5, marginLeft: 5, marginTop: 3 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M7.83385 0.206184C7.78074 0.140851 7.71754 0.0889952 7.64792 0.0536073C7.57829 0.0182193 7.50361 0 7.42818 0C7.35276 0 7.27808 0.0182193 7.20845 0.0536073C7.13882 0.0889952 7.07563 0.140851 7.02252 0.206184L4.40567 3.39864C4.35255 3.46397 4.28936 3.51583 4.21973 3.55122C4.15011 3.58661 4.07543 3.60483 4 3.60483C3.92457 3.60483 3.84989 3.58661 3.78027 3.55122C3.71064 3.51583 3.64745 3.46397 3.59433 3.39864L0.977485 0.206184C0.924369 0.140851 0.861176 0.0889952 0.79155 0.0536073C0.721924 0.0182193 0.647243 0 0.571817 0C0.49639 0 0.421709 0.0182193 0.352083 0.0536073C0.282457 0.0889952 0.219264 0.140851 0.166148 0.206184C0.0597312 0.336784 0 0.513451 0 0.697599C0 0.881748 0.0597312 1.05841 0.166148 1.18901L2.78871 4.38844C3.1101 4.78004 3.54576 5 4 5C4.45424 5 4.8899 4.78004 5.21129 4.38844L7.83385 1.18901C7.94027 1.05841 8 0.881748 8 0.697599C8 0.513451 7.94027 0.336784 7.83385 0.206184Z"
          fill="#2C78BA"
        />
      </Svg>
    </View>
  );
}

export function Check({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 18, height: 18 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M16.739 3.32326L6.37472 13.6868C6.30503 13.7567 6.22222 13.8122 6.13104 13.8501C6.03985 13.888 5.94208 13.9075 5.84334 13.9075C5.7446 13.9075 5.64683 13.888 5.55565 13.8501C5.46446 13.8122 5.38165 13.7567 5.31197 13.6868L1.30397 9.67501C1.23429 9.60505 1.15148 9.54954 1.06029 9.51167C0.969107 9.47379 0.871339 9.45429 0.772599 9.45429C0.673859 9.45429 0.57609 9.47379 0.484903 9.51167C0.393717 9.54954 0.310906 9.60505 0.241224 9.67501C0.171267 9.74469 0.115758 9.8275 0.0778814 9.91869C0.0400053 10.0099 0.0205078 10.1076 0.0205078 10.2064C0.0205078 10.3051 0.0400053 10.4029 0.0778814 10.4941C0.115758 10.5853 0.171267 10.6681 0.241224 10.7378L4.25072 14.7465C4.67368 15.1687 5.24687 15.4058 5.84447 15.4058C6.44207 15.4058 7.01525 15.1687 7.43821 14.7465L17.8017 4.38526C17.8715 4.31559 17.927 4.23283 17.9648 4.14171C18.0026 4.05059 18.022 3.95291 18.022 3.85426C18.022 3.75561 18.0026 3.65792 17.9648 3.56681C17.927 3.47569 17.8715 3.39292 17.8017 3.32326C17.732 3.2533 17.6492 3.19779 17.558 3.15991C17.4668 3.12204 17.3691 3.10254 17.2703 3.10254C17.1716 3.10254 17.0738 3.12204 16.9826 3.15991C16.8914 3.19779 16.8086 3.2533 16.739 3.32326Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function Lines({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 18, height: 18 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M0.75 4.5H17.25C17.4489 4.5 17.6397 4.42098 17.7803 4.28033C17.921 4.13968 18 3.94891 18 3.75C18 3.55109 17.921 3.36032 17.7803 3.21967C17.6397 3.07902 17.4489 3 17.25 3H0.75C0.551088 3 0.360322 3.07902 0.21967 3.21967C0.0790176 3.36032 0 3.55109 0 3.75C0 3.94891 0.0790176 4.13968 0.21967 4.28033C0.360322 4.42098 0.551088 4.5 0.75 4.5Z"
          fill={color}
        />
        <Path
          d="M17.25 6.75H6.75C6.55109 6.75 6.36032 6.82902 6.21967 6.96967C6.07902 7.11032 6 7.30109 6 7.5C6 7.69891 6.07902 7.88968 6.21967 8.03033C6.36032 8.17098 6.55109 8.25 6.75 8.25H17.25C17.4489 8.25 17.6397 8.17098 17.7803 8.03033C17.921 7.88968 18 7.69891 18 7.5C18 7.30109 17.921 7.11032 17.7803 6.96967C17.6397 6.82902 17.4489 6.75 17.25 6.75Z"
          fill={color}
        />
        <Path
          d="M17.25 14.25H6.75C6.55109 14.25 6.36032 14.329 6.21967 14.4697C6.07902 14.6103 6 14.8011 6 15C6 15.1989 6.07902 15.3897 6.21967 15.5303C6.36032 15.671 6.55109 15.75 6.75 15.75H17.25C17.4489 15.75 17.6397 15.671 17.7803 15.5303C17.921 15.3897 18 15.1989 18 15C18 14.8011 17.921 14.6103 17.7803 14.4697C17.6397 14.329 17.4489 14.25 17.25 14.25Z"
          fill={color}
        />
        <Path
          d="M17.25 10.5H0.75C0.551088 10.5 0.360322 10.579 0.21967 10.7197C0.0790176 10.8603 0 11.0511 0 11.25C0 11.4489 0.0790176 11.6397 0.21967 11.7803C0.360322 11.921 0.551088 12 0.75 12H17.25C17.4489 12 17.6397 11.921 17.7803 11.7803C17.921 11.6397 18 11.4489 18 11.25C18 11.0511 17.921 10.8603 17.7803 10.7197C17.6397 10.579 17.4489 10.5 17.25 10.5Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}