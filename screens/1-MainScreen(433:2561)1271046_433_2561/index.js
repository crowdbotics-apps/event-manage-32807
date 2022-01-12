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
      <View style={styles.View_436_2641}>
        <View style={styles.View_433_2753} />
        <View style={styles.View_436_2640} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0008/3e59/62d2d30a29ff8b5461cfae3d5d38d2de"
          }}
          style={styles.ImageBackground_436_2639}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c19/1699/cbb62307941d6aee7baf5ce34261704c"
          }}
          style={styles.ImageBackground_436_2636}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7150/d1e9/c758f32751520d8d07ac2e3eea8416b1"
          }}
          style={styles.ImageBackground_436_2637}
        />
      </View>
      <View style={styles.View_433_2567}>
        <View style={styles.View_I433_2567_312_1114}>
          <View style={styles.View_I433_2567_312_1115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad06/a8e4/2962da03b81febdac97265c9b9fc2aa0"
            }}
            style={styles.ImageBackground_I433_2567_312_1116}
          />
          <View style={styles.View_I433_2567_312_1117} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654e/37e8/6ca173b26ac979334fd9c37f98a9d6e2"
          }}
          style={styles.ImageBackground_I433_2567_312_1118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e338/9b78/72c68db9cae8836d87227c836e3b912d"
          }}
          style={styles.ImageBackground_I433_2567_312_1122}
        />
        <View style={styles.View_I433_2567_312_1127}>
          <Text style={styles.Text_I433_2567_312_1127}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_442_2919}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96e2/9975/88ca6efc9c9726d995c35911c88f95c7"
          }}
          style={styles.ImageBackground_437_3107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfad/0620/10d57e4f8bfb619700022418efef50f9"
          }}
          style={styles.ImageBackground_437_3112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e54/55c6/7a9fd1ad5c66e94eb7cd7b641a13cf08"
          }}
          style={styles.ImageBackground_437_3113}
        />
        <View style={styles.View_437_3115} />
        <View style={styles.View_442_2915}>
          <View style={styles.View_437_3143}>
            <View style={styles.View_437_3144} />
            <View style={styles.View_437_3145} />
            <View style={styles.View_437_3146} />
            <View style={styles.View_437_3147} />
          </View>
          <View style={styles.View_437_3123}>
            <Text style={styles.Text_437_3123}>Dashbord</Text>
          </View>
        </View>
        <View style={styles.View_442_2911}>
          <View style={styles.View_442_2899}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c469/3f39/4f684535244d39bffe33917b0cde27aa"
              }}
              style={styles.ImageBackground_I442_2899_982_5646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ea1/a223/3f47e78f7e861a683a2f6e39cd7ab4cd"
              }}
              style={styles.ImageBackground_I442_2899_982_5649}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ea1/a223/3f47e78f7e861a683a2f6e39cd7ab4cd"
              }}
              style={styles.ImageBackground_I442_2899_982_5650}
            />
          </View>
          <View style={styles.View_437_3124}>
            <Text style={styles.Text_437_3124}>Tasks</Text>
          </View>
        </View>
        <View style={styles.View_442_2912}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8000/a0b8/23e09fdd2828690424290b475ce41cd9"
            }}
            style={styles.ImageBackground_465_6529}
          />
          <View style={styles.View_437_3125}>
            <Text style={styles.Text_437_3125}>Teams</Text>
          </View>
        </View>
        <View style={styles.View_442_2914}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/844b/2556/086dcccb5c4dc282764c7886008f2975"
            }}
            style={styles.ImageBackground_437_3122}
          />
          <View style={styles.View_437_3126}>
            <Text style={styles.Text_437_3126}>Profile</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32c0/9394/18ab5a5bc2683ae83ea775949f455483"
        }}
        style={styles.ImageBackground_433_2754}
      />
      <View style={styles.View_436_2634}>
        <Text style={styles.Text_436_2634}>Monday, Dec 18</Text>
      </View>
      <View style={styles.View_436_2635}>
        <Text style={styles.Text_436_2635}>Good Morning, Ali</Text>
      </View>
      <View style={styles.View_437_2827}>
        <View style={styles.View_437_2805} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb02/c624/572e73e33bf1df9cd84b0945c993018b"
          }}
          style={styles.ImageBackground_437_2951}
        />
        <View style={styles.View_437_2823}>
          <Text style={styles.Text_437_2823}>Blockers</Text>
        </View>
        <View style={styles.View_437_2824}>
          <Text style={styles.Text_437_2824}>06</Text>
        </View>
        <View style={styles.View_437_2819}>
          <Text style={styles.Text_437_2819}>Penging</Text>
        </View>
        <View style={styles.View_437_2820}>
          <Text style={styles.Text_437_2820}>06</Text>
        </View>
        <View style={styles.View_437_2815}>
          <Text style={styles.Text_437_2815}>Ongoing</Text>
        </View>
        <View style={styles.View_437_2816}>
          <Text style={styles.Text_437_2816}>24</Text>
        </View>
        <View style={styles.View_437_2811}>
          <Text style={styles.Text_437_2811}>Complete</Text>
        </View>
        <View style={styles.View_437_2812}>
          <Text style={styles.Text_437_2812}>12</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f973/4e3a/08f7ca98c805887ccda3cb829975fd59"
          }}
          style={styles.ImageBackground_437_2806}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f973/4e3a/08f7ca98c805887ccda3cb829975fd59"
          }}
          style={styles.ImageBackground_437_2807}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f973/4e3a/08f7ca98c805887ccda3cb829975fd59"
          }}
          style={styles.ImageBackground_437_2808}
        />
      </View>
      <View style={styles.View_437_2829}>
        <Text style={styles.Text_437_2829}>Task Overview</Text>
      </View>
      <View style={styles.View_465_6510}>
        <View style={styles.View_437_2830}>
          <Text style={styles.Text_437_2830}>all time</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c46c/0854/f39a045e2ccc8f23effd8f039bdd2382"
          }}
          style={styles.ImageBackground_437_2831}
        />
      </View>
      <View style={styles.View_442_2692}>
        <View style={styles.View_442_2685} />
        <View style={styles.View_442_2691}>
          <View style={styles.View_442_2686} />
          <View style={styles.View_437_3032}>
            <Text style={styles.Text_437_3032}>Tasks</Text>
          </View>
        </View>
        <View style={styles.View_442_2690}>
          <View style={styles.View_442_2689} />
          <View style={styles.View_437_3086}>
            <Text style={styles.Text_437_3086}>Events</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_442_2684}>
        <View style={styles.View_441_2598}>
          <View style={styles.View_441_2589}>
            <Text style={styles.Text_441_2589}>All</Text>
          </View>
          <View style={styles.View_441_2590}>
            <Text style={styles.Text_441_2590}>Ongoing</Text>
          </View>
          <View style={styles.View_441_2591}>
            <Text style={styles.Text_441_2591}>Pending</Text>
          </View>
          <View style={styles.View_441_2592}>
            <Text style={styles.Text_441_2592}>Blockers</Text>
          </View>
          <View style={styles.View_441_2593}>
            <Text style={styles.Text_441_2593}>Complete</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7e7/c33b/bdb5af5e22f07938f7da4436919e1984"
            }}
            style={styles.ImageBackground_441_2594}
          />
          <View style={styles.View_441_2595} />
        </View>
        <View style={styles.View_442_2663}>
          <View style={styles.View_442_2660}>
            <Text style={styles.Text_442_2660}>New Year Party </Text>
          </View>
          <View style={styles.View_442_2661}>
            <View style={styles.View_442_2588}>
              <Text style={styles.Text_442_2588}>
                Set targets Share media plan and budget Start Campaign Do final
                review of assets
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8452/cfcb/d56bd8a6591399e571531ec2ba09feaa"
              }}
              style={styles.ImageBackground_442_2634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8452/cfcb/d56bd8a6591399e571531ec2ba09feaa"
              }}
              style={styles.ImageBackground_442_2637}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beeb/4093/15061345dbb02aad31cec149cd61dbca"
              }}
              style={styles.ImageBackground_442_2640}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beeb/4093/15061345dbb02aad31cec149cd61dbca"
              }}
              style={styles.ImageBackground_442_2643}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f7/a0af/b34aebe0a0a9c0db4c5dd06e393e2d89"
              }}
              style={styles.ImageBackground_442_2652}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac9b/5b26/429bccc4804fd027a30997cb965b381b"
              }}
              style={styles.ImageBackground_442_2653}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f7/a0af/b34aebe0a0a9c0db4c5dd06e393e2d89"
              }}
              style={styles.ImageBackground_442_2654}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9845/b15c/47b05b47084952e722bf9ca6909c50b2"
              }}
              style={styles.ImageBackground_442_2655}
            />
          </View>
        </View>
        <View style={styles.View_442_2664}>
          <View style={styles.View_442_2665}>
            <Text style={styles.Text_442_2665}>Wahab’s Wedding highlights</Text>
          </View>
          <View style={styles.View_442_2666}>
            <View style={styles.View_442_2667}>
              <Text style={styles.Text_442_2667}>
                Set targets Share media plan and budget Discuss Metrics Do final
                review of assets
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8452/cfcb/d56bd8a6591399e571531ec2ba09feaa"
              }}
              style={styles.ImageBackground_442_2668}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8452/cfcb/d56bd8a6591399e571531ec2ba09feaa"
              }}
              style={styles.ImageBackground_442_2669}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beeb/4093/15061345dbb02aad31cec149cd61dbca"
              }}
              style={styles.ImageBackground_442_2670}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beeb/4093/15061345dbb02aad31cec149cd61dbca"
              }}
              style={styles.ImageBackground_442_2671}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d51/3456/320d51ad1b1928946a4a5302d42c1cb0"
              }}
              style={styles.ImageBackground_442_2672}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b0e/435a/4cd4041788e51b381ac0c3bdef167645"
              }}
              style={styles.ImageBackground_442_2673}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc3/cda8/d54991b3eafbc7e6f2568ef02de99b9f"
              }}
              style={styles.ImageBackground_442_2674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9845/b15c/47b05b47084952e722bf9ca6909c50b2"
              }}
              style={styles.ImageBackground_442_2675}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_441_2906}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559e/525d/30996e9b655cddda0107ef42553fd3b1"
          }}
          style={styles.ImageBackground_442_2708}
        />
        <View style={styles.View_442_2701}>
          <View style={styles.View_442_2702}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caba/1f44/dbc8fd5a39b411ad2fddd9582f85c799"
              }}
              style={styles.ImageBackground_I442_2702_262_2180}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb02/c624/572e73e33bf1df9cd84b0945c993018b"
            }}
            style={styles.ImageBackground_442_2703}
          />
        </View>
      </View>
      <View style={styles.View_442_2872}>
        <View style={styles.View_442_2875}>
          <View style={styles.View_442_2873} />
          <View style={styles.View_442_2874}>
            <Text style={styles.Text_442_2874}>High</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_442_2884}>
        <View style={styles.View_442_2885}>
          <View style={styles.View_442_2886} />
          <View style={styles.View_442_2887}>
            <Text style={styles.Text_442_2887}>Low</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_441_2986}>
        <View style={styles.View_441_2987} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e59/5899/498c9c995ad8ce15085755e178e83a38"
          }}
          style={styles.ImageBackground_441_2997}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("142%") },
  View_436_2641: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_433_2753: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 203, 71, 1)"
  },
  View_436_2640: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_436_2639: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_436_2636: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%")
  },
  ImageBackground_436_2637: {
    width: wp("48%"),
    height: hp("27%"),
    top: hp("-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  View_433_2567: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I433_2567_312_1114: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%")
  },
  View_I433_2567_312_1115: {
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
  ImageBackground_I433_2567_312_1116: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I433_2567_312_1117: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(85, 85, 85, 1)"
  },
  ImageBackground_I433_2567_312_1118: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I433_2567_312_1122: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I433_2567_312_1127: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I433_2567_312_1127: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_442_2919: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133%")
  },
  ImageBackground_437_3107: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_437_3112: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_437_3113: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_437_3115: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_442_2915: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_437_3143: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_437_3144: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(34, 34, 34, 1)",
    borderWidth: 1.5
  },
  View_437_3145: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(34, 34, 34, 1)",
    borderWidth: 1.5
  },
  View_437_3146: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(121, 130, 206, 1)",
    borderColor: "rgba(34, 34, 34, 1)",
    borderWidth: 1.5
  },
  View_437_3147: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(34, 34, 34, 1)",
    borderWidth: 1.5
  },
  View_437_3123: {
    width: wp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_437_3123: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2911: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%")
  },
  View_442_2899: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I442_2899_982_5646: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I442_2899_982_5649: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I442_2899_982_5650: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_437_3124: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_437_3124: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2912: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("2%")
  },
  ImageBackground_465_6529: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_437_3125: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_437_3125: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2914: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%")
  },
  ImageBackground_437_3122: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_437_3126: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_437_3126: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_433_2754: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%")
  },
  View_436_2634: {
    width: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_436_2634: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_436_2635: {
    width: wp("50%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_436_2635: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2827: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_437_2805: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 244, 244, 1)",
    borderWidth: 1
  },
  ImageBackground_437_2951: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_437_2823: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_437_2823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2824: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_437_2824: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2819: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_437_2819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2820: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_437_2820: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2815: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_437_2815: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2816: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_437_2816: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2811: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_437_2811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_437_2812: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_437_2812: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_437_2806: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("8%")
  },
  ImageBackground_437_2807: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("8%")
  },
  ImageBackground_437_2808: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("8%")
  },
  View_437_2829: {
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_437_2829: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_465_6510: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("22%")
  },
  View_437_2830: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_437_2830: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_437_2831: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_442_2692: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%")
  },
  View_442_2685: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 251, 255, 1)"
  },
  View_442_2691: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_442_2686: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 203, 71, 1)"
  },
  View_437_3032: {
    width: wp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_437_3032: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2690: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("1%")
  },
  View_442_2689: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_437_3086: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_437_3086: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2684: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%")
  },
  View_441_2598: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_441_2589: {
    width: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_441_2589: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2590: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_441_2590: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2591: {
    width: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_441_2591: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2592: {
    width: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_441_2592: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2593: {
    width: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_441_2593: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_441_2594: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_441_2595: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 203, 71, 1)"
  },
  View_442_2663: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%")
  },
  View_442_2660: {
    width: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_442_2660: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2661: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_442_2588: {
    width: wp("45%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_442_2588: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_442_2634: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2637: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2640: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2643: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2652: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("13%")
  },
  ImageBackground_442_2653: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("7%")
  },
  ImageBackground_442_2654: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("19%")
  },
  ImageBackground_442_2655: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("1%")
  },
  View_442_2664: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("41%")
  },
  View_442_2665: {
    width: wp("56%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_442_2665: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2666: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_442_2667: {
    width: wp("45%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_442_2667: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_442_2668: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2669: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2670: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2671: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_442_2672: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("1%")
  },
  ImageBackground_442_2673: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("13%")
  },
  ImageBackground_442_2674: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("19%")
  },
  ImageBackground_442_2675: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("7%")
  },
  View_441_2906: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("9%")
  },
  ImageBackground_442_2708: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_442_2701: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_442_2702: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I442_2702_262_2180: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_442_2703: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_442_2872: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("77%")
  },
  View_442_2875: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_442_2873: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 102, 102, 1)",
    opacity: 0.20999999344348907,
    borderColor: "rgba(242, 102, 102, 1)",
    borderWidth: 1
  },
  View_442_2874: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_442_2874: {
    color: "rgba(242, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_442_2884: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("110%")
  },
  View_442_2885: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_442_2886: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(89, 169, 236, 1)",
    opacity: 0.20999999344348907,
    borderColor: "rgba(89, 169, 236, 1)",
    borderWidth: 1
  },
  View_442_2887: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_442_2887: {
    color: "rgba(89, 169, 236, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2986: {
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
  View_441_2987: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  ImageBackground_441_2997: {
    width: wp("6%"),
    height: hp("4%"),
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
