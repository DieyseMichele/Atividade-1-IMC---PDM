/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from, ( Component ) 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
	textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  label: {
	 marginHorizontal: 10,
	 fontSize: 24,
  },
  input: {
	  height: 35,
	  borderWidths: 1,
	  borderColor: "#000",
	  margin: 10,
	  padding: 10,
	  backgroundColor: "#fff",
  },
  inputResultado: {
	  height: 35,
	  borderWidths: 1,
	  borderColor: "#000",
	  margin: 10,
	  padding: 10,
	  backgroundColor: "#fff",
  },
});

export default class IMC extends Component
{
	state = {
		altura: "",
		peso: "",
		imc: "",
		classificacao: ""
	}
	calcular = () => {
		if (this.state.altura == "" || this.state.peso == "")
		{
			Alert("Digite dois valores!");
			return;
		}
		var imc = this.state.peso/((this.state.altura/100)*(this.state.altura/100));
		
		var classificacao = "";
		if (imc< 10.5){
			classificacao = "MAGREZA";
		}else if(imc < 25){
			classificacao = "NORMAL";
		}else if(imc < 30){
			classificacao = "SOBREPESO";
		}else if(imc < 40){
			classificacao = "OBESIDADE";
		}else{
			classificacao = "OBESIDADE GRAVE";
		}
		
		imc = imc.toFixed(2);
		this.setState({imc});
		this.setState({classificacao});
	}
	render(){
		return (
			<SafeAreaView style={styles.sectionContainer}>
				<View>
					<Text style={styles.sectionTitle}> Cálculo de IMC</Text>
				</View>
				<View>
					<Text style={styles.label}>Digite sua altura:</Text>
					<TextInput style={styles.input} 
					keyboardType={"numeric"} value={this.state.altura.toString()} 
					onChangeText={(altura)=> {this.setState({altura});}}/>
					
					<Text style={styles.label}>Digite seu peso:</Text>
					<TextInput  style={styles.input} 
					keyboardType={"numeric"} value={this.state.peso.toString()} 
					onChangeText={(peso)=> {this.setState({peso});}}/>					
				</View>
				<View>
					<Button style={styles.botao} title="Calcular" onPress={this.calcular}/>
				</View>
				<View>
					<TextInput placeholder="IMC" style={styles.inputResultado} 
					editable={false} value={this.state.imc.toString()} />
					<TextInput placeholder="Classificação" style={styles.inputResultado} 
					editable={false} value={this.state.classificacao.toString()} />
				</View>
			</SafeAreaView>
		);
	}
}

export default App;
