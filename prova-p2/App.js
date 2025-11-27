import { useState } from 'react'
import { Pressable, StyleSheet, Text, View, FlatList, Linking, Image } from 'react-native'
import { Button, ScrollView, TextInput } from 'react-native-web'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'

export default function App() {

  const anos = [
    2024,2023,2022,2021,2020
  ]

  const devs = [
    {name: 'Alisson Curvina', linkedin: 'https://www.linkedin.com/in/alisson-curvina', github: 'https://github.com/AlissonCurvina', profileImage: './prova-p2/assets/user.png'},
    {name: 'Evilly Costa', linkedin: 'https://www.linkedin.com/in/evilly-nascimento-costa/', github: 'https://github.com/EvillyCosta', profileImage: './prova-p2/assets/user.png'}
  ]
  const URL_BASE = "http://localhost:3000/"

  const handleSearch = async () => {
    try {
      const response = await axios.get(URL_BASE + "searchPhotos", {
        params: {
          q: searchText,
          year: selectedYear   
        }
      })

      setSearchPhotos(response.data)

    } catch (error) {
      console.error("Erro na busca:", error)
    }
  }


  const [photoOfTheDay, setPhotoOfTheDay] = useState(null)

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

  const [searchPhotos, setSearchPhotos] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [searchText, setSearchText] = useState('')

  return (
    <View 
      style={styles.container}
      onLayout={() => {
        if (!photoOfTheDay) {
          axios.get(URL_BASE + "getPOTD")
            .then(response => {
              setPhotoOfTheDay({
                imageDate: response.data.imageDate,
                imageUri: response.data.imageUrl,
                imageTitle: response.data.imageTitle,
              })
            })
            .catch(error => console.log("Erro na API:", error))
        }
      }}
    >
      <ScrollView >
        <View style={styles.header}>
          <Text style={styles.pageName}>Daily Nasa</Text>
        </View>

        <View style={styles.divider}></View>

        <Text style={styles.heading}>
          Foto do dia
        </Text>

        {/* FOTO DO DIA */}
        <View>
          {photoOfTheDay ? (
            <View style={styles.contentSection}>
              <Image
                source={{ uri: photoOfTheDay.imageUri }}
                style={styles.photoOfTheDay}
                resizeMode="cover" />
              <Text style={styles.centeredText}>
                {photoOfTheDay.imageTitle}
              </Text>
              <Text style={styles.centeredText}>
                {photoOfTheDay.imageDate}
              </Text>
            </View>
          ) : (
            <View style={styles.contentSection}>
              <Text>Carregando...</Text>
            </View>
          )}
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
        
        <View style={styles.yearArea}>
          <Pressable 
            style={styles.yearButton}
            onPress={ () => setSelectedYear(2025)}>
            <Text 
              style={styles.yearButtonText}>
              2025
            </Text>
          </Pressable>
          <View style={styles.yearList}>
            <FlatList 
            horizontal={true}
            data={anos}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => (
              <Pressable 
                style={styles.yearButton}
                onPress={ () => setSelectedYear(item)}>
                <Text style={styles.yearButtonText}>{item}</Text>
              </Pressable>)}/>
          </View>
          <Text style={styles.selectedYear}>
            Ano Selecionado: {selectedYear}
          </Text>
        </View>
        
        {/* AREA DE BUSCA */}

        <View style={styles.searchArea}>
          <TextInput 
            style={styles.searchInput} 
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholderTextColor="#888"
            placeholder='Pesquisar...'>
          </TextInput>
          <Pressable 
            style={styles.searchButton}
            onPress={ () => handleSearch()}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </Pressable>
        
        </View>

        {/* RESULTADOS DA PESQUISA */}
        
        <Text style={styles.heading}>
          Resultados da pesquisa
        </Text>

        <View>
          {searchPhotos ? (
            <FlatList 
              horizontal={true}
              data={searchPhotos}
              renderItem={({item}) => (
              <View style={styles.imageCard}>
                <Text style={styles.imageTitle}>
                  {item.imageTitle}
                </Text>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.image}
                  resizeMode="cover"
                  keyExtractor={(item, index) => index.toString()}
                />
                <Text style={styles.imageDate}>
                  {item.imageDate}
                </Text>
                <Text style={styles.imageDescription}>
                  {item.imageDescription}
                </Text>
              </View>
              )}
            />
          ) : (
            <View style={styles.contentSection}>
              <Text>Aguardando pesquisa...</Text>
            </View>
          )}
        </View>
        <View style={styles.flatListContainer}>
          
        </View>

        {/* RODAPE */}

        <Text style={styles.heading}>Desenvolvido por</Text>

        <View style={styles.divider}></View>
        
        <View style={styles.flatListContainer}>
          <FlatList 
            horizontal={true}
            data={devs}
            renderItem={({ item }) => (
              <View style={styles.devCard}>
                <View style={styles.devInfo}>
                  <FontAwesomeIcon icon={faUser} size={40} color="#333"/>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.devInfo}>
                  <Pressable
                    style={styles.devInfo}
                    onPress={() => Linking.openURL(item.linkedin)}>
                    <FontAwesomeIcon 
                      icon={faLinkedin} 
                      size={40}
                      color="#0077b5"/>
                    <Text style={styles.link}>
                      Linkedin
                    </Text>
                  </Pressable>
                </View>
                <View style={styles.devInfo}>
                  <Pressable
                    style={styles.devInfo}
                    onPress={() => Linking.openURL(item.github)}>
                    <FontAwesomeIcon icon={faGithub} size={40} color="#333"/>
                    <Text>Github</Text>
                  </Pressable>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
      </ScrollView>
    </View>
  )
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
    color: '#000',
  },

  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#001e47ff',
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#001e4755',
    marginBottom: 10,
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

  yearArea: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
  },  

  yearList: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  yearButton: {
    borderWidth: 2,
    padding: 6,
    marginHorizontal: 4, 
    borderRadius: 8,
    borderColor: '#001e4755',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 120,
    height: 42,
  },

  yearButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },

  selectedYear: {
    fontSize: 20, 
    color: '#001e47ff', 
    textAlign: 'center',
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
    borderColor: '#001e47ff',
    padding: 6,
    margin: 4,
    width: '80%',
    textAlign: 'left',
  },

  searchButton: {
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#001e47ff',
    padding: 6,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },

  searchButtonText: {
    textAlign: 'left',
    color: '#fff',
  },

  devCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },

  devInfo: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 10,
    width: '100%',
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
})
