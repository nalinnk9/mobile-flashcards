import React, { PureComponent } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {addDeck} from '../redux/actions/DeckActions';
import { bindActionCreators } from 'redux';
import {uuidv4} from '../util/SaveToStore';


class CreateDeck extends PureComponent {
    state = {
        username : ''
    }
    createDeck = () => {
        const id = uuidv4();
        this.props.addD({name : `${this.state.username}`, id, cards: {}, correct: 0});
        this.props.navigation.navigate('Home');
        this.setState({username: ''});
    }
    render() {
        return (
            <View style = {styles.container}>
                <View style= {styles.text}>
                <Text style={{fontSize: 40,textAlign: 'center'}}>
                    What is the title of your new deck ?
                </Text>
                </View>
                <View style = {{ flexDirection: 'row'}}>
                <TextInput style = {styles.input} placeholder = "Add your name here" value={this.state.username} 
                onChangeText={(username) => this.setState({username})}
                >
                </TextInput>
                </View>
                <View style = {styles.submitContainer}>
                    <TouchableOpacity style={styles.button} onPress = {this.createDeck}>
                        <Text style= {{textAlign: "center",color: 'white', fontSize: 20}}>
                            CREATE DECK
                        </Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: 400
    },
    text: {
        marginTop: 100,
        marginLeft: 10,
    },
    button : {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        width: 200,
        marginTop: 20,
        height : 70,
        justifyContent : "center",
        alignContent: "center",
        backgroundColor: 'black'
    },
    input: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1, 
        borderColor: 'black', 
        flex : 1,
        borderRadius: 10,
        height: 40,
        marginTop: 30,
        justifyContent: "center",
        alignContent: "center"
    },
    submitContainer : {
        flex:1,
        flexDirection: "column", 
        alignItems: "center",
        borderRadius: 10, 
        borderColor: 'red',  
        justifyContent: "flex-end",
        marginBottom: 80
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        addD : bindActionCreators(addDeck, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(CreateDeck);