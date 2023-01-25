import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';
import Films from './src/services/components/Filmes';

export default function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    async function loadFilms(){
      const response = await api.get('r-api/?api=filmes');
      setFilms(response.data); 
      setLoading(false);
    }
    loadFilms();
  }, []);

  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex:1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <FlatList
          data={films}
          keyExtractor={ item => String(item.id)}
          renderItem={({item}) => <Films data={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
});
