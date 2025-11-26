import { Pressable, StyleSheet, Text, View, FlatList, Linking, Image } from 'react-native'
import { Button, ScrollView, TextInput } from 'react-native-web'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  const anos = [
    2024,2023,2022,2021,2020
  ]

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
    },
    {
      imageDate: "2022-03-28",
      imageUri: encodeURI("https://images-assets.nasa.gov/video/NASA Explores the Moon and Beyond/NASA Explores the Moon and Beyond~large.jpg"),
      imageTitle: "NASA Explores the Moon and Beyond"
    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.header}>
          <Text style={styles.pageName}>Daily Nasa</Text>
        </View>

        <View style={styles.divider}></View>

        <Text style={styles.heading}>
          Foto do dia
        </Text>
        <View style={styles.contentSection}>
          <Image
            source={{ uri: photoOfTheDay.imageUri }}
            style={styles.photoOfTheDay}
            resizeMode="cover"/>
          <Text style={styles.centeredText}>
            {photoOfTheDay.imageTitle}
          </Text>
          <Text style={styles.centeredText}>
            {photoOfTheDay.imageDate}
          </Text>
        </View>
        <View style={styles.flatListContainer}>
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
        </View>
          
        <View style={styles.divider}></View>

        <Text style={styles.heading}>
          Buscar imagens
        </Text>
        <Text>
          Filtros
        </Text>

        <View style={styles.divider}></View>
        
        <View style={styles.yearArea}>
          <Pressable style={styles.yearButton}>
            <Text style={styles.yearButtonText}>
              2025
            </Text>
          </Pressable>
          <View style={styles.yearList}>
            <FlatList 
            horizontal={true}
            data={anos}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => <Pressable style={styles.yearButton}><Text style={styles.yearButtonText}>{item}</Text></Pressable>}/>
          </View>
        </View>

        <View style={styles.divider}></View>
        
        <View style={styles.searchArea}>
          <TextInput 
            style={styles.searchInput} 
            placeholder='Pesquisar imagens'>
          </TextInput>
          <Pressable style={styles.searchButton}><Text style={styles.searchButtonText}>Buscar</Text></Pressable>
        </View>
        
        <Text style={styles.heading}>
          Resultados da pesquisa
        </Text>

        <Text style={styles.centeredText}>
          Mostrando imagens de termo do ano ano
        </Text>

        <View style={styles.flatListContainer}>
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
        
        <View style={styles.flatListContainer}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
  },

  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },

  contentSection: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  header: {
    fontSize: 20,
    width: '100%',
    marginBottom: 10,
  },

  pageName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 10,
    color: '#1C1C1C',
  },

  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1C1C1C',
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
    color: '#0047AB',
  },

  photoOfTheDay: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },  

  flatListContainer: {
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  image: {
    width: 150,
    height: 150,
    marginRight: 10, 
  },

  imageCard: {
    alignItems: 'center', 
    rowGap: 2,
    marginRight: 15, 
    width: 160,
    marginBottom: 10,
  },  

  imageDate: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1C1C1C',
  },

  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C1C1C',
  },

  imageDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: '#1C1C1C',
  },

  photoOfTheDayItem: {
    width: 20,
    height: 20,
  },

  yearList: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  yearButton: {
    borderWidth: 2,
    padding: 6,
    marginHorizontal: 4, 
    borderRadius: 8,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 120,
    height: 42,
    marginBottom: 10,
  },

  yearButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1C1C1C',
  },

  searchArea: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  searchInput: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 6,
    margin: 4,
    width: '70%',
    textAlign: 'center',
  },

  searchButton: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 6,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchButtonText: {
    textAlign: 'left',
    color: '#1C1C1C',
  },

  devCard: {
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    width: 150,
  },

  devName: {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C1C1C',
  },

  devLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  devLink: {
    marginLeft: 5,
    color: '#00f',
    textDecorationLine: 'underline',
  },
});
