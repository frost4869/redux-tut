import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { voteAngular, voteReact, voteVue } from './actions'
import { Container, Header, Grid, Image } from 'semantic-ui-react'
import angularLogo from './assets/angular.png';
import vueLogo from './assets/Vue.png';
import reactLogo from './assets/react.svg';
import { connect } from 'react-redux';
import Results from './components/result'

class App extends Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  handleVoteReact = () => {
    this.props.dispatch(voteReact());
  }

  handleVoteAngular = () => {
    this.props.dispatch(voteAngular());
  }

  handleVoteVue = () => {
    this.props.dispatch(voteVue());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Demo</h1>
        </header>

        <Container>
          <Header as='h1'
            style={styles.header}
          > Vote for your favorite library </Header>

          <Grid centered columns={3} >
            <Grid.Row>
              <Grid.Column style={styles.columns}>
                <Image src={reactLogo} onClick={this.handleVoteReact} />
              </Grid.Column>
              <Grid.Column style={styles.columns}>
                <Image src={angularLogo} onClick={this.handleVoteAngular} />
              </Grid.Column>
              <Grid.Column style={styles.columns}>
                <Image src={vueLogo} onClick={this.handleVoteVue} />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Results state={this.props.state}/>
        </Container>
      </div>
    );
  }
}

const styles = {
  header: {
    marginTop: '10px',
    textAlign: 'centered'
  },
  columns: {
    maxWidth: '170px'
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
