
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

function DetailNews({route}) {
  const [newsdata, setnewsData] = useState([]);
  const id = route.params.msg;

  useEffect (() => {
    getnewsData();
})

function getnewsData(){
    fetch('http://192.168.100.5:3000/berita?id='+id)
	.then((response) => response.json())
    .then((json) => {
        setnewsData(json)
    })
	.catch(err => console.error(err));
}
  
  return (
    <View style={{flex:1}}>
      <FlatList
        data={newsdata}
        renderItem={({ item }) => (
          <View  style={{
            paddingBottom: 10,
            marginBottom: 10,
            borderRadius: 10,
            elevation: 2,
            marginHorizontal: 10
           }}>
            <Image source={{uri: item.gambar}} style={{width: '100%', height: 200, marginBottom: 10}}/>
            <Text style={{color: 'black', textAlign: "center", marginHorizontal: 10, fontSize: 20}}>{item.judul}</Text>
            <Text style={{color: 'black', textAlign: "justify", marginHorizontal: 10, fontSize: 15, marginTop: 10}}>{item.detail}</Text>
            <Image source={{uri: item.gambar2}} style={{width: '100%', height: 200, marginTop: 10}}/>
          </View>
        )}
      />
      </View>
  );
};

export default DetailNews;