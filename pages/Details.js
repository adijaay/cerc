import { useEffect, useState } from "react";
import { Image, View, FlatList, Text } from "react-native";



const Details = ({route}) => {
    const [data, setData] = useState([]);
    const [dataPrest, setPrestData] = useState([]);

  useEffect(() => {
    getData();
    getPrestData();
  }, []);

  function getData(){
    fetch('http://192.168.100.5:3000/minat?id='+route.params.msg)
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
    .catch(error => {
      console.error(error);
    });
  }
  function getPrestData(){
    fetch('http://192.168.100.5:3000/prestasi?id='+route.params.msg)
    .then(response => response.json())
    .then(json => {
      setPrestData(json)
    })
    .catch(error => {
      console.error(error);
    });
  }
    return(
        <View>
            <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={{marginBottom: 20}}>
                    <Text style={{padding: 20, fontSize: 30, textAlign: 'center'}}>{item.nama}</Text>
                    <View  style={{
                    alignItems: "center", 
                    backgroundColor: "#464343",
                    borderRadius: 24,
                    alignItems: "center",
                    marginHorizontal: 15,
                    padding: 20}}>
                    <Text style={{textAlign: 'center', color: 'white'}}>{item.detail}</Text>
                    </View>
                </View>

                )}
        />
        <View>
        <Text style={{padding: 20, fontSize: 30, textAlign: 'center'}}>PRESTASI</Text>
          <FlatList horizontal
            data={dataPrest}
            renderItem={({ item }) => (
                <View>
                    <View  style={{
                    alignItems: "center", 
                    marginBottom: 10,
                    backgroundColor: "#464343",
                    borderRadius: 4,
                    alignItems: "center",
                    marginHorizontal: 5,
                    paddingBottom: 10,
                    padding: 4}}>
                    <Image source={{uri: item.gambar_lomba}} style={{ height: 100, width: 200}}></Image>
                    <View style={{marginTop: 10}}>
                    <Text style={{textAlign: 'center', color: 'white'}}>{item.juara}</Text>
                    <Text style={{textAlign: 'center', color: 'white'}}>{item.nama_lomba}</Text></View>
                    </View>
                </View>

                )}
        />
        </View>
        </View>
    )
};

export default Details;
