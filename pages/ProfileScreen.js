import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCopy, faCopyright } from "@fortawesome/free-solid-svg-icons";

function ProfileScreen({route}) {
  const [data, setData] = useState("");

  useEffect ( () => {
    async function fetchData() {
      const request = await axios
        .get("https://api.github.com/users/adijaay")
        .then((res) => setData(res.data))
        .catch((e) => Alert.alert("Gagal!", e))
      return request;
    };
    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={{color: '#000000', textAlign: "center", fontSize: '20', marginTop: 30}}>Github Profile</Text>
      <View style={styles.headerContainer}>
      <Text style={{marginTop: 10, color: 'white'}}>R. Adi Wijaya Swastama</Text>
        <Image
          source={{uri : data.avatar_url}}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>
          {data.login}
        </Text>
        <Text style={styles.headerTextDesc}>{"Public Repos: " + data.public_repos}</Text>
        <Text style={styles.bodyText}>{data.bio}</Text>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 30}}>
        <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
        <Text style={{marginLeft: 5}}>Bikinan Jay</Text>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <Text style={{textAlign: 'center'}}>{'Computer Engineering, 2022\nDiponegoro University\n\nTugas Akhir Praktikum PPB 2022'}</Text>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#588157",
    borderRadius: 48,
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 10,
    marginHorizontal: 40
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 0,
    marginVertical: 10
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff"
  },
  headerTextDesc: {
    color: "#fff"
  },
  bodyTouchable: {
    alignSelf: "center",
    backgroundColor: "#588157",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 20
  },
  bodyText: {
    marginHorizontal: 25,
    marginTop: 10,
    color: "#efd",
    fontSize: 10,
    textAlign: 'center',
  }
});

export default ProfileScreen;
