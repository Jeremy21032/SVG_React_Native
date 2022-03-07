import { StyleSheet, Text, View, Dimensions, Modal ,TouchableOpacity} from "react-native";
import { Icon, CheckBox, Button } from "react-native-elements";
import React from "react";
import Back from "../../assets/images/bg-cover-1.svg";
import Logo from "../../assets/images/logo.svg";
import Nuevo from "../../assets/images/fig-1.svg";
import Antiguo from "../../assets/images/fig-2.svg";

function getDimensions() {
  let d = Dimensions.get("window").width;
  let result = d - 208;
  global.size = result / 2;
}

export const HomeScreen = ({ navigation }) => {
  const [text, setText] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    getDimensions();
    setText("¡BIENVENIDO!");
  });

  let openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Back fill={"#000"} />
        {global.size == null ? (
          <></>
        ) : (
          <Logo
            fill={"#000"}
            style={{
              position: "absolute",
              top: 79,
              left: global.size,
            }}
          />
        )}
      </View>
      <View style={styles.view2}>
        <View>
          <Text h1 style={styles.title}>
            {text}
          </Text>
        </View>
        <View>
          <Text style={[styles.sub, { marginHorizontal: 50 }]}>
            Sigue las indicaciones, te apoyaremos a realizar tu solicitud de
            crédito.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            minWidth: Dimensions.get("window").width,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView2}>
              <View style={styles.modalView}>
                <View style={styles.viewDirrect}>
                  <View style={{ paddingLeft: 200 }}>
                    <Icon
                      name="close"
                      type="ionicon"
                      size={25}
                      color="#00C7B1"
                      onPress={() => setModalVisible(!modalVisible)}
                    />
                  </View>
                </View>
                <View style={[styles.viewFlex]}>
                  <CheckBox
                    center
                    checkedColor="#00C7B1"
                    containerStyle={styles.checkStyle}
                    title="Al continuar acepto"
                    checked={check}
                    onPress={() => {
                      setCheck(!check);
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      navigation.navigate("WEBVIEWPRIVACY", {
                        modalfn: openModal,
                      });
                    }}
                    style={{ alignSelf: "center" }}
                  >
                    <Text style={[styles.textStyle, { textAlign: "center" }]}>
                      Términos y condiciones{"\n"} y aviso de privacidad
                    </Text>
                  </TouchableOpacity>

                  <Button
                    disabled={!check}
                    title="CONTINUAR"
                    titleStyle={styles.titleButtons}
                    buttonStyle={styles.buttons}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      navigation.navigate("GPS");
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <View>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <View style={styles.containerUser}>
                <Nuevo fill={"#000"} />
                <View>
                  <Text style={styles.sub}>Soy</Text>
                </View>
                <View>
                  <Text style={[styles.sub, { fontWeight: "bold" }]}>
                    Usuario Nuevo
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              styles={styles.touchable}
              onPress={() => {
                //navigation.navigate("NAVIGATION");
              }}
            >
              <View style={styles.containerUser}>
                <Antiguo fill={"#000"} />
                <View>
                  <Text style={styles.sub}>Soy </Text>
                </View>
                <View>
                  <Text style={[styles.sub, { fontWeight: "bold" }]}>
                    Cliente TUIIO
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            
          </View>
        
        </View>
      </View>
      <View>
        <Text style={styles.sub}>Versión: 0.0.8</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 1,

    alignItems: "center",
  },
  brandViewText: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    opacity: 1,
  },
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FF0000",
    position: "relative",
    fontSize: 26,
  },
  logo: {
    position: "absolute",
    top: 79,
    left: global.size,
  },
  sub: {
    color: "#B2ABA4",
    textAlign: "center",
  },
  containerUser: {
    backgroundColor: "#F4F4F4",
    borderRadius: 80,
    minHeight: 160,
    minWidth: 160,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  viewButton: {
    paddingVertical: 20,
  },
  viewFlex: {
    alignItems: "flex-start",
  },
  viewDirrect: {
    flexDirection: "row",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerButtons: {
    paddingTop: 20,
    marginHorizontal: 55,
  },
  buttons: {
    backgroundColor: "#00C7B1",
    borderRadius: 20,
    marginLeft: 60,
  },
  titleButtons: {
    letterSpacing: 1.25,
    fontWeight: "bold",
    fontSize: 14,
  },
  checkStyle: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: -10,
  },
  textStyle: {
    color: "#517fa4",
    textDecorationLine: "underline",
    fontSize: 15,
    marginBottom: 20,
    fontWeight: "700",
  },
});
