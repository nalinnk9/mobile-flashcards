import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import FlipCard from 'react-native-flip-card';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {incCounter} from '../redux/actions/DeckActions';

class QuizCard extends Component {
    state = {
        flip : true
    }
    onPressCorrect () {
        this.setState ({
            flip: true
        });

        this.props.incrementCtr(this.props.deckId);
        this.props.onClick(this.props.index, this.props.totalCards, this.props.deckId);
    }
    onPressInCorrect() {
        this.setState ({
            flip: true
        });
        this.props.onClick(this.props.index, this.props.totalCards, this.props.deckId);
    }
    renderView(textToRender, qOrA) {
        return (
            <View style = {{flex:1}}>
                <View style = {{alignContent: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <Text> {this.props.index + 1}/{this.props.totalCards}</Text>
                </View>
                <View style = {{flex: 1}}>
                <Text style= {styles.input}>
                    {textToRender}
                </Text>
                <TouchableOpacity style= {{marginTop: 40}} onPress = {() => this.setState({flip: !this.state.flip})}>
                    <Text style= {{textAlign: "center",color: 'red', fontSize: 20}}>
                        {qOrA}
                    </Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.submitContainer}>
                    <TouchableOpacity style={[styles.button,{backgroundColor: 'green'}]} onPress = {this.onPressCorrect.bind(this)}>
                        <Text style= {{textAlign: "center",color: 'white', fontSize: 20}}>
                            CORRECT
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: 'red'}]} onPress = {this.onPressInCorrect.bind(this)}>
                        <Text style= {{textAlign: "center",color: 'white', fontSize: 20}}>
                            INCORRECT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        const {card, deckId} = this.props;
        return (
            <FlipCard clickable={false} flip = {this.state.flip}
            flipVertical= {true} style ={{flex:1}}>
            <View style = {styles.container}>
            {this.renderView(this.props.card.question, 'answer', this.props.card.id, this.props.deckId)}
            </View>
            <View style = {styles.container}>
            {this.renderView(this.props.card.answer, 'question', card.id, card.flip, deckId)}
            </View>
            </FlipCard>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 1, 
        borderColor: 'black',
        flex:1,
        width: Dimensions.get('window').width,
        marginTop: 100,
        alignItems: "center"
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
    input: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        height: 40,
        marginTop: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        fontSize: 40
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
        incrementCtr: bindActionCreators(incCounter, dispatch)
    }
}
export default connect(null,mapDispatchToProps)(QuizCard);