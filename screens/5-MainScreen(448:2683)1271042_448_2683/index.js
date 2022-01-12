import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57f8/791b/a18315ed33cf0bc769d67f5d71a4eccb"
        }}
        style={styles.ImageBackground_448_2693}
      />
      <View style={styles.View_448_2703}>
        <Text style={styles.Text_448_2703}>Select Assignee</Text>
      </View>
      <View style={styles.View_448_2704}>
        <View style={styles.View_I448_2704_312_1114}>
          <View style={styles.View_I448_2704_312_1115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe5/9289/a5fb3acc80832934fdc0f8d284db9712"
            }}
            style={styles.ImageBackground_I448_2704_312_1116}
          />
          <View style={styles.View_I448_2704_312_1117} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83f7/4ba4/24c4f541b7faecc852b161aed8343702"
          }}
          style={styles.ImageBackground_I448_2704_312_1118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3690/b526/ec4eccfb46e3c7430c0795b8087d80b9"
          }}
          style={styles.ImageBackground_I448_2704_312_1122}
        />
        <View style={styles.View_I448_2704_312_1127}>
          <Text style={styles.Text_I448_2704_312_1127}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_465_6797}>
        <View style={styles.View_448_2724} />
        <View style={styles.View_448_2770}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfdd/22dd/3485168c219e3efd761cac589a27df2e"
            }}
            style={styles.ImageBackground_I448_2770_262_2636}
          />
        </View>
        <View style={styles.View_448_2725}>
          <Text style={styles.Text_448_2725}>Search...</Text>
        </View>
      </View>
      <View style={styles.View_448_2740} />
      <View style={styles.View_448_2791}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ed4/9a9f/9aea1a774f4fa733b9f930a88cad2cdd"
          }}
          style={styles.ImageBackground_448_2773}
        />
        <View style={styles.View_448_2775}>
          <Text style={styles.Text_448_2775}>Robert Fox</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810b/d304/ca71a3eb3d8a406b8d82f24da9161d55"
          }}
          style={styles.ImageBackground_448_2785}
        />
      </View>
      <View style={styles.View_448_2792}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/e975/b104061d9c1921d7a709fe7b97d85bcd"
          }}
          style={styles.ImageBackground_I448_2792_448_2773}
        />
        <View style={styles.View_I448_2792_448_2775}>
          <Text style={styles.Text_I448_2792_448_2775}>Darlene Robertson</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2792_448_2785}
        />
      </View>
      <View style={styles.View_448_2798}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9638/bf40/84de14a55f24c87e84727c214bc663bd"
          }}
          style={styles.ImageBackground_I448_2798_448_2773}
        />
        <View style={styles.View_I448_2798_448_2775}>
          <Text style={styles.Text_I448_2798_448_2775}>Savannah Nguyen</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810b/d304/ca71a3eb3d8a406b8d82f24da9161d55"
          }}
          style={styles.ImageBackground_I448_2798_448_2785}
        />
      </View>
      <View style={styles.View_448_2804}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5a5/8ba2/7f5be96cee676ab0acbd60af7cf8091f"
          }}
          style={styles.ImageBackground_I448_2804_448_2773}
        />
        <View style={styles.View_I448_2804_448_2775}>
          <Text style={styles.Text_I448_2804_448_2775}>Courtney Henry</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2804_448_2785}
        />
      </View>
      <View style={styles.View_448_2810}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ed4/9a9f/9aea1a774f4fa733b9f930a88cad2cdd"
          }}
          style={styles.ImageBackground_I448_2810_448_2773}
        />
        <View style={styles.View_I448_2810_448_2775}>
          <Text style={styles.Text_I448_2810_448_2775}>Eleanor Pena</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2810_448_2785}
        />
      </View>
      <View style={styles.View_448_2816}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ad/4b0f/eb11b2408f403ce016577d33923db38d"
          }}
          style={styles.ImageBackground_I448_2816_448_2773}
        />
        <View style={styles.View_I448_2816_448_2775}>
          <Text style={styles.Text_I448_2816_448_2775}>Albert Flores</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2816_448_2785}
        />
      </View>
      <View style={styles.View_448_2822}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d48d/8744/69e977791bb30c8eb7cf73dd4822903c"
          }}
          style={styles.ImageBackground_I448_2822_448_2773}
        />
        <View style={styles.View_I448_2822_448_2775}>
          <Text style={styles.Text_I448_2822_448_2775}>Kristin Watson</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2822_448_2785}
        />
      </View>
      <View style={styles.View_448_2847}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9638/bf40/84de14a55f24c87e84727c214bc663bd"
          }}
          style={styles.ImageBackground_I448_2847_448_2773}
        />
        <View style={styles.View_I448_2847_448_2775}>
          <Text style={styles.Text_I448_2847_448_2775}>Savannah Nguyen</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2847_448_2785}
        />
      </View>
      <View style={styles.View_448_2828}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/e975/b104061d9c1921d7a709fe7b97d85bcd"
          }}
          style={styles.ImageBackground_I448_2828_448_2773}
        />
        <View style={styles.View_I448_2828_448_2775}>
          <Text style={styles.Text_I448_2828_448_2775}>Leslie Alexander</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2828_448_2785}
        />
      </View>
      <View style={styles.View_448_2848}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efc/e975/b104061d9c1921d7a709fe7b97d85bcd"
          }}
          style={styles.ImageBackground_I448_2848_448_2773}
        />
        <View style={styles.View_I448_2848_448_2775}>
          <Text style={styles.Text_I448_2848_448_2775}>Floyd Miles</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2848_448_2785}
        />
      </View>
      <View style={styles.View_448_2834}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9638/bf40/84de14a55f24c87e84727c214bc663bd"
          }}
          style={styles.ImageBackground_I448_2834_448_2773}
        />
        <View style={styles.View_I448_2834_448_2775}>
          <Text style={styles.Text_I448_2834_448_2775}>Bessie Cooper</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2834_448_2785}
        />
      </View>
      <View style={styles.View_448_2849}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5a5/8ba2/7f5be96cee676ab0acbd60af7cf8091f"
          }}
          style={styles.ImageBackground_I448_2849_448_2773}
        />
        <View style={styles.View_I448_2849_448_2775}>
          <Text style={styles.Text_I448_2849_448_2775}>Ralph Edwards</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2849_448_2785}
        />
      </View>
      <View style={styles.View_448_2840}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5a5/8ba2/7f5be96cee676ab0acbd60af7cf8091f"
          }}
          style={styles.ImageBackground_I448_2840_448_2773}
        />
        <View style={styles.View_I448_2840_448_2775}>
          <Text style={styles.Text_I448_2840_448_2775}>Floyd Miles</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2840_448_2785}
        />
      </View>
      <View style={styles.View_448_2850}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d48d/8744/69e977791bb30c8eb7cf73dd4822903c"
          }}
          style={styles.ImageBackground_I448_2850_448_2773}
        />
        <View style={styles.View_I448_2850_448_2775}>
          <Text style={styles.Text_I448_2850_448_2775}>Devon Lane</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/94ed/ad07f64870c3c48a4b38a6f90363658d"
          }}
          style={styles.ImageBackground_I448_2850_448_2785}
        />
      </View>
      <View style={styles.View_448_2937}>
        <View style={styles.View_448_2930}>
          <View style={styles.View_448_2931} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6abb/77be/444b657f13e6705f0a70cb0411f69a07"
          }}
          style={styles.ImageBackground_448_2935}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("142%") },
  ImageBackground_448_2693: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_448_2703: {
    width: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_448_2703: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2704: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I448_2704_312_1114: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%")
  },
  View_I448_2704_312_1115: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I448_2704_312_1116: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I448_2704_312_1117: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(85, 85, 85, 1)"
  },
  ImageBackground_I448_2704_312_1118: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I448_2704_312_1122: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I448_2704_312_1127: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I448_2704_312_1127: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_465_6797: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_448_2724: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 244, 244, 1)",
    borderWidth: 1
  },
  View_448_2770: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I448_2770_262_2636: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_448_2725: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_448_2725: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2740: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_448_2791: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_448_2775: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2792: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2792_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2792_448_2775: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2792_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2792_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2798: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2798_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2798_448_2775: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2798_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2798_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2804: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2804_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2804_448_2775: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2804_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2804_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2810: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2810_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2810_448_2775: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2810_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2810_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2816: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2816_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2816_448_2775: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2816_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2816_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2822: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2822_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2822_448_2775: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2822_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2822_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2847: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2847_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2847_448_2775: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2847_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2847_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2828: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2828_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2828_448_2775: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2828_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2828_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2848: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("114%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2848_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2848_448_2775: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2848_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2848_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2834: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2834_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2834_448_2775: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2834_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2834_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2849: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("121%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2849_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2849_448_2775: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2849_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2849_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2840: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2840_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2840_448_2775: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2840_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2840_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2850: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("129%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I448_2850_448_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I448_2850_448_2775: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I448_2850_448_2775: {
    color: "rgba(30, 30, 30, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I448_2850_448_2785: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("1%")
  },
  View_448_2937: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("124%")
  },
  View_448_2930: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_448_2931: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  ImageBackground_448_2935: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
