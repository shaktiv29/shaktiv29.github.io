import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

class Calci extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '0',
      input2: '0',
      num1: 0,
      num2: 0,
      answer: 0,
      decimal1: true,
      decimal2: true,
      operate: '',
      string: '' };

    this.clickNumber = this.clickNumber.bind(this);
    this.clear = this.clear.bind(this);
    this.operation = this.operation.bind(this);
  }
  clickNumber(x) {
    if (this.state.operate === '' || this.state.operate === '=') {
      if (this.state.input1 === '0') {
        this.setState({
          input1: x,
          answer: '',
          string: x });

      } else
      if (x === '.') {
        if (this.state.decimal1 === true) {
          this.setState({
            input1: this.state.input1 + x,
            decimal1: false,
            string: this.state.string + x });

        }
      } else
      {
        this.setState({
          input1: this.state.input1 + x,
          string: this.state.string + x });

      }
    } else
    {
      if (this.state.input2 === '0') {
        this.setState({
          input2: x,
          string: this.state.string + x });

      } else
      if (this.state.input2 === '-0') {
        this.setState({
          input2: '-' + x,
          string: this.state.string + '-' + x });

      } else
      if (x === '.') {
        if (this.state.decimal2 === true) {
          this.setState({
            input2: this.state.input2 + x,
            decimal2: false,
            string: this.state.string + x });

        }
      } else
      {
        this.setState({
          input2: this.state.input2 + x,
          string: this.state.string + x });

      }
    }
  }

  clear() {
    this.setState({
      input1: '0',
      input2: '0',
      num1: 0,
      num2: 0,
      answer: '',
      decimal1: true,
      decimal2: true,
      operate: '',
      string: '' });

    console.log('clear');
  }
  arthmetic(num1, num2, operator) {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '*') return num1 * num2;
    if (operator === '/') return num1 / num2;else
    return num1;
  }
  operation(operator) {
    let j = parseFloat(this.state.input1);
    if (this.state.decimal1) {
      j = parseInt(this.state.input1);
    }
    if (this.state.operate === '') {
      this.setState({
        num1: j,
        input1: '0',
        operate: operator,
        string: this.state.string + operator });

    } else
    if (this.state.operate === '=') {
      if (this.state.input1 !== '0') {
        this.setState({
          num1: j,
          input1: '0',
          operate: operator,
          answer: 0,
          string: this.state.string + operator });

      } else
      {
        this.setState({
          num1: this.state.answer,
          operate: operator,
          string: this.state.string + operator });

      }
    } else
    {
      if (this.state.input2 === '0' || this.state.input2 === '-0') {
        if (operator === '-') {
          this.setState({
            input2: '-0' });

        } else
        if (operator === '+') {
          this.setState({
            input2: '0',
            operate: '+',
            string: this.state.string + operator });

        } else
        {
          this.setState({
            operate: operator,
            string: this.state.string + operator });

        }

      } else
      {
        let num2 = parseFloat(this.state.input2);
        if (this.state.decimal2) {
          num2 = parseInt(this.state.input2);
        }
        this.setState({
          num1: this.arthmetic(this.state.num1, num2, this.state.operate),
          input2: '0',
          operate: operator,
          string: this.state.string + operator });

      }
    }
  }
  answerr() {
    let num2 = parseFloat(this.state.input2);
    if (this.state.decimal2) {
      num2 = parseInt(this.state.input2);
    }
    console.log(this.state.num1);
    console.log(num2);
    console.log(this.state.operate);
    this.setState({
      answer: this.arthmetic(this.state.num1, num2, this.state.operate),
      input1: '0',
      input2: '0',
      num1: 0,
      num2: 0,
      decimal1: true,
      decimal2: true,
      operate: '=' });

  }
  render() {
    let input1 = this.state.input1;
    let input2 = this.state.input2;
    let answer = this.state.answer;
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "title" }, "Mini Calculator"), /*#__PURE__*/


      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("div", { id: "inputt" },
      this.state.string, /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/

      React.createElement("div", { id: "answerr" },

      answer === '' ? '0' : answer)), /*#__PURE__*/



      React.createElement("button", { id: "nine", onClick: () => {this.clickNumber("9");} }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: () => {this.clickNumber('8');} }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "seven", onClick: () => {this.clickNumber('7');} }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: () => {this.operation('+');} }, "+"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: () => {this.clickNumber('6');} }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: () => {this.clickNumber('5');} }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: () => {this.clickNumber('4');} }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", className: "signs", onClick: () => {this.operation('-');} }, "-"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: () => {this.clickNumber('3');} }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: () => {this.clickNumber('2');} }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: () => {this.clickNumber('1');} }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", className: "signs", onClick: () => this.operation('*') }, "*"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: () => {this.clickNumber('0');} }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", className: "signs", onClick: () => {this.clickNumber('.');} }, "."), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.clear }, "AC"), /*#__PURE__*/
      React.createElement("button", { id: "divide", className: "signs", onClick: () => this.operation('/') }, "/"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.answerr.bind(this) }, "="), /*#__PURE__*/
      React.createElement("br", null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calci, null), document.getElementById('main'));