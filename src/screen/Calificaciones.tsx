import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Calificaciones = () => {
  const [nombre, setNombre] = useState<string>("");
  const [listEstudiante, setLisEstudiante] = useState<string[]>([]);
  const [parcial, setParcial] = useState("");
  const [parcial2, setParcial2] = useState("");
  const [result, setResult] = useState<number>(0);
  const [final, setFinal]=useState<string[]>([])

  const agregarEstudiante = () => {
    const divisor = 2;
    const notafinal = (parseInt(parcial) + parseInt(parcial2)) / divisor;
    setResult(notafinal);

    setLisEstudiante([...listEstudiante,nombre]);
    setFinal([...final,result]);
  };

  return (
    <View style={styles.containerBase}>
      <View style={styles.container}>
        <TextInput
          placeholder={"Nombre del esudiante"}
          onChangeText={setNombre}
        />
      </View>
      <View style={styles.p}>
        <TextInput placeholder={"IP"} onChangeText={setParcial} />
      </View>
      <View style={styles.p}>
        <TextInput placeholder={"IIP"} onChangeText={setParcial2} />
      </View>
      <View style={styles.p}>
        <Text>{result.toString()}</Text>
      </View>
      <Button color="#C4C4C4" title="Agregar" onPress={agregarEstudiante} />

      <ScrollView>
        {listEstudiante.map((lista, index,resultado) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{lista}</Text>
          </View>
        ))},
        {final.map(( index,resultado) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{resultado}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Calificaciones;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0cedb9",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 9,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 3,
    borderColor: "#8C8A8A",
  },
  text: {
    fontSize: 24,
  },
  containerBase: {
    flex: 1,
    backgroundColor: "#0cedb9",
  },
  inputs: {
    backgroundColor: "#F2F8FB",
    borderRadius: 8,
    padding: 16,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#004445",
  },
  p: {
    width: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0cedb9",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 9,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 3,
    borderColor: "#8C8A8A",
  },
});
