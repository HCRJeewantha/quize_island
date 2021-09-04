import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Question from './question';
import { LinearGradient } from 'expo-linear-gradient';

function Questions({ route, navigation }) {

    const { level } = route.params;

    const buttonClickedHandler = () => {

        navigation.navigate('Main', {
            name: 'Stranger',
        });
    };

    return (
        <React.Fragment>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#d9f8ff', '#ffffff']}
                    style={styles.background}
                />
                <View style={styles.head}>

                    <View style={styles.textContainerStyle}>
                        <TouchableOpacity
                            onPress={buttonClickedHandler}
                            style={styles.homeButton}>
                            <Image
                                style={styles.vector}
                                source={require('../assets/home.png')}
                            />
                        </TouchableOpacity>

                        <Image
                            style={styles.header}
                            source={require('../assets/header.png')}
                        />
                    </View>

                </View>
                <View style={styles.content}>
                    <View style={styles.contentContainer}>
                        <Question level={level} />
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        height: '5%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    numberStyle: {
        flex: 1
    },
    textContainerStyle: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    content: {
        height: '80%',
        borderRadius: '30px',
        backgroundColor: '#ffffffa3',
        border: '1px solid #fff',
        width: '90%',
        marginRight: '20px',
        marginLeft: '20px',
        boxShadow: '3px 3px 3px 3px rgba(97, 97, 97, 0.103)',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '70%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        borderRadius: 40,
        backgroundColor: '#b107ff',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    primaryText: {
        color: '#5d5d5e',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '5%',
    },
    vector: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        border: '2px solid #fff',
        boxShadow: '3px 3px 3px 3px rgba(97, 97, 97, 0.103)',
        borderRadius: 100,

    },
    homeButton: {
        width: '15%',
        height: '36%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginLeft: '5%',
        borderRadius: 100,
    },
    header: {
        width: '80%',
        height: '90%'
    }

})

export default Questions;