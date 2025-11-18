import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import { Button, TextInput } from 'react-native-web'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  const anos = [2024,2023,2022,2021,2020]
  const devs = [
    {name: 'Alisson Curvina', linkedin: 'linkedin.com', github: 'github.com', profileImage: './prova-p2/assets/user.png'},
    {name: 'Evilly Costa', linkedin: 'linkedin.com', github: 'github.com', profileImage: './prova-p2/assets/user.png'}
  ]

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.pageName}>Daily Nasa</Text>
        </View>
      <View style={styles.divider}>
      </View>
      <Text style={styles.heading}>
        Foto do dia
      </Text>
      <Text>
        Aqui vai ter uma imagem
      </Text>
      <Text>
        Nome da imagem
      </Text>
      <Text>
        Descrição
      </Text>
      <Text>
        Data da imagem
      </Text>
      <Text>
        Lista do histórico de imagens
      </Text>
      <View style={styles.divider}>
      </View>
        <Text style={styles.heading}>
          Buscar imagens
        </Text>
        <Text>
          Filtros
        </Text>
        <View style={styles.divider}>
        </View>
        <Pressable style={styles.yearButton}>2025</Pressable>
        <View style={styles.yearList}>
          <FlatList 
          horizontal={true}
          data={anos}
          renderItem={({item}) => <Pressable style={styles.yearButton}>{item}</Pressable>}/>
        </View>
        <View style={styles.searchArea}>
          <TextInput style={styles.searchInput} placeholder='Pesquisar imagens'>
          </TextInput>
          <Pressable style={styles.searchButton}>Buscar</Pressable>
        </View>
        
        <Text style={styles.heading}>
          Resultados da pesquisa
        </Text>
        <Text>
          Mostrando imagens de termo do ano ano
        </Text>
        <View>imagens</View>
        <Text>
          Aqui vai ter uma imagem
        </Text>
      </View>
      <View styles={styles.heading}>Desenvolvido por</View>
      <View style={styles.divider}></View>
      <FlatList 
        horizontal={true}
        data={devs}
        renderItem={({ item }) => (
          <View>
            <FontAwesomeIcon icon={faUser}/>
            <Text>{item.name}</Text>
            <FontAwesomeIcon icon={faLinkedin}/><Text>{item.linkedin}</Text>
            <FontAwesomeIcon icon={faGithub}/><Text>{item.github}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    fontSize: 20,
  },

  pageName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },

  heading: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc', // cor da linha
    marginVertical: 10,
  },

  yearList: {
    //flex: 1,
    // overflow: 'scroll',
  },

  yearButton: {
    borderWidth: 2,
    textAlign: 'center',
    padding: 6,
    margin: 4,
    borderRadius: 8,
    borderColor: '#000000',
    fontSize: 30,
  },

  searchArea: {
    flex: 1,
    flexDirection: 'row'
  },

  searchInput: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 6,
    margin: 4,
    flexGrow: 1
  }

  ,searchButton: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 6,
    margin: 4,
  }
});
