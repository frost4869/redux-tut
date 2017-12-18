import React, { Component } from 'react'
import { Container, Progress } from 'semantic-ui-react'
import { connect } from "react-redux";

class Result extends Component {

    constructor(props) {
        super(props)

        this.reactValue = this.reactValue.bind(this)
        this.angularValue = this.angularValue.bind(this)
        this.vueValue = this.vueValue.bind(this)
    }


    reactValue() {
        if (this.props.state.reactVotes) {
            return Math.trunc(this.props.state.reactVotes / (this.props.state.reactVotes + this.props.state.angularVotes + this.props.state.vueVotes) * 100);
        } else {
            return 0;
        }
    }

    angularValue(){
        if (this.props.state.reactVotes) {
            return Math.trunc(this.props.state.angularVotes / (this.props.state.reactVotes + this.props.state.angularVotes + this.props.state.vueVotes) * 100);
        } else {
            return 0;
        }
    }

    vueValue() {
        if (this.props.state.reactVotes) {
            return Math.trunc(this.props.state.vueVotes / (this.props.state.reactVotes + this.props.state.angularVotes + this.props.state.vueVotes) * 100);
        } else {
            return 0;
        }
    }

    render() {
        return (
            <Container>
                <Progress progress percent={this.reactValue()} label='React' color='blue'/>
                <Progress progress percent={this.angularValue()} label='Angular' color='red'/>
                <Progress progress percent={this.vueValue()} label='Vue' color='green' />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        state
    }
}

export default connect(mapStateToProps)(Result);
