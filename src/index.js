import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Styles from './components/Styles';
import api from './services/api';
import Header from './components/Header';

function app() {
  const [url, setURL] = useState([]);
  const [data, setData] = useState({results: []});

  const [next, setNext] = useState({next: []});
  const [prev, setPrev] = useState({previous: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`${url}`);

      setData(result.data);
      setNext(result.data.next);
      setPrev(result.data.previous);
    };

    fetchData();
  }, [url]);

  function handlePrevClick() {
    const newURL = prev;
    setURL(newURL);
  }

  function handleNextClick() {
    const newURL = next;
    setURL(newURL);
  }

  return (
    <>
      <Header />
      <View style={Styles.flatlist}>
        <FlatList
          data={data.results}
          keyExtractor={Object}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => alert(item.name)}>
              <Text style={Styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

export default app;
