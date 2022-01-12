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
      <View style={styles.View_430_3253}>
        <View style={styles.View_I430_3253_312_1142} />
      </View>
      <View style={styles.View_430_3254}>
        <View style={styles.View_I430_3254_312_1113} />
        <View style={styles.View_I430_3254_312_1114}>
          <View style={styles.View_I430_3254_312_1115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad06/a8e4/2962da03b81febdac97265c9b9fc2aa0"
            }}
            style={styles.ImageBackground_I430_3254_312_1116}
          />
          <View style={styles.View_I430_3254_312_1117} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8779/28f0/0859b872ba0abdf95156afe6b360c58e"
          }}
          style={styles.ImageBackground_I430_3254_312_1118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a810/701e/1400f2a1749cad404695456edaaf209b"
          }}
          style={styles.ImageBackground_I430_3254_312_1122}
        />
        <View style={styles.View_I430_3254_312_1127}>
          <Text style={styles.Text_I430_3254_312_1127}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_430_3255}>
        <Text style={styles.Text_430_3255}>Who are you?</Text>
      </View>
      <View style={styles.View_430_3256} />
      <View style={styles.View_430_3257} />
      <View style={styles.View_430_3258}>
        <Text style={styles.Text_430_3258}>Event Planner</Text>
      </View>
      <View style={styles.View_430_3259}>
        <Text style={styles.Text_430_3259}>Freelancer</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e08/22ce/5b1a278114413b19bddff439758fe3f1"
        }}
        style={styles.ImageBackground_430_3321}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad01/c7f7/b02e697a7f93cd1d1becec4941c12ede"
        }}
        style={styles.ImageBackground_430_3341}
      />
      <View style={styles.View_430_3339}>
        <View style={styles.View_430_3340}>
          <Text style={styles.Text_430_3340}>Next</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a7/3130/b125a50caf480596b5bdce498de51d34"
        }}
        style={styles.ImageBackground_430_3366}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_430_3253: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I430_3253_312_1142: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_430_3254: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I430_3254_312_1113: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I430_3254_312_1114: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%")
  },
  View_I430_3254_312_1115: {
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
  ImageBackground_I430_3254_312_1116: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I430_3254_312_1117: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(85, 85, 85, 1)"
  },
  ImageBackground_I430_3254_312_1118: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I430_3254_312_1122: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I430_3254_312_1127: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I430_3254_312_1127: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_430_3255: {
    width: wp("44%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_430_3255: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_430_3256: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("57%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_430_3257: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("57%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_430_3258: {
    width: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_430_3258: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_430_3259: {
    width: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_430_3259: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_430_3321: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_430_3341: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_430_3339: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("111%"),
    backgroundColor: "rgba(255, 203, 71, 1)"
  },
  View_430_3340: {
    width: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_430_3340: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_430_3366: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
