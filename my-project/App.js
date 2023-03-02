import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Icon style={styles.githubLogo} name='github' size={75}/>
        <View style={styles.textBox}>
          <Text style={styles.titleText}>Fulano de Tal</Text>
          <Text style={styles.smallText}>Fazedor de Varios Nadas</Text>
        </View>
      </View>

      <View style={styles.secondBox}>
        <Text style={styles.secondText}>
          Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem!
        </Text>
        <View style={styles.sideAre}>
           <EvilIcon name='trash' size={50} />
           <Ionicons name='paper-plane-outline' size={35} />
        </View>
      </View>

      <View style={styles.secondBox}>
        <Text style={styles.secondText}>
          Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem!
        </Text>
        <View style={styles.sideAre}>
           <EvilIcon name='trash' size={50} />
           <Ionicons name='paper-plane-outline' size={35} />
        </View>
      </View>

      <View style={styles.secondBox}>
        <Text style={styles.secondText}>
          Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem!
        </Text>
        <View style={styles.sideAre}>
           <EvilIcon name='trash' size={50} />
           <Ionicons name='paper-plane-outline' size={35} />
        </View>
      </View>

      <View style={styles.secondBox}>
        <Text style={styles.secondText}>
          Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem!
        </Text>
        <View style={styles.sideAre}>
           <EvilIcon name='trash' size={50} />
           <Ionicons name='paper-plane-outline' size={35} />
        </View>
      </View>

      <View style={styles.secondBox}>
        <Text style={styles.secondText}>
          Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem!
        </Text>
        <View style={styles.sideAre}>
           <EvilIcon name='trash' size={50} />
           <Ionicons name='paper-plane-outline' size={35} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: 'white'
  }, topBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    backgroundColor: 'lightgrey',
    color: 'grey',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  }, githubLogo:{
    //paddingLeft: 50,
    paddingTop: 20,
    paddingBottom: 20,
  }, textBox: {
    justifyContent: 'center'
  }, titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  }, smallText: {
    fontSize: 12,
    color: 'grey'
  }, secondBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    color: 'grey',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },secondText: {
    flexShrink: 5,
  }, sideAre: {
    flexDirection: 'row',
  }
});
