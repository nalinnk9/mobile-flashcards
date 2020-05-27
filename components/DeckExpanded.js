import React, { PureComponent } from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {connect} from 'react-redux';
import {deleteDeck} from '../redux/actions/DeckActions';
import { bindActionCreators } from 'redux';

class DeckExpanded extends PureComponent {
    deleteDeck = () => {
        // remove deck from the store
        this.props.delete(this.props.route.params.deck.id);
        this.props.navigation.navigate('Home');
    }

    addCard = () => {
        this.props.navigation.navigate('AddCard', {deck: this.props.route.params.deck})
    }

    render() {
        const deckToRender = Object.values(this.props.deck).filter((d) => d.id === this.props.route.params.deck.id);
        return (
             deckToRender.length > 0 ? (
            <View style = {styles.container}>
                <Text style = {[styles.text, styles.deck]}> {deckToRender[0].name} </Text>
                <Text style = {[styles.text, styles.cards]}> {Object.values(deckToRender[0].cards).length} </Text>
                <TouchableOpacity style = {[styles.add, styles.button]} onPress = {this.addCard}>
                    <Text style = {[styles.text]}>
                         Add Card 
                    </Text> 
                </TouchableOpacity>
                <View>
                <TouchableOpacity style = {[styles.button, styles.start]} onPress = {() => this.props.navigation.navigate('Quiz', {deck: deckToRender[0].id})}> 
                    <Text style = {[styles.text,styles.startText]}> 
                        Start Quiz 
                    </Text> 
                </TouchableOpacity>
                </View>
                <TouchableOpacity style = {[styles.button]} onPress = {this.deleteDeck}> 
                    <Text style = {[styles.text,styles.deleteText]}> 
                        Delete Deck 
                    </Text>
                </TouchableOpacity>

            </View>
            ) : (
                <View/>
            )
            
        )
    }
}

const styles = StyleSheet.create( {
    container : {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop : 40,
        justifyContent: "center",
        alignItems: 'center',
    },
    button : {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        width: 300,
        marginTop: 20,
        height : 70,
        justifyContent : "center",
        alignContent: "center"
    },
    deck : {
        fontSize: 50,
        color: 'blue',
        
    },
    cards : {
        color: 'grey',
        fontSize:  20
    },
    start: {
        backgroundColor: 'black'
        
    },
    add: {
        borderWidth : 1,
        borderColor: 'black'
    },
    text: {
        textAlign: "center"
    },
    startText: {
        color: 'white'  
    },
    deleteText : {
        color: 'red'
    }
})

const mapStateToProps = (state) => {
    return {
        deck : state.DeckReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: bindActionCreators(deleteDeck, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckExpanded);