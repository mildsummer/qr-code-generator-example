import React from "react";
import { TouchableWithoutFeedback, View, Text, Keyboard } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import styles, {colors} from '../styles';

export default class Main extends React.Component {
  state = {
    value: ""
  };

  toResult = () => {
    const { value } = this.state;
    const { navigation } = this.props;
    navigation.navigate({ routeName: 'Result', params: { value } })
  };

  clear = () => {
    this.onChange('');
  };

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View style={styles.main.container}>
          <View style={styles.main.inner}>
            <Text style={styles.main.title}>
              QRコードにしたい文字列やURLなどを
              {'\n'}
              入力してください
            </Text>
            <View style={styles.main.inputWrapper}>
              <Input
                value={value}
                onChangeText={this.onChange}
                autoCapitalize='none'
                multiline = {true}
                numberOfLines = {4}
                inputStyle={styles.main.input}
                inputContainerStyle={styles.main.inputContainer}
                containerStyle={styles.main.inputInputContainer}
              />
              <Button
                disabled={!value}
                icon={<Icon name='close' size={17} color={colors.white} style={styles.main.resetButtonIcon} />}
                buttonStyle={styles.main.resetButton}
                containerStyle={styles.main.resetButtonContainer}
                disabledStyle={styles.main.resetButtonDisabled}
                onPress={this.clear}
              />
            </View>
          </View>
          <Button
            title="OK"
            disabled={!value}
            onPress={this.toResult}
            buttonStyle={styles.main.button}
            titleStyle={styles.main.buttonTitle}
            disabledStyle={styles.main.buttonDisabled}
            disabledTitleStyle={styles.main.buttonDisabledTitle}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
