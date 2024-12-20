import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { IconTicket } from '@tabler/icons-react-native';

import { styles } from "./styles";
import { colors } from "@/styles/theme";

export type PlaceProsps = {
  id: string;
  name: string;
  description: string;
  coupons: string;
  cover: string;
  address: string;
}

export type Props = TouchableOpacityProps & {
  data: PlaceProsps,
}

export function Place({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover}}/>

      <View style={styles.content}>
        <Text style={styles.name}>
          {data.name}
        </Text>

        <Text style={styles.description}>
          {data.description}
        </Text>

        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base}/>
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}