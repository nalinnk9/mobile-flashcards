import React, { PureComponent } from 'react'
import {TouchableOpacity, Text, StyleSheet, View, FlatList} from 'react-native'
import {connect} from 'react-redux';

class Deck extends PureComponent {
    pressEvent = (item) => {
        this.props.navigation.navigate('Deck', {deck: item});
    }
    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    data={Object.values(this.props.deckList)}
                    renderItem={({item}) => <TouchableOpacity style={styles.button} onPress = {() => this.pressEvent(item)} key={item.id}>
                        <Text style = {styles.text} key= {`${item.id}_text`}>{item.name}</Text></TouchableOpacity>}
                />
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
    },
    button : {
        paddingTop: 0,
    },
    text : {
        fontSize: 40,
        color: 'blue',
        flexDirection: "row"
    }
})
const mapStateToProps = (state) => {
    return {
        deckList : state.DeckReducer
    }
}

export default connect(mapStateToProps)(Deck);