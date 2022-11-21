import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


function News({navigation}) {
  const [data, setData] = useState([]);
  const [newsdata, setnewsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData(){
    fetch('http://192.168.100.5:3000/berita')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
    .catch(error => {
      console.error(error);
    });
  }


useEffect (() => {
    getnewsData();
})

function getnewsData(){
    fetch('https://saurav.tech/NewsAPI//top-headlines/category/technology/us.json')
	.then((response) => response.json())
    .then((json) => {
        setnewsData(json.articles)
    })
	.catch(err => console.error(err));
}


  return (
    <View style={{flex:1}}>
      <View style={{marginTop: 10, marginBottom: 10, paddingVertical: 5}}>
        <Text style={{color: '#000000', textAlign: "center", fontSize: '20'}}>Berita Terkini</Text>
      </View>
      <FlatList horizontal style={{height:'50%'}}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity  onPress={() => navigation.navigate('News Detail', {msg: item.id})} style={{
            backgroundColor: '#212121',
            paddingBottom: 10,
            borderRadius: 10,
            elevation: 2,
            marginHorizontal: 10
           }}>
            <Image source={{uri: item.gambar}} style={{ height: 100, width: '100%', display: 'flex'}}/>
            <Text  numberOfLines={1}  style={{color: '#FFFFFF', textAlign: "center", marginHorizontal: 10, width: 300, marginTop: 5}}>{item.judul}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={{marginTop: 10, marginBottom: 10, paddingVertical: 5}}>
        <Text style={{color: '#000000', textAlign: "center", fontSize: '20'}}>Highlights</Text>
      </View>
      <FlatList 
        data={newsdata}
        renderItem={({ item }) => (
          <TouchableOpacity style={{
            backgroundColor: '#212121',
            paddingBottom: 10,
            marginBottom: 10,
            borderRadius: 10,
            elevation: 2,
            marginHorizontal: 10
           }}>
            <Image source={{uri: item.urlToImage}} style={{ height: 100, width: '100%', display: 'flex'}}/>
            <Text style={{color: '#FFFFFF', textAlign: "center", marginHorizontal: 10, width: '95%', marginTop: 5}}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      
      </View>
  );
};

export default News;