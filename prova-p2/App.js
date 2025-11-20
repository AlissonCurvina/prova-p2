import { Pressable, StyleSheet, Text, View, FlatList, Linking, Image } from 'react-native'
import { Button, TextInput } from 'react-native-web'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  const anos = [2024,2023,2022,2021,2020]
  const devs = [
    {name: 'Alisson Curvina', linkedin: 'https://www.linkedin.com/in/alisson-curvina', github: 'https://github.com/AlissonCurvina', profileImage: './prova-p2/assets/user.png'},
    {name: 'Evilly Costa', linkedin: 'https://www.linkedin.com/in/evilly-nascimento-costa/', github: 'https://github.com/EvillyCosta', profileImage: './prova-p2/assets/user.png'}
  ]

  const photoOfTheDay = {
      imageDate: "2022-11-19",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large.jpg"),
      imageTitle: "Orion Sees the Moon and Saturn"
    }

  const photoOfTheDayList = [
    {
      imageDate: "2022-11-19",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large.jpg"),
      imageTitle: "Orion Sees the Moon and Saturn"
    },
    {
      imageDate: "2022-11-21",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/Moon Below Orion art001m1013251756/Moon Below Orion art001m1013251756~large.jpg"),
      imageTitle: "Flight Day 6: Orion Focuses on Moon"
    },
    {
      imageDate: "2022-03-28",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/NASA Explores the Moon and Beyond/NASA Explores the Moon and Beyond~large.jpg"),
      imageTitle: "NASA Explores the Moon and Beyond"
    }
  ]

  const searchPhotos = [
    {
      imageDate: "2022-11-19",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large.jpg"),
      imageTitle: "Orion Sees the Moon and Saturn"
    },
    {
      imageDate: "2022-11-21",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/Moon Below Orion art001m1013251756/Moon Below Orion art001m1013251756~large.jpg"),
      imageTitle: "Flight Day 6: Orion Focuses on Moon"
    },
    {
      imageDate: "2022-03-28",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/NASA Explores the Moon and Beyond/NASA Explores the Moon and Beyond~large.jpg"),
      imageTitle: "NASA Explores the Moon and Beyond"
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageName}>Daily Nasa</Text>
      </View>

      <View style={styles.divider}></View>

      <Text style={styles.heading}>
        Foto do dia
      </Text>
      <Image
        source={{ uri: photoOfTheDay.imageUri}}
        style={styles.photoOfTheDay}
        resizeMode="cover"/>
      <Text>
        {photoOfTheDay.imageTitle}
      </Text>
      <Text>
        {photoOfTheDay.imageDate}
      </Text>
      <FlatList 
        horizontal={true}
        data={photoOfTheDayList}
        renderItem={({item}) => (
          <View style={styles.imageCard}>
            <Image
              source={{ uri: item.imageUri }}
              style={styles.image}
              resizeMode="cover"
              keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.imageDate}>
              {item.imageDate}
            </Text>
          </View>
        )}
      />
        
      <View style={styles.divider}></View>

      <Text style={styles.heading}>
        Buscar imagens
      </Text>
      <Text>
        Filtros
      </Text>

      <View style={styles.divider}></View>
      
      <View style={styles.yearArea}>
        <Pressable style={styles.yearButton}>2025</Pressable>
        <View style={styles.yearList}>
          <FlatList 
          horizontal={true}
          data={anos}
          renderItem={({item}) => <Pressable style={styles.yearButton}>{item}</Pressable>}/>
        </View>
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
      <View>imagens
        <FlatList 
        horizontal={true}
        data={searchPhotos}
        renderItem={({item}) => (
          <View style={styles.imageCard}>
            <Text style={styles.imageTitle}>
              {item.imageTitle}
            </Text>
            <Image
              source={{ uri: item.imageUri }}
              style={styles.image}
              resizeMode="cover"
              keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.imageDate}>
              {item.imageDate}
            </Text>
            <Text style={styles.imageDescription}>
              lorem ipsum dolor sit amet
            </Text>
          </View>
        )}
      />
      </View>
      <Text styles={styles.heading}>Desenvolvido por</Text>

      <View style={styles.divider}></View>

      <FlatList 
        horizontal={true}
        data={devs}
        renderItem={({ item }) => (
          <View>
            <FontAwesomeIcon icon={faUser}/>
            <Text>{item.name}</Text>
            <FontAwesomeIcon icon={faLinkedin}/>
            <Text style={styles.link} onPress={() => Linking.openURL    (item.linkedin)}>
              {item.linkedin}
              </Text>
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

  section: {
    flex: 1,
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
    backgroundColor: '#ccc',
    marginVertical: 10,
  },

  photoOfTheDay: {
    width: 300,
    height: 300,
  },  

  image: {
    width: 150,
    height: 150,
    marginRight: 10, 
  },

  imageCard: {
    flex: 1,
    rowGap: 2,
  },  

  imageDate: {
    fontSize: 14,
  },

  photoOfTheDayItem: {
    width: 20,
    height: 20,
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
