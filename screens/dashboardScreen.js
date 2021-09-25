import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
   Ionicons,
   Octicons,
   MaterialIcons,
   SimpleLineIcons,
} from "@expo/vector-icons";

import colors from "../theme/color";
import SectionOne from "../components/dashboardSectionOne";
import SectionTwo from "../components/dashboradSectionTwo";
import DatePickerButton from "../components/DatePickerButton";

const dashboardScreen = (props) => {
   return (
      <ScrollView
         style={{
            backgroundColor: colors.backgroundColor,
         }}
         showsVerticalScrollIndicator={false}
      >
         <View
            style={{
               flex: 1,
               alignItems: "center",
               paddingHorizontal: 20,
               marginTop: 30,
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
               Dashboard
            </Text>
         </View>
         <SectionOne isDashboard={true} />
         <SectionTwo />
      </ScrollView>
   );
};

export default dashboardScreen;
