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
      <View style={styles.View_312_3379}>
        <View style={styles.View_I312_3379_312_1142} />
      </View>
      <View style={styles.View_312_3380}>
        <View style={styles.View_I312_3380_312_1113} />
        <View style={styles.View_I312_3380_312_1114}>
          <View style={styles.View_I312_3380_312_1115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad06/a8e4/2962da03b81febdac97265c9b9fc2aa0"
            }}
            style={styles.ImageBackground_I312_3380_312_1116}
          />
          <View style={styles.View_I312_3380_312_1117} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8779/28f0/0859b872ba0abdf95156afe6b360c58e"
          }}
          style={styles.ImageBackground_I312_3380_312_1118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a810/701e/1400f2a1749cad404695456edaaf209b"
          }}
          style={styles.ImageBackground_I312_3380_312_1122}
        />
        <View style={styles.View_I312_3380_312_1127}>
          <Text style={styles.Text_I312_3380_312_1127}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_312_3381}>
        <Text style={styles.Text_312_3381}>I want to organize my events.</Text>
      </View>
      <View style={styles.View_312_3383}>
        <View style={styles.View_I312_3383_312_1157}>
          <Text style={styles.Text_I312_3383_312_1157}>Verify</Text>
        </View>
      </View>
      <View style={styles.View_312_3384}>
        <View style={styles.View_I312_3384_116_70} />
        <View style={styles.View_I312_3384_116_71}>
          <Text style={styles.Text_I312_3384_116_71}>|Email Address</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52d0/814d/b4db3bd9efa8f2b4f4a964f987a640c0"
        }}
        style={styles.ImageBackground_312_3395}
      />
      <View style={styles.View_430_3485}>
        <View style={styles.View_I430_3485_430_3369}>
          <View style={styles.View_I430_3485_430_3370}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a9c/e218/361a972ce1de25b8d691706bf7bd770c"
              }}
              style={styles.ImageBackground_I430_3485_430_3371}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/040f/e931/810fbbdca9b922df2cb6552803332d97"
              }}
              style={styles.ImageBackground_I430_3485_430_3372}
            />
            <View style={styles.View_I430_3485_430_3374}>
              <View style={styles.View_I430_3485_430_3375}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89f0/a692/91b9bc9f5cac3555b242912218f43589"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3376}
                />
                <View style={styles.View_I430_3485_430_3377}>
                  <Text style={styles.Text_I430_3485_430_3377}>Done</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3378}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d250/1fdf/4a38a9831e1b7b8c596b5aa2a90df4e7"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3379}
                />
                <View style={styles.View_I430_3485_430_3380}>
                  <Text style={styles.Text_I430_3485_430_3380}>space</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3381}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4f0/8e0f/59cc49b67367ce86b9428be5cf1e8272"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3382}
                />
                <View style={styles.View_I430_3485_430_3383}>
                  <Text style={styles.Text_I430_3485_430_3383}>123</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ea/db61/a32af8bcc7c431549ee4368138b63fb1"
                }}
                style={styles.ImageBackground_I430_3485_430_3384}
              />
              <View style={styles.View_I430_3485_430_3388}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3389}
                />
                <View style={styles.View_I430_3485_430_3390}>
                  <Text style={styles.Text_I430_3485_430_3390}>m</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3391}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3392}
                />
                <View style={styles.View_I430_3485_430_3393}>
                  <Text style={styles.Text_I430_3485_430_3393}>n</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3394}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3395}
                />
                <View style={styles.View_I430_3485_430_3396}>
                  <Text style={styles.Text_I430_3485_430_3396}>b</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3397}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3398}
                />
                <View style={styles.View_I430_3485_430_3399}>
                  <Text style={styles.Text_I430_3485_430_3399}>v</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3400}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3401}
                />
                <View style={styles.View_I430_3485_430_3402}>
                  <Text style={styles.Text_I430_3485_430_3402}>c</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3403}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3404}
                />
                <View style={styles.View_I430_3485_430_3405}>
                  <Text style={styles.Text_I430_3485_430_3405}>x</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3406}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3407}
                />
                <View style={styles.View_I430_3485_430_3408}>
                  <Text style={styles.Text_I430_3485_430_3408}>z</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b10/e8a8/8463d53d919a3eea8173de44260cfb23"
                }}
                style={styles.ImageBackground_I430_3485_430_3409}
              />
              <View style={styles.View_I430_3485_430_3412}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3413}
                />
                <View style={styles.View_I430_3485_430_3414}>
                  <Text style={styles.Text_I430_3485_430_3414}>l</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3415}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3416}
                />
                <View style={styles.View_I430_3485_430_3417}>
                  <Text style={styles.Text_I430_3485_430_3417}>k</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3418}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3419}
                />
                <View style={styles.View_I430_3485_430_3420}>
                  <Text style={styles.Text_I430_3485_430_3420}>j</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3421}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3422}
                />
                <View style={styles.View_I430_3485_430_3423}>
                  <Text style={styles.Text_I430_3485_430_3423}>h</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3424}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3425}
                />
                <View style={styles.View_I430_3485_430_3426}>
                  <Text style={styles.Text_I430_3485_430_3426}>g</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3427}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3428}
                />
                <View style={styles.View_I430_3485_430_3429}>
                  <Text style={styles.Text_I430_3485_430_3429}>f</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3430}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3431}
                />
                <View style={styles.View_I430_3485_430_3432}>
                  <Text style={styles.Text_I430_3485_430_3432}>d</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3433}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3434}
                />
                <View style={styles.View_I430_3485_430_3435}>
                  <Text style={styles.Text_I430_3485_430_3435}>s</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3436}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3437}
                />
                <View style={styles.View_I430_3485_430_3438}>
                  <Text style={styles.Text_I430_3485_430_3438}>a</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3439}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3440}
                />
                <View style={styles.View_I430_3485_430_3441}>
                  <Text style={styles.Text_I430_3485_430_3441}>p</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3442}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3443}
                />
                <View style={styles.View_I430_3485_430_3444}>
                  <Text style={styles.Text_I430_3485_430_3444}>o</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3445}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3446}
                />
                <View style={styles.View_I430_3485_430_3447}>
                  <Text style={styles.Text_I430_3485_430_3447}>i</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3448}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3449}
                />
                <View style={styles.View_I430_3485_430_3450}>
                  <Text style={styles.Text_I430_3485_430_3450}>u</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3451}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3452}
                />
                <View style={styles.View_I430_3485_430_3453}>
                  <Text style={styles.Text_I430_3485_430_3453}>y</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3454}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3455}
                />
                <View style={styles.View_I430_3485_430_3456}>
                  <Text style={styles.Text_I430_3485_430_3456}>t</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3457}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3458}
                />
                <View style={styles.View_I430_3485_430_3459}>
                  <Text style={styles.Text_I430_3485_430_3459}>r</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3460}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3461}
                />
                <View style={styles.View_I430_3485_430_3462}>
                  <Text style={styles.Text_I430_3485_430_3462}>e</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3463}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/b026/19eb4b4b4d6013f44ebeca1878b73397"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3464}
                />
                <View style={styles.View_I430_3485_430_3465}>
                  <Text style={styles.Text_I430_3485_430_3465}>w</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3466}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c6/5110/f0d214fc1d5de529ce90548c87c8811c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3467}
                />
                <View style={styles.View_I430_3485_430_3468}>
                  <Text style={styles.Text_I430_3485_430_3468}>q</Text>
                </View>
              </View>
              <View style={styles.View_I430_3485_430_3469}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab18/1f88/955923c39a4169f1c2284272ca78a21f"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3470}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/193d/dce7/74667aac6a8c82f1d1ab0eb643ab1b87"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3476}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be34/35d3/59d7d84aaf28c5e34633b02c00672f6c"
                  }}
                  style={styles.ImageBackground_I430_3485_430_3477}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/467a/8c39/d72e79f482fc77d791c601f71d199553"
                }}
                style={styles.ImageBackground_I430_3485_430_3478}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_430_3767}>
        <Text style={styles.Text_430_3767}>
          you will receive a verification code on your shared email
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_312_3379: {
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
  View_I312_3379_312_1142: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_312_3380: {
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
  View_I312_3380_312_1113: {
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
  View_I312_3380_312_1114: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%")
  },
  View_I312_3380_312_1115: {
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
  ImageBackground_I312_3380_312_1116: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I312_3380_312_1117: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(85, 85, 85, 1)"
  },
  ImageBackground_I312_3380_312_1118: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I312_3380_312_1122: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I312_3380_312_1127: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I312_3380_312_1127: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_312_3381: {
    width: wp("68%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_312_3381: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_312_3383: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(255, 203, 71, 1)"
  },
  View_I312_3383_312_1157: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I312_3383_312_1157: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_312_3384: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I312_3384_116_70: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(85, 85, 85, 1)",
    borderWidth: 1
  },
  View_I312_3384_116_71: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I312_3384_116_71: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_312_3395: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("-15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("259%")
  },
  View_430_3485: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I430_3485_430_3369: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I430_3485_430_3370: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I430_3485_430_3371: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I430_3485_430_3372: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3374: {
    width: wp("98%"),
    height: hp("39%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I430_3485_430_3375: {
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("24%")
  },
  ImageBackground_I430_3485_430_3376: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3377: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-end"
  },
  Text_I430_3485_430_3377: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I430_3485_430_3378: {
    width: wp("49%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("24%")
  },
  ImageBackground_I430_3485_430_3379: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3380: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-end"
  },
  Text_I430_3485_430_3380: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_I430_3485_430_3381: {
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  ImageBackground_I430_3485_430_3382: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3383: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-end"
  },
  Text_I430_3485_430_3383: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  ImageBackground_I430_3485_430_3384: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_I430_3485_430_3388: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("16%")
  },
  ImageBackground_I430_3485_430_3389: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3390: {
    width: wp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3390: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3391: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("16%")
  },
  ImageBackground_I430_3485_430_3392: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3393: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3393: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3394: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("16%")
  },
  ImageBackground_I430_3485_430_3395: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3396: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3396: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3397: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("16%")
  },
  ImageBackground_I430_3485_430_3398: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3399: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3399: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3400: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("16%")
  },
  ImageBackground_I430_3485_430_3401: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3402: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3402: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3403: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("16%")
  },
  ImageBackground_I430_3485_430_3404: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3405: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3405: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3406: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("16%")
  },
  ImageBackground_I430_3485_430_3407: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3408: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3408: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I430_3485_430_3409: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3412: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3413: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3414: {
    width: wp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3414: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3415: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3416: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3417: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3417: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3418: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3419: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3420: {
    width: wp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3420: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3421: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3422: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3423: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3423: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3424: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3425: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3426: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3426: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3427: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3428: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3429: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3429: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3430: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3431: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3432: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3432: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3433: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3434: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3435: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3435: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3436: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%")
  },
  ImageBackground_I430_3485_430_3437: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3438: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3438: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3439: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3440: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3441: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3441: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3442: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3443: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3444: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3444: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3445: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3446: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3447: {
    width: wp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3447: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3448: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3449: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3450: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3450: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3451: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3452: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3453: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3453: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3454: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3455: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3456: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3456: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3457: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3458: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3459: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3459: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3460: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3461: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3462: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3462: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3463: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3464: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3465: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3465: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3466: {
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I430_3485_430_3467: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I430_3485_430_3468: {
    width: wp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I430_3485_430_3468: {
    color: "rgba(25, 50, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I430_3485_430_3469: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_I430_3485_430_3470: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I430_3485_430_3476: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I430_3485_430_3477: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I430_3485_430_3478: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_430_3767: {
    width: wp("61%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_430_3767: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
