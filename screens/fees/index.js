import React from "react";
import {
   StyleSheet,
   View,
   Text,
   ScrollView,
   TouchableOpacity,
} from "react-native";

import colors from "../../theme/color";

const feesHomeScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               alignItems: "center",
               paddingTop: 30,
               paddingHorizontal: 20,
               backgroundColor: "white",
            }}
         >
            <Text
               style={{
                  fontSize: 24,
                  fontWeight: "700",
                  lineHeight: 24,
                  color: colors.textPrimary,
               }}
            >
               Fees
            </Text>
            <Text
               style={{
                  color: colors.textPrimary,
                  textAlign: "center",
               }}
            >
               Pending fees
            </Text>
            <View style={{ width: "100%", marginTop: 30 }}>
               <View style={{ borderBottomWidth: 1 }}>
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 15,
                     }}
                  >
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Fees to be paid
                     </Text>
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        25000
                     </Text>
                  </View>
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 15,
                     }}
                  >
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Total fees paid
                     </Text>
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        20000
                     </Text>
                  </View>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginTop: 15,
                  }}
               >
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                     Pending fees
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>5000</Text>
               </View>
            </View>
            <TouchableOpacity
               style={{
                  backgroundColor: "#3283c9",
                  paddingVertical: 3,
                  paddingHorizontal: 13,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 30,
               }}
               onPress={() => props.navigation.navigate("breakdown")}
               activeOpacity={0.6}
            >
               <Text style={{ color: "white", fontSize: 14 }}>
                  View full breakdown
               </Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
};

export default feesHomeScreen;
