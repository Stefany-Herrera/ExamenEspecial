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
  const [listNota, setLisNota] = useState<string[]>([]);
  const [parcial, setParcial] = useState("");
  const [parcial2, setParcial2] = useState("");
  const [result, setResult] = useState<number>(0);

  const Validar = () => {
      let prom=''
      let reprobado ='sd'
      let finalP : number =0
    if (parcial === 'SD' || parcial2 === 'SD' || parcial === 'NSP' || parcial2 === 'SD') {
        prom = reprobado
        setLisNota([...listNota, prom])
    }
    else {
        setLisNota([...listNota, finalP.toString()])
    }
}

  const agregarEstudiante = () => {
    const divisor = 2;
    const notafinal = (parseInt(parcial) + parseInt(parcial2)) / divisor;
    setResult(notafinal);
    setLisEstudiante([...listEstudiante, nombre]);
    setLisNota([...listNota,notafinal.toString()]);

  };
  

  return (
      
    <View style={styles.containerBase}>
        <View style={styles.title}>
          <Text style={styles.texto}>Calificaciones</Text>
          </View>
          <View>
            <Text style={styles.text1}> Nombre Estudiante</Text>
          </View>

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
      
      <ScrollView style={styles.scrollView}>
        {listEstudiante.map((lista, index) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{lista}</Text>
            <Text  style={[listNota[index] < '60' ? styles.Reprobado : styles.Aprobado]}>Nota Final:{listNota[index]}</Text>
          </View>
        ))}
      
      </ScrollView>
    </View>
  );
};

export default Calificaciones;

const styles = StyleSheet.create({
  container: {
    width: '95%',
        
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginLeft: 10,
        borderColor: '#22B5A3',
        borderWidth: 2,
        justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
  },
  containerBase: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputs: {
    backgroundColor: "#22B5A3",
    borderRadius: 8,
    padding: 16,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#22B5A3",
  },
  p: {
    width: '24%',
    justifyContent: 'space-between',
    marginBottom: 4,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginLeft: 3,
    borderColor: '#8C8A8A',
    borderWidth: 2
  },
  textI:{
    marginTop: 5,
    paddingVertical: 50,
    backgroundColor: "#FFFFFF",
  },
   
    scrollView: {
        marginHorizontal: 10
    },
    text1: {
        color: '#05786A',
    },
    title: {

        marginTop: 1,
        paddingVertical: 10,
        backgroundColor: "#C4C4C4",
    },
    texto: {
        fontSize: 40,
        color: '#000000',
        width: '70%'
    },
    Reprobado: {
        marginLeft:'53%',
        fontSize: 18,
        color: '#ED7777',
    },
    Aprobado: {
        marginLeft:'53%',
        fontSize: 18,
        color: '#22B5A3',
    },
});
