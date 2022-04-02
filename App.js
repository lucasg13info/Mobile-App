import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={styles.title}>
          Welcome to my first mobile App!
      </Text>


      <Text
        style={{marginBottom: 10}}>
          This is Thor ⬇️
      </Text>

      <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/12/22/20/49/english-bulldog-3034226_960_720.jpg',
          }}
          style={{ width: 200, height: 200, borderRadius:500}}/>   
          

          
        <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 10
  }
});
