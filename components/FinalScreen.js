import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {resetCounter} from '../redux/actions/DeckActions';

class FinalScreen extends Component {
    render() {
        const deckToRender = Object.values(this.props.decks).filter(d => d.id === this.props.route.params.id);
        return (
            <View style = {[styles.container,{flex: 1}]}>
                <Text style = {styles.text}>
                    Congratulations You got {deckToRender[0].correct} right
                </Text>
                <TouchableOpacity style={[styles.button,{backgroundColor: 'green'}]} onPress = {() => {this.props.navigation.navigate('Deck', {deck: deckToRender[0]}); this.props.resetCounter(deckToRender[0].id)}}>
                        <Text style= {{textAlign: "center",color: 'white', fontSize: 20}}>
                            BACK TO DECK
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{backgroundColor: 'green'}]} onPress = {() => {this.props.navigation.navigate('Quiz', {deck: deckToRender[0].id}); this.props.resetCounter(deckToRender[0].id);} }>
                        <Text style= {{textAlign: "center",color: 'white', fontSize: 20}}>
                            RESTART QUIZ
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    text : {
        fontSize: 40,
        color: 'blue',
        flexDirection: "row"
    },
    button : {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        width: 200,
        marginTop: 20,
        height : 70,
        justifyContent : "center",
        alignContent: "center"
    },
});
const mapStateToProps = (state) => {
    return {
        decks : state.DeckReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetCounter: bindActionCreators(resetCounter, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FinalScreen);
