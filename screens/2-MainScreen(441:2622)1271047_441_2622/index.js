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
      <View style={styles.View_441_2623}>
        <View style={styles.View_441_2624} />
        <View style={styles.View_441_2625} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0008/3e59/62d2d30a29ff8b5461cfae3d5d38d2de"
          }}
          style={styles.ImageBackground_441_2626}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c19/1699/cbb62307941d6aee7baf5ce34261704c"
          }}
          style={styles.ImageBackground_441_2627}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7150/d1e9/c758f32751520d8d07ac2e3eea8416b1"
          }}
          style={styles.ImageBackground_441_2628}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32c0/9394/18ab5a5bc2683ae83ea775949f455483"
        }}
        style={styles.ImageBackground_441_2655}
      />
      <View style={styles.View_441_2656}>
        <Text style={styles.Text_441_2656}>Monday, Dec 18</Text>
      </View>
      <View style={styles.View_441_2657}>
        <Text style={styles.Text_441_2657}>Good Morning, Ali</Text>
      </View>
      <View style={styles.View_441_2658}>
        <View style={styles.View_441_2659} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb02/c624/572e73e33bf1df9cd84b0945c993018b"
          }}
          style={styles.ImageBackground_441_2660}
        />
        <View style={styles.View_441_2662}>
          <Text style={styles.Text_441_2662}>Blockers</Text>
        </View>
        <View style={styles.View_441_2663}>
          <Text style={styles.Text_441_2663}>06</Text>
        </View>
        <View style={styles.View_441_2664}>
          <Text style={styles.Text_441_2664}>Penging</Text>
        </View>
        <View style={styles.View_441_2665}>
          <Text style={styles.Text_441_2665}>06</Text>
        </View>
        <View style={styles.View_441_2666}>
          <Text style={styles.Text_441_2666}>Ongoing</Text>
        </View>
        <View style={styles.View_441_2667}>
          <Text style={styles.Text_441_2667}>24</Text>
        </View>
        <View style={styles.View_441_2668}>
          <Text style={styles.Text_441_2668}>Complete</Text>
        </View>
        <View style={styles.View_441_2669}>
          <Text style={styles.Text_441_2669}>12</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f973/4e3a/08f7ca98c805887ccda3cb829975fd59"
          }}
          style={styles.ImageBackground_441_2670}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f973/4e3a/08f7ca98c805887ccda3cb829975fd59"
          }}
          style={styles.ImageBackground_441_2671}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f973/4e3a/08f7ca98c805887ccda3cb829975fd59"
          }}
          style={styles.ImageBackground_441_2672}
        />
      </View>
      <View style={styles.View_441_2673}>
        <Text style={styles.Text_441_2673}>Task Overview</Text>
      </View>
      <View style={styles.View_465_6509}>
        <View style={styles.View_441_2674}>
          <Text style={styles.Text_441_2674}>all time</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c46c/0854/f39a045e2ccc8f23effd8f039bdd2382"
          }}
          style={styles.ImageBackground_441_2675}
        />
      </View>
      <View style={styles.View_441_2898}>
        <View style={styles.View_441_2899} />
        <View style={styles.View_441_2900}>
          <View style={styles.View_441_2901} />
          <View style={styles.View_441_2902}>
            <Text style={styles.Text_441_2902}>Tasks</Text>
          </View>
        </View>
        <View style={styles.View_441_2903}>
          <View style={styles.View_441_2904} />
          <View style={styles.View_441_2905}>
            <Text style={styles.Text_441_2905}>Events</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_448_2956}>
        <View style={styles.View_448_2957}>
          <View style={styles.View_448_2958} />
          <View style={styles.View_448_2959} />
          <View style={styles.View_448_2960}>
            <Text style={styles.Text_448_2960}>22 Apr</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d3a/5fc7/d5156c470a8b441aac3cf6dbe90222ab"
            }}
            style={styles.ImageBackground_448_2961}
          />
          <View style={styles.View_448_2962}>
            <Text style={styles.Text_448_2962}>Los Angeles, LA</Text>
          </View>
          <View style={styles.View_448_2963}>
            <Text style={styles.Text_448_2963}>New Year Party</Text>
          </View>
        </View>
        <View style={styles.View_448_2964}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b7/9443/b999d56ef2964f8b11e8695fae9a184b"
            }}
            style={styles.ImageBackground_448_2965}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e070/dac0/ee4f573441b0bab96c8ce7404b713679"
            }}
            style={styles.ImageBackground_448_2966}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c83e/c4a3/5fae8c17374509a6f0ff334f046fdc51"
            }}
            style={styles.ImageBackground_448_2967}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e01/466a/86b210bf052d2ae6f24ddbaa76e283be"
            }}
            style={styles.ImageBackground_448_2968}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26c2/97fe/037ccbcd43d6a9e417a4b2dda28ce80d"
            }}
            style={styles.ImageBackground_448_2969}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55f/a4cb/52cc82e2c4d7fbbd8b8baf722a340e6c"
            }}
            style={styles.ImageBackground_448_2970}
          />
        </View>
      </View>
      <View style={styles.View_448_2973}>
        <View style={styles.View_448_2974}>
          <View style={styles.View_448_2975} />
          <View style={styles.View_448_2976} />
          <View style={styles.View_448_2977}>
            <Text style={styles.Text_448_2977}>22 Apr</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d3a/5fc7/d5156c470a8b441aac3cf6dbe90222ab"
            }}
            style={styles.ImageBackground_448_2978}
          />
          <View style={styles.View_448_2979}>
            <Text style={styles.Text_448_2979}>Los Angeles, LA</Text>
          </View>
          <View style={styles.View_448_2980}>
            <Text style={styles.Text_448_2980}>New Year Party</Text>
          </View>
        </View>
        <View style={styles.View_448_2981}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b7/9443/b999d56ef2964f8b11e8695fae9a184b"
            }}
            style={styles.ImageBackground_448_2982}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e070/dac0/ee4f573441b0bab96c8ce7404b713679"
            }}
            style={styles.ImageBackground_448_2983}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c83e/c4a3/5fae8c17374509a6f0ff334f046fdc51"
            }}
            style={styles.ImageBackground_448_2984}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e01/466a/86b210bf052d2ae6f24ddbaa76e283be"
            }}
            style={styles.ImageBackground_448_2985}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26c2/97fe/037ccbcd43d6a9e417a4b2dda28ce80d"
            }}
            style={styles.ImageBackground_448_2986}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55f/a4cb/52cc82e2c4d7fbbd8b8baf722a340e6c"
            }}
            style={styles.ImageBackground_448_2987}
          />
        </View>
      </View>
      <View style={styles.View_448_2990}>
        <View style={styles.View_448_2991}>
          <View style={styles.View_448_2992} />
          <View style={styles.View_448_2993} />
          <View style={styles.View_448_2994}>
            <Text style={styles.Text_448_2994}>22 Apr</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d01/dd2a/5daa95b4892beb4ffd078f2d366f013e"
            }}
            style={styles.ImageBackground_448_2995}
          />
          <View style={styles.View_448_2996}>
            <Text style={styles.Text_448_2996}>Los Angeles, LA</Text>
          </View>
          <View style={styles.View_448_2997}>
            <Text style={styles.Text_448_2997}>Wahab’s Wedding highlights</Text>
          </View>
        </View>
        <View style={styles.View_448_2998}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b7/9443/b999d56ef2964f8b11e8695fae9a184b"
            }}
            style={styles.ImageBackground_448_2999}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e070/dac0/ee4f573441b0bab96c8ce7404b713679"
            }}
            style={styles.ImageBackground_448_3000}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c83e/c4a3/5fae8c17374509a6f0ff334f046fdc51"
            }}
            style={styles.ImageBackground_448_3001}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e01/466a/86b210bf052d2ae6f24ddbaa76e283be"
            }}
            style={styles.ImageBackground_448_3002}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26c2/97fe/037ccbcd43d6a9e417a4b2dda28ce80d"
            }}
            style={styles.ImageBackground_448_3003}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55f/a4cb/52cc82e2c4d7fbbd8b8baf722a340e6c"
            }}
            style={styles.ImageBackground_448_3004}
          />
        </View>
      </View>
      <View style={styles.View_448_3007}>
        <View style={styles.View_448_3008}>
          <View style={styles.View_448_3009} />
          <View style={styles.View_448_3010} />
          <View style={styles.View_448_3011}>
            <Text style={styles.Text_448_3011}>22 Apr</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d01/dd2a/5daa95b4892beb4ffd078f2d366f013e"
            }}
            style={styles.ImageBackground_448_3012}
          />
          <View style={styles.View_448_3013}>
            <Text style={styles.Text_448_3013}>Los Angeles, LA</Text>
          </View>
          <View style={styles.View_448_3014}>
            <Text style={styles.Text_448_3014}>Wahab’s Wedding highlights</Text>
          </View>
        </View>
        <View style={styles.View_448_3015}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b7/9443/b999d56ef2964f8b11e8695fae9a184b"
            }}
            style={styles.ImageBackground_448_3016}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e070/dac0/ee4f573441b0bab96c8ce7404b713679"
            }}
            style={styles.ImageBackground_448_3017}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c83e/c4a3/5fae8c17374509a6f0ff334f046fdc51"
            }}
            style={styles.ImageBackground_448_3018}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e01/466a/86b210bf052d2ae6f24ddbaa76e283be"
            }}
            style={styles.ImageBackground_448_3019}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26c2/97fe/037ccbcd43d6a9e417a4b2dda28ce80d"
            }}
            style={styles.ImageBackground_448_3020}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55f/a4cb/52cc82e2c4d7fbbd8b8baf722a340e6c"
            }}
            style={styles.ImageBackground_448_3021}
          />
        </View>
      </View>
      <View style={styles.View_448_3086} />
      <View style={styles.View_465_6593}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96e2/9975/88ca6efc9c9726d995c35911c88f95c7"
          }}
          style={styles.ImageBackground_465_6594}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfad/0620/10d57e4f8bfb619700022418efef50f9"
          }}
          style={styles.ImageBackground_465_6597}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e54/55c6/7a9fd1ad5c66e94eb7cd7b641a13cf08"
          }}
          style={styles.ImageBackground_465_6598}
        />
        <View style={styles.View_465_6599} />
        <View style={styles.View_465_6600}>
          <View style={styles.View_465_6601}>
            <View style={styles.View_465_6602} />
            <View style={styles.View_465_6603} />
            <View style={styles.View_465_6604} />
            <View style={styles.View_465_6605} />
          </View>
          <View style={styles.View_465_6606}>
            <Text style={styles.Text_465_6606}>Dashbord</Text>
          </View>
        </View>
        <View style={styles.View_465_6607}>
          <View style={styles.View_465_6608}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b2a/9fda/9dc08649a11f980bce58dbeaee3caddd"
              }}
              style={styles.ImageBackground_I465_6608_982_5646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ea1/a223/3f47e78f7e861a683a2f6e39cd7ab4cd"
              }}
              style={styles.ImageBackground_I465_6608_982_5649}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ea1/a223/3f47e78f7e861a683a2f6e39cd7ab4cd"
              }}
              style={styles.ImageBackground_I465_6608_982_5650}
            />
          </View>
          <View style={styles.View_465_6609}>
            <Text style={styles.Text_465_6609}>Tasks</Text>
          </View>
        </View>
        <View style={styles.View_465_6610}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8000/a0b8/23e09fdd2828690424290b475ce41cd9"
            }}
            style={styles.ImageBackground_465_6611}
          />
          <View style={styles.View_465_6613}>
            <Text style={styles.Text_465_6613}>Teams</Text>
          </View>
        </View>
        <View style={styles.View_465_6614}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/844b/2556/086dcccb5c4dc282764c7886008f2975"
            }}
            style={styles.ImageBackground_465_6615}
          />
          <View style={styles.View_465_6616}>
            <Text style={styles.Text_465_6616}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_450_2795}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/559e/525d/30996e9b655cddda0107ef42553fd3b1"
          }}
          style={styles.ImageBackground_450_2796}
        />
        <View style={styles.View_450_2797}>
          <View style={styles.View_450_2798}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caba/1f44/dbc8fd5a39b411ad2fddd9582f85c799"
              }}
              style={styles.ImageBackground_I450_2798_262_2180}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb02/c624/572e73e33bf1df9cd84b0945c993018b"
            }}
            style={styles.ImageBackground_450_2799}
          />
        </View>
      </View>
      <View style={styles.View_456_6196}>
        <View style={styles.View_456_6197} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e59/5899/498c9c995ad8ce15085755e178e83a38"
          }}
          style={styles.ImageBackground_456_6198}
        />
      </View>
      <View style={styles.View_441_2629}>
        <View style={styles.View_I441_2629_312_1114}>
          <View style={styles.View_I441_2629_312_1115} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad06/a8e4/2962da03b81febdac97265c9b9fc2aa0"
            }}
            style={styles.ImageBackground_I441_2629_312_1116}
          />
          <View style={styles.View_I441_2629_312_1117} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654e/37e8/6ca173b26ac979334fd9c37f98a9d6e2"
          }}
          style={styles.ImageBackground_I441_2629_312_1118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e338/9b78/72c68db9cae8836d87227c836e3b912d"
          }}
          style={styles.ImageBackground_I441_2629_312_1122}
        />
        <View style={styles.View_I441_2629_312_1127}>
          <Text style={styles.Text_I441_2629_312_1127}>9:41</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("142%") },
  View_441_2623: {
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
  View_441_2624: {
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
  View_441_2625: {
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
  ImageBackground_441_2626: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_441_2627: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%")
  },
  ImageBackground_441_2628: {
    width: wp("48%"),
    height: hp("27%"),
    top: hp("-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_441_2655: {
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
  View_441_2656: {
    width: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_441_2656: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2657: {
    width: wp("50%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_441_2657: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2658: {
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
  View_441_2659: {
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
  ImageBackground_441_2660: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_441_2662: {
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
  Text_441_2662: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2663: {
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
  Text_441_2663: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2664: {
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
  Text_441_2664: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2665: {
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
  Text_441_2665: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2666: {
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
  Text_441_2666: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2667: {
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
  Text_441_2667: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2668: {
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
  Text_441_2668: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2669: {
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
  Text_441_2669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_441_2670: {
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
  ImageBackground_441_2671: {
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
  ImageBackground_441_2672: {
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
  View_441_2673: {
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_441_2673: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_465_6509: {
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
  View_441_2674: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_441_2674: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_441_2675: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_441_2898: {
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
  View_441_2899: {
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
  View_441_2900: {
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
  View_441_2901: {
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
  View_441_2902: {
    width: wp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_441_2902: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_441_2903: {
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
  View_441_2904: {
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
  View_441_2905: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_441_2905: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2956: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("50%")
  },
  View_448_2957: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_448_2958: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_2959: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_2960: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_448_2960: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_448_2961: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_448_2962: {
    width: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_448_2962: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2963: {
    width: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_448_2963: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2964: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("14%")
  },
  ImageBackground_448_2965: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_448_2966: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  ImageBackground_448_2967: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_448_2968: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_448_2969: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_448_2970: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_448_2973: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("94%")
  },
  View_448_2974: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_448_2975: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_2976: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_2977: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_448_2977: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_448_2978: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_448_2979: {
    width: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_448_2979: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2980: {
    width: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_448_2980: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2981: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("14%")
  },
  ImageBackground_448_2982: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_448_2983: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  ImageBackground_448_2984: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_448_2985: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_448_2986: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_448_2987: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_448_2990: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%")
  },
  View_448_2991: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_448_2992: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_2993: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_2994: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_448_2994: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_448_2995: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_448_2996: {
    width: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_448_2996: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2997: {
    width: wp("39%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_448_2997: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_2998: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("14%")
  },
  ImageBackground_448_2999: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_448_3000: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  ImageBackground_448_3001: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_448_3002: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_448_3003: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_448_3004: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_448_3007: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("116%")
  },
  View_448_3008: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_448_3009: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_3010: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    backgroundColor: "rgba(247, 247, 247, 1)",
    borderColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1
  },
  View_448_3011: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_448_3011: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_448_3012: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_448_3013: {
    width: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_448_3013: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_3014: {
    width: wp("39%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_448_3014: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_448_3015: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("14%")
  },
  ImageBackground_448_3016: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  ImageBackground_448_3017: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  ImageBackground_448_3018: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_448_3019: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_448_3020: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_448_3021: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_448_3086: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116%")
  },
  View_465_6593: {
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
  ImageBackground_465_6594: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_465_6597: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_465_6598: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_465_6599: {
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
  View_465_6600: {
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
  View_465_6601: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_465_6602: {
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
  View_465_6603: {
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
  View_465_6604: {
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
  View_465_6605: {
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
  View_465_6606: {
    width: wp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_465_6606: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_465_6607: {
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
  View_465_6608: {
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
  ImageBackground_I465_6608_982_5646: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I465_6608_982_5649: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I465_6608_982_5650: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_465_6609: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_465_6609: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_465_6610: {
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
  ImageBackground_465_6611: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_465_6613: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_465_6613: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_465_6614: {
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
  ImageBackground_465_6615: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_465_6616: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_465_6616: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_450_2795: {
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
  ImageBackground_450_2796: {
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
  View_450_2797: {
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
  View_450_2798: {
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
  ImageBackground_I450_2798_262_2180: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_450_2799: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_456_6196: {
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
  View_456_6197: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  ImageBackground_456_6198: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_441_2629: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I441_2629_312_1114: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%")
  },
  View_I441_2629_312_1115: {
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
  ImageBackground_I441_2629_312_1116: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I441_2629_312_1117: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(85, 85, 85, 1)"
  },
  ImageBackground_I441_2629_312_1118: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I441_2629_312_1122: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I441_2629_312_1127: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I441_2629_312_1127: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
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
