import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import qrcode from "qrcode-generator";
import WebViewCanvas from "./WebViewCanvas";

export default class QRCode extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      size: null
    };
    this.onLayout = this.onLayout.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.size !== this.props.size) {
      this.setState({
        size: null
      });
    }
  }

  onLayout(e) {
    console.log("layout");
    const { width } = e.nativeEvent.layout;
    if (this.state.size !== width) {
      this.setState({ size: width });
    }
  }

  render() {
    const {
      style,
      data,
      cellSize,
      margin,
      typeNumber,
      errorCorrectionLevel,
      color
    } = this.props;
    const size = this.state.size || this.props.size;
    const QRCode = qrcode(typeNumber, errorCorrectionLevel);
    QRCode.addData(data);
    QRCode.make();
    let calculatedCellSize = cellSize;
    if (typeof calculatedCellSize !== "number" && typeof size === "number") {
      calculatedCellSize =
        typeof margin === "number"
          ? Math.round((size - margin * 2) / QRCode.getModuleCount())
          : Math.round(size / (QRCode.getModuleCount() + 8));
    }
    const moduleCount = QRCode.getModuleCount();
    const uri = QRCode.createDataURL(calculatedCellSize, margin);
    const map = [];
    for (let x = 0; x < moduleCount; x++) {
      for (let y = 0; y < moduleCount; y++) {
        if (!map[x]) {
          map[x] = [];
        }
        map[x][y] = QRCode.isDark(x, y);
      }
    }
    return (
      <View
        key={uri}
        onLayout={this.onLayout}
        style={Object.assign({}, style, {
          width: size,
          aspectRatio: 1,
          justifyContent: "center",
          alignItems: "center"
        })}
      >
        {calculatedCellSize ? (
          <View
            style={{
              position: "relative",
              width: calculatedCellSize * moduleCount,
              aspectRatio: 1
            }}
          >
            <WebViewCanvas
              width={calculatedCellSize * moduleCount}
              height={calculatedCellSize * moduleCount}
              onLoad={canvas => {
                const context = canvas.getContext("2d");
                if (color) {
                  context.fillStyle = color;
                }
                map.forEach((row, x) => {
                  row.forEach((isDark, y) => {
                    if (isDark) {
                      context.fillRect(
                        x * calculatedCellSize,
                        y * calculatedCellSize,
                        calculatedCellSize,
                        calculatedCellSize
                      );
                    }
                  });
                });
              }}
              variables={{
                color,
                calculatedCellSize,
                map
              }}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

QRCode.defaultProps = {
  typeNumber: 0, // 自動
  style: {}
};

QRCode.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  data: PropTypes.string.isRequired, // データ文字列
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // 画像の大きさ
  cellSize: PropTypes.number, // セルの大きさ
  margin: PropTypes.number, // 余白の大きさ
  typeNumber: PropTypes.number, // 型番
  errorCorrectionLevel: PropTypes.string.isRequired // 誤り訂正レベル
};
