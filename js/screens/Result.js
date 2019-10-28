import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import QRCode from "../common/QRCode";
import styles, { colors } from "../styles";

export default class Result extends React.Component {
  back = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const value = navigation.getParam("value");
    return (
      <View style={styles.result.container}>
        <View style={styles.result.inner}>
          <Text style={styles.result.title}>QRコード</Text>
          <Text
            numberOfLines={2}
            style={styles.result.detail}
            ellipsizeMode="tail"
          >
            {value}
          </Text>
          <QRCode
            style={styles.result.qr}
            data={value}
            size="100%"
            errorCorrectionLevel="H"
          />
        </View>
        <Button
          title="戻る"
          onPress={this.back}
          buttonStyle={styles.result.button}
          titleStyle={styles.result.buttonTitle}
          icon={
            <Icon
              name="left"
              size={18}
              color={colors.accent}
              style={styles.result.buttonIcon}
            />
          }
        />
      </View>
    );
  }
}
