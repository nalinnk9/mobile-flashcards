import React, { PureComponent } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addCard} from '../redux/actions/DeckActions';
import {uuidv4} from '../util/SaveToStore';

class AddCard extends PureComponent {
    state = {
        question: '',
        answer: ''
    }
    submit = () => {
        // check if the question and and answer are not empty.
        // add the question and answer to the deck.
        const id = uuidv4();
        this.props.addC({deck : this.props.route.params.deck.id, card: {
            question: this.state.question,
            answer: this.state.answer,
            id: id,
            flip: false
        }})
        this.props.navigation.navigate('Deck');
    }
    render() {
        return (
            <View style = {styles.container}>
                <View style = {{flex: 1}}>
                <TextInput style= {styles.input} placeholder= " QUESTION" placeholderTextColor= "grey"
                onChangeText = {(q) => this.setState({question: q})}>
                </TextInput>
                <TextInput style= {styles.input} placeholder= " ANSWER" placeholderTextColor= "grey"
                onChangeText = {(a) => this.setState({answer: a})}>
                </TextInput>
                </View>
                <View style = {styles.submitContainer}>
                    <TouchableOpacity style={styles.button} onPress = {this.submit}>
                        <Text style= {{textAlign: "center",color: 'white', fontSize: 20}}>
                            SUBMIT
                        </Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 1, 
        borderColor: 'black',
        flex:1,
        width: 400,
        marginTop: 100
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
    addC : bindActionCreators(addCard, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(AddCard);