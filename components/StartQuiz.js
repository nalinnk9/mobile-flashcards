import {uuidv4} from '../util/SaveToStore';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {View, SafeAreaView, Text, ScrollView, Dimensions, StyleSheet} from 'react-native'
import {updateCard} from '../redux/actions/DeckActions';
import QuizCard from './QuizCard';
class StartQuiz extends Component {
    state = {
        cp: Dimensions.get('window').width
    }
    onClick (idx, totalIdx, deckId) {
        if((idx + 1) !== totalIdx) {
            this.setState({cp: this.state.cp + Dimensions.get('window').width});
            this.scrollView.scrollTo({y: 0, x: this.state.cp, animated: true});
        }
        else {
            const deckToRender = Object.values(this.props.deck).filter((d) => d.id === deckId);
            this.props.navigation.navigate('Congratulations' , {id: deckToRender[0].id});
        }
    }
    render() {
        const deckToRender = Object.values(this.props.deck).filter((d) => d.id === this.props.route.params.deck);
        return (
            deckToRender.length > 0 && Object.values(deckToRender[0].cards).length > 0 ? 
            <SafeAreaView style = {{flex: 1}} indicatorStyle = 'white'>
            <ScrollView horizontal = {true} pagingEnabled = {true}
            showsHorizontalScrollIndicator={false}
            ref = {(ref) => {this.scrollView = ref;}} >
            {Object.values(deckToRender[0].cards).map((card, idx) => {
            return <QuizCard 
            key= {idx}
            card = {card} 
            deckId =  {deckToRender[0].id} 
            onClick = {this.onClick.bind(this)} 
            index = {idx} 
            totalCards = {Object.values(deckToRender[0].cards).length}

            />
            })}
            </ScrollView>
            </SafeAreaView>
             : 
             <View style = {styles.container}>
                <Text style = {styles.text}>
                    Sorry You cannot take the quiz because there are no cards. 
                </Text>
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
    }
});

const mapStateToProps = (state) => {
    return {
        deck : state.DeckReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateCard: bindActionCreators(updateCard,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz);
