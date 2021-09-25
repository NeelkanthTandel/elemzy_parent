import React, { useState } from "react";
import {
   StyleSheet,
   View,
   ScrollView,
   Text,
   TouchableOpacity,
   TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../theme/color";

const breakdownScreen = (props) => {
   return (
      <ScrollView
         style={{ backgroundColor: colors.backgroundColor }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               paddingTop: 30,
               paddingHorizontal: 20,
               backgroundColor: "white",
            }}
         >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
               <TouchableOpacity
                  onPress={() => {
                     props.navigation.goBack();
                  }}
               >
                  <MaterialIcons
                     name="keyboard-arrow-left"
                     size={35}
                     color={colors.textPrimary}
                  />
               </TouchableOpacity>
               <Text
                  style={{
                     fontSize: 24,
                     fontWeight: "700",
                     lineHeight: 24,
                     color: colors.textPrimary,
                     marginTop: 5,
                     flex: 1,
                     textAlign: "center",
                  }}
               >
                  Exam
               </Text>
               <MaterialIcons
                  name="keyboard-arrow-left"
                  size={35}
                  color={colors.backgroundColor}
               />
            </View>
            <Text
               style={{
                  color: colors.textPrimary,
                  textAlign: "center",
               }}
            >
               Breakdown
            </Text>

            <Text
               style={{
                  fontSize: 18,
                  fontWeight: "700",
                  lineHeight: 20,
                  color: colors.textPrimary,
                  marginBottom: 15,
                  marginTop: 30,
               }}
            >
               To be Paid
            </Text>
            <View style={{ width: "100%" }}>
               <View style={{ borderBottomWidth: 1 }}>
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10,
                     }}
                  >
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Books
                     </Text>
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        15000
                     </Text>
                  </View>
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10,
                     }}
                  >
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Tuition
                     </Text>
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        15000
                     </Text>
                  </View>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginTop: 10,
                  }}
               >
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                     Total
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                     30000
                  </Text>
               </View>
            </View>

            <Text
               style={{
                  fontSize: 18,
                  fontWeight: "700",
                  lineHeight: 20,
                  color: colors.textPrimary,
                  marginBottom: 15,
                  marginTop: 50,
               }}
            >
               Paid
            </Text>
            <View style={{ width: "100%" }}>
               <View style={{ borderBottomWidth: 1 }}>
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10,
                     }}
                  >
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Books
                     </Text>
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        5000
                     </Text>
                  </View>
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10,
                     }}
                  >
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        Tuition
                     </Text>
                     <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        15000
                     </Text>
                  </View>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginTop: 10,
                  }}
               >
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                     Total
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                     25000
                  </Text>
               </View>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 30 }}>
               Pending: 5000
            </Text>
         </View>
      </ScrollView>
   );
};
export default breakdownScreen;
