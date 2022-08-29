/* eslint-disable no-unused-vars */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const colorRef = "#AAACAE";

const styles = StyleSheet.create({
  view: {
    aspectRatio: 1,
  },
});

export function Clock({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 10, height: 10, marginVertical: 2.1 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842651C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216643 4.00021 -0.0968503 5.00554 0.0960758 5.97545C0.289002 6.94535 0.765206 7.83627 1.46447 8.53553C2.16373 9.23479 3.05465 9.71099 4.02455 9.90392C4.99446 10.0968 5.99979 9.99783 6.91342 9.61939C7.82705 9.24095 8.60794 8.60009 9.15735 7.77785C9.70676 6.9556 10 5.9889 10 5C9.99857 3.67436 9.47132 2.40342 8.53395 1.46605C7.59658 0.528678 6.32564 0.00143378 5 0V0ZM5 9.16666C4.17591 9.16666 3.37033 8.92229 2.68513 8.46445C1.99992 8.00661 1.46587 7.35587 1.1505 6.59451C0.835139 5.83315 0.752625 4.99537 0.913397 4.18712C1.07417 3.37887 1.47101 2.63644 2.05372 2.05372C2.63644 1.471 3.37887 1.07417 4.18713 0.913394C4.99538 0.752622 5.83316 0.835136 6.59452 1.1505C7.35588 1.46587 8.00662 1.99992 8.46446 2.68512C8.9223 3.37033 9.16667 4.17591 9.16667 5C9.16546 6.10469 8.72608 7.16379 7.94494 7.94493C7.1638 8.72607 6.1047 9.16545 5 9.16666Z"
          fill={color}
        />
        <Path
          d="M5.00001 2.5C4.8895 2.5 4.78352 2.5439 4.70538 2.62204C4.62724 2.70018 4.58334 2.80616 4.58334 2.91667V4.71874L3.17877 5.59874C3.08484 5.65742 3.01806 5.75101 2.99314 5.85892C2.96821 5.96683 2.98717 6.08022 3.04585 6.17415C3.10453 6.26808 3.19812 6.33486 3.30603 6.35978C3.41394 6.38471 3.52733 6.36575 3.62126 6.30707L5.22125 5.30707C5.28171 5.2692 5.33142 5.21643 5.36564 5.15384C5.39985 5.09124 5.41743 5.02091 5.41667 4.94957V2.91667C5.41667 2.80616 5.37277 2.70018 5.29463 2.62204C5.21649 2.5439 5.11051 2.5 5.00001 2.5Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function ThreePoints({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 17, height: 10, alignSelf: "center" }]}>
      <Svg height="100%" width="100%">
        <Circle cx={1.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={1.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={8.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={8.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={15.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={15.5} cy={1.5} r={1.5} fill={color} />
      </Svg>
    </View>
  );
}

export function UserThreePoints({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 17, height: 17, marginTop: 13 }]}>
      <Svg height="100%" width="100%">
        <Circle cx={1.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={1.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={8.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={8.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={15.5} cy={1.5} r={1.5} fill={color} />
        <Circle cx={15.5} cy={1.5} r={1.5} fill={color} />
      </Svg>
    </View>
  );
}

export function Geo({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 10, height: 10, marginVertical: 1.8 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M4.99968 2.5C4.67005 2.5 4.34781 2.59775 4.07373 2.78088C3.79965 2.96402 3.58602 3.22432 3.45988 3.52886C3.33373 3.8334 3.30072 4.16852 3.36503 4.49182C3.42934 4.81512 3.58808 5.11209 3.82117 5.34518C4.05425 5.57827 4.35123 5.737 4.67453 5.80131C4.99783 5.86562 5.33295 5.83261 5.63749 5.70647C5.94204 5.58032 6.20234 5.3667 6.38547 5.09262C6.56861 4.81854 6.66636 4.4963 6.66636 4.16667C6.66636 3.72464 6.49076 3.30072 6.1782 2.98816C5.86564 2.67559 5.44171 2.5 4.99968 2.5ZM4.99968 5C4.83486 5 4.67375 4.95113 4.53671 4.85956C4.39966 4.76799 4.29285 4.63784 4.22978 4.48557C4.16671 4.3333 4.1502 4.16574 4.18236 4.00409C4.21451 3.84244 4.29388 3.69396 4.41042 3.57741C4.52697 3.46087 4.67546 3.3815 4.83711 3.34935C4.99876 3.31719 5.16631 3.33369 5.31859 3.39677C5.47086 3.45984 5.60101 3.56665 5.69258 3.70369C5.78415 3.84073 5.83302 4.00185 5.83302 4.16667C5.83302 4.38768 5.74522 4.59964 5.58894 4.75592C5.43266 4.9122 5.2207 5 4.99968 5Z"
          fill={color}
        />
        <Path
          d="M5.00014 10.0001C4.64928 10.0019 4.3031 9.9196 3.99058 9.76011C3.67806 9.60063 3.4083 9.36859 3.20388 9.08343C1.61596 6.89301 0.810547 5.24635 0.810547 4.18885C0.810547 3.0777 1.25195 2.01207 2.03765 1.22637C2.82335 0.440668 3.88899 -0.000732422 5.00014 -0.000732422C6.11128 -0.000732422 7.17692 0.440668 7.96262 1.22637C8.74832 2.01207 9.18973 3.0777 9.18973 4.18885C9.18973 5.24635 8.38431 6.89301 6.79639 9.08343C6.59197 9.36859 6.32221 9.60063 6.00969 9.76011C5.69717 9.9196 5.35099 10.0019 5.00014 10.0001ZM5.00014 0.90885C4.13031 0.909843 3.29639 1.25582 2.68133 1.87088C2.06627 2.48594 1.72029 3.31985 1.7193 4.18968C1.7193 5.02718 2.50805 6.57593 3.93972 8.55051C4.06126 8.71792 4.22071 8.85417 4.40502 8.94812C4.58933 9.04207 4.79326 9.09105 5.00014 9.09105C5.20701 9.09105 5.41095 9.04207 5.59526 8.94812C5.77957 8.85417 5.93901 8.71792 6.06055 8.55051C7.49222 6.57593 8.28097 5.02718 8.28097 4.18968C8.27998 3.31985 7.934 2.48594 7.31894 1.87088C6.70388 1.25582 5.86996 0.909843 5.00014 0.90885Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function Like({ color = "#FE554A" }) {
  return (
    <View style={[styles.view, { width: 17, height: 15 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M12.3954 0.35791C11.5977 0.370317 10.8175 0.592973 10.1335 1.00339C9.44944 1.41381 8.88582 1.99747 8.49952 2.69541C8.11322 1.99747 7.5496 1.41381 6.86556 1.00339C6.18153 0.592973 5.40131 0.370317 4.60369 0.35791C3.33219 0.413154 2.13423 0.969382 1.27154 1.90507C0.40884 2.84077 -0.0484671 4.07987 -0.000477137 5.35166C-0.000477137 8.57245 3.38961 12.09 6.23285 14.475C6.86767 15.0085 7.67031 15.3009 8.49952 15.3009C9.32873 15.3009 10.1314 15.0085 10.7662 14.475C13.6094 12.09 16.9995 8.57245 16.9995 5.35166C17.0475 4.07987 16.5902 2.84077 15.7275 1.90507C14.8648 0.969382 13.6669 0.413154 12.3954 0.35791Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function UnLike({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 17, height: 15 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M12.3954 0.35791C11.5977 0.370317 10.8175 0.592973 10.1335 1.00339C9.44944 1.41381 8.88582 1.99747 8.49952 2.69541C8.11322 1.99747 7.5496 1.41381 6.86556 1.00339C6.18153 0.592973 5.40131 0.370317 4.60369 0.35791C3.33219 0.413154 2.13423 0.969382 1.27154 1.90507C0.40884 2.84077 -0.0484671 4.07987 -0.000477137 5.35166C-0.000477137 8.57245 3.38961 12.09 6.23285 14.475C6.86767 15.0085 7.67031 15.3009 8.49952 15.3009C9.32873 15.3009 10.1314 15.0085 10.7662 14.475C13.6094 12.09 16.9995 8.57245 16.9995 5.35166C17.0475 4.07987 16.5902 2.84077 15.7275 1.90507C14.8648 0.969382 13.6669 0.413154 12.3954 0.35791Z"
          stoke={color}
          strokeWidth={10}
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function Comments({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 17, height: 15 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M13.3333 0H2.66667C1.95942 0 1.28115 0.280952 0.781049 0.781049C0.280952 1.28115 0 1.95942 0 2.66667L0 10.6667C0 11.3739 0.280952 12.0522 0.781049 12.5523C1.28115 13.0524 1.95942 13.3333 2.66667 13.3333H4.6L7.56733 15.842C7.68771 15.9439 7.8403 15.9998 7.998 15.9998C8.1557 15.9998 8.30829 15.9439 8.42867 15.842L11.4 13.3333H13.3333C14.0406 13.3333 14.7189 13.0524 15.219 12.5523C15.719 12.0522 16 11.3739 16 10.6667V2.66667C16 1.95942 15.719 1.28115 15.219 0.781049C14.7189 0.280952 14.0406 0 13.3333 0V0ZM14.6667 10.6667C14.6667 11.0203 14.5262 11.3594 14.2761 11.6095C14.0261 11.8595 13.687 12 13.3333 12H11.4C11.0849 12.0001 10.7799 12.1118 10.5393 12.3153L8 14.46L5.462 12.3153C5.22104 12.1115 4.9156 11.9998 4.6 12H2.66667C2.31304 12 1.97391 11.8595 1.72386 11.6095C1.47381 11.3594 1.33333 11.0203 1.33333 10.6667V2.66667C1.33333 2.31304 1.47381 1.97391 1.72386 1.72386C1.97391 1.47381 2.31304 1.33333 2.66667 1.33333H13.3333C13.687 1.33333 14.0261 1.47381 14.2761 1.72386C14.5262 1.97391 14.6667 2.31304 14.6667 2.66667V10.6667Z"
          fill={color}
        />
        <Path
          d="M4.66667 4.66659H8C8.17681 4.66659 8.34638 4.59635 8.4714 4.47133C8.59643 4.3463 8.66667 4.17673 8.66667 3.99992C8.66667 3.82311 8.59643 3.65354 8.4714 3.52851C8.34638 3.40349 8.17681 3.33325 8 3.33325H4.66667C4.48986 3.33325 4.32029 3.40349 4.19526 3.52851C4.07024 3.65354 4 3.82311 4 3.99992C4 4.17673 4.07024 4.3463 4.19526 4.47133C4.32029 4.59635 4.48986 4.66659 4.66667 4.66659Z"
          fill={color}
        />
        <Path
          d="M11.3333 6H4.66667C4.48986 6 4.32029 6.07024 4.19526 6.19526C4.07024 6.32029 4 6.48985 4 6.66667C4 6.84348 4.07024 7.01304 4.19526 7.13807C4.32029 7.26309 4.48986 7.33333 4.66667 7.33333H11.3333C11.5101 7.33333 11.6797 7.26309 11.8047 7.13807C11.9298 7.01304 12 6.84348 12 6.66667C12 6.48985 11.9298 6.32029 11.8047 6.19526C11.6797 6.07024 11.5101 6 11.3333 6Z"
          fill={color}
        />
        <Path
          d="M11.3333 8.66675H4.66667C4.48986 8.66675 4.32029 8.73699 4.19526 8.86201C4.07024 8.98704 4 9.15661 4 9.33342C4 9.51023 4.07024 9.6798 4.19526 9.80483C4.32029 9.92985 4.48986 10.0001 4.66667 10.0001H11.3333C11.5101 10.0001 11.6797 9.92985 11.8047 9.80483C11.9298 9.6798 12 9.51023 12 9.33342C12 9.15661 11.9298 8.98704 11.8047 8.86201C11.6797 8.73699 11.5101 8.66675 11.3333 8.66675Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function Reptiler({ color = colorRef }) {
  return (
    <View style={[styles.view, { width: 17, height: 15 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M15.3333 14.0001C15.1564 14.0001 14.9869 13.9298 14.8619 13.8048C14.7368 13.6798 14.6666 13.5102 14.6666 13.3334C14.6655 12.2729 14.2438 11.2561 13.4938 10.5062C12.7439 9.75624 11.7271 9.33447 10.6666 9.33341H6.77993V10.3907C6.77987 10.6544 6.70164 10.9121 6.55513 11.1314C6.40862 11.3506 6.2004 11.5214 5.9568 11.6223C5.7132 11.7232 5.44516 11.7496 5.18655 11.6982C4.92795 11.6468 4.6904 11.5198 4.50393 11.3334L0.584596 7.41408C0.209654 7.03903 -0.000976563 6.53041 -0.000976562 6.00008C-0.000976563 5.46975 0.209654 4.96114 0.584596 4.58608L4.50393 0.66675C4.6904 0.480337 4.92795 0.353395 5.18655 0.301972C5.44516 0.250548 5.7132 0.276952 5.9568 0.377846C6.2004 0.478739 6.40862 0.649592 6.55513 0.868805C6.70164 1.08802 6.77987 1.34575 6.77993 1.60942V2.66675H9.99992C11.5907 2.66851 13.1158 3.30122 14.2406 4.42606C15.3655 5.55089 15.9982 7.07599 15.9999 8.66675V13.3334C15.9999 13.5102 15.9297 13.6798 15.8047 13.8048C15.6796 13.9298 15.5101 14.0001 15.3333 14.0001ZM5.44659 1.60942L1.52726 5.52875C1.40228 5.65377 1.33207 5.82331 1.33207 6.00008C1.33207 6.17686 1.40228 6.3464 1.52726 6.47141L5.44659 10.3907V8.66675C5.44659 8.48994 5.51683 8.32037 5.64186 8.19534C5.76688 8.07032 5.93645 8.00008 6.11326 8.00008H10.6666C11.4236 7.99985 12.172 8.16113 12.8618 8.47314C13.5516 8.78514 14.1669 9.24071 14.6666 9.80941V8.66675C14.6652 7.4295 14.1731 6.24334 13.2982 5.36848C12.4233 4.49361 11.2372 4.00149 9.99992 4.00008H6.11326C5.93645 4.00008 5.76688 3.92984 5.64186 3.80482C5.51683 3.6798 5.44659 3.51023 5.44659 3.33342V1.60942Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

export function Gallery({ color = "#68ABE8" }) {
  return (
    <View style={[styles.view, { width: 18, height: 18 }]}>
      <Svg height="100%" width="100%">
        <Path
          d="M14.25 0H3.75C2.7558 0.00119089 1.80267 0.396661 1.09966 1.09966C0.396661 1.80267 0.00119089 2.7558 0 3.75L0 14.25C0.00119089 15.2442 0.396661 16.1973 1.09966 16.9003C1.80267 17.6033 2.7558 17.9988 3.75 18H14.25C15.2442 17.9988 16.1973 17.6033 16.9003 16.9003C17.6033 16.1973 17.9988 15.2442 18 14.25V3.75C17.9988 2.7558 17.6033 1.80267 16.9003 1.09966C16.1973 0.396661 15.2442 0.00119089 14.25 0V0ZM3.75 1.5H14.25C14.8467 1.5 15.419 1.73705 15.841 2.15901C16.2629 2.58097 16.5 3.15326 16.5 3.75V14.25C16.4987 14.5841 16.4218 14.9136 16.275 15.2137L9.40275 8.3415C9.05452 7.99318 8.64108 7.71686 8.18604 7.52835C7.73101 7.33983 7.24329 7.2428 6.75075 7.2428C6.25821 7.2428 5.77049 7.33983 5.31546 7.52835C4.86042 7.71686 4.44698 7.99318 4.09875 8.3415L1.5 10.9395V3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5ZM3.75 16.5C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V13.0605L5.1585 9.402C5.36745 9.19292 5.61555 9.02705 5.88863 8.91389C6.16171 8.80073 6.4544 8.74248 6.75 8.74248C7.0456 8.74248 7.33829 8.80073 7.61137 8.91389C7.88445 9.02705 8.13255 9.19292 8.3415 9.402L15.2137 16.275C14.9136 16.4218 14.5841 16.4987 14.25 16.5H3.75Z"
          fill={color}
        />
        <Path
          d="M12 7.875C12.5192 7.875 13.0267 7.72105 13.4584 7.43261C13.8901 7.14417 14.2265 6.7342 14.4252 6.25455C14.6239 5.77489 14.6758 5.24709 14.5746 4.73789C14.4733 4.22869 14.2233 3.76096 13.8562 3.39385C13.489 3.02673 13.0213 2.77673 12.5121 2.67544C12.0029 2.57415 11.4751 2.62614 10.9955 2.82482C10.5158 3.0235 10.1058 3.35995 9.81739 3.79163C9.52895 4.22331 9.375 4.73083 9.375 5.25C9.375 5.94619 9.65156 6.61387 10.1438 7.10616C10.6361 7.59844 11.3038 7.875 12 7.875ZM12 4.125C12.2225 4.125 12.44 4.19098 12.625 4.3146C12.81 4.43821 12.9542 4.61392 13.0394 4.81948C13.1245 5.02505 13.1468 5.25125 13.1034 5.46948C13.06 5.68771 12.9528 5.88816 12.7955 6.0455C12.6382 6.20283 12.4377 6.30998 12.2195 6.35338C12.0012 6.39679 11.775 6.37451 11.5695 6.28937C11.3639 6.20422 11.1882 6.06002 11.0646 5.87502C10.941 5.69001 10.875 5.47251 10.875 5.25C10.875 4.95163 10.9935 4.66548 11.2045 4.45451C11.4155 4.24353 11.7016 4.125 12 4.125Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}
