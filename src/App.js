import React, { Component } from "react";
import { random } from "lodash";
import "typeface-roboto";
import QuoteMachine from "./components/QuoteMachine";
import { Grid, withStyles } from "@material-ui/core";

//material ui with styles functon in export will use these styles below...
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  /*
   * Returns an integer representing an index in state.quotes
   * If state.quotes is empty, returns undefined
   */

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      //if no quotes array no length hence not received
      return;
    }
    return random(0, this.state.quotes.length - 1); //lodash random method
  }

  //get the quotes from a web link with fetch called after a react component have mounted
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }, this.assignNewQuoteIndex)); // can just put the variable as named the same in state
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  render() {
    return (
      <Grid
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container
      >
        <Grid xs={11} lg={8} item>
          {this.selectedQuote ? (
            <QuoteMachine
              selectedQuote={this.selectedQuote}
              assignNewQuoteIndex={this.assignNewQuoteIndex}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(App);
