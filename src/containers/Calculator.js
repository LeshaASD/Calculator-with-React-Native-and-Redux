import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from "react-native";
import {CalcButton} from "../components/Button/CalcButton";
import {addNumber, backspace, clear, result} from "../store/actions/actions";

const CALC_BUTTON_VALUES = [
    'CE', '=',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '<', '+'
];

class Calculator extends React.Component {
    _renderButtons = (arr) => {
        return arr.map((btn, i) => {
            if (btn === 'CE') return (<CalcButton key={i} operator={btn} press={this.props.onClearAction} style={{width: '50%'}}/>);
            else if (btn === '=') return (<CalcButton key={i} operator={btn} press={this.props.onResultAction} style={{width: '50%'}}/>);
            else if (btn === '<') return (<CalcButton key={i} operator={btn} press={this.props.onBackspaceAction}/>);
            else return (<CalcButton key={i} operator={btn} press={() => this.props.onPressAction(btn)}/>)
        })
    };

    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.containerDisplay}>
                    <Text style={styles.displayText}>{this.props.result}</Text>
                </View>
                <View style={styles.container}>
                    {this._renderButtons(CALC_BUTTON_VALUES)}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    containerDisplay: {
        flex: 1,
        backgroundColor: '#ea994d',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },
    container: {
        flex: 4,
        backgroundColor: '#29060f',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    displayText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    }
});

const mapStateToProps = state => {
    return {
        result: state.string
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPressAction: value => dispatch(addNumber(value)),
        onResultAction: () => dispatch(result()),
        onClearAction: () => dispatch(clear()),
        onBackspaceAction: () => dispatch(backspace())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);