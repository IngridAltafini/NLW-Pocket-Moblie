import { Text, useWindowDimensions } from "react-native";
import BottomSheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet";

import { styles } from "./styles";
import { colors } from "@/styles/theme";

import { Place, PlaceProsps } from "../place";
import { useRef } from "react";

type Props = {
  data: PlaceProsps[]
}

export function Places({data}: Props) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Place data={item}/> }
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  )
}