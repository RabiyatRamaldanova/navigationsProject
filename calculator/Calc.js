import React, {Component} from 'react';
import dizayn from './style';
import {Text, View, TouchableOpacity} from 'react-native';

class Calc extends Component {

arrayOfNumbers = [7,8,9,4,5,6,1,2,3];
arrayOfSigns = ['/','*','-','+'];
dotBoolean = false;
signBoolean = false;
resultBoolean = false;
res = "";
continueBoolean = false;

constructor(props) {
  super(props);
  this.state={result: ""}
}

onPressBuildResult(){
  this.dotBoolean = false;
  this.resultBoolean = true;
  if (this.state.result == "" ) {
    this.setState({result: ""})
  }
  else if(this.signBoolean == true){
    this.res = eval(this.state.result).toString()
    if(this.res == "Infinity" || this.res == "-Infinity"){
    this.setState({result : "error"})
    } else {
      this.setState({result : this.res})
    }
  }
  else if(this.signBoolean == false) {
    this.continueBoolean = true;
    this.setState({result: this.state.result})
    console.log(this.state.result)
  }
}

onPressDisplayNumber(button) {
  this.signBoolean = true;
  
  if(button != '.' ){
    this.setState({result: this.state.result + `${button}`})
  }
  if(this.continueBoolean == true && (this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '*' || this.state.result[this.state.result.length-1] == '/' )) {
    this.setState({result: this.state.result + `${button}`})
    this.continueBoolean == false
  }
  else if (this.resultBoolean == true && button != '.' ) {
    this.setState({result: `${button}`});
    this.resultBoolean = false;
  } else if(this.resultBoolean == true && button == '.' && this.state.result.includes('.')) {
    this.setState({result: '0.'});
    this.resultBoolean = false;
  }else if(this.resultBoolean == true && button == '.' && !this.state.result.includes('.')) {
    this.setState({result: this.state.result + `${button}`});
    this.resultBoolean = false;
    this.dotBoolean = true;
  }
  
  else if(button == '.' && this.dotBoolean == false){
    console.log(this.dotBoolean)
    this.dotBoolean = true;
    this.setState({result: this.state.result + `${button}`});
    if(this.state.result == "") {
      this.setState({result: "0."});
    }
    if(this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '*' || this.state.result[this.state.result.length-1] == '/') {
      this.setState({result: this.state.result + '0.'})
    }
    if(this.state.result == 'error'){
      this.setState({result: "0."})
    }
  }

  if(this.state.result == '0'){
    if(button == '0') {
      this.setState({result: this.state.result});
    } else if(button == '.'){
      this.setState({result: this.state.result + `${button}`});
    }else {
      this.setState({result: `${button}`});
    }
  }

  if(button == '0' && this.state.result[this.state.result.length-1] == 0 && (this.state.result[this.state.result.length-2] == '-' || this.state.result[this.state.result.length-2] == '+' || this.state.result[this.state.result.length-2] == '/' || this.state.result[this.state.result.length-2] == '*')){
    this.setState({ result: this.state.result});
  } else if(button!= '0' && button != '.' && this.state.result[this.state.result.length-1] == 0 && (this.state.result[this.state.result.length-2] == '-' || this.state.result[this.state.result.length-2] == '+' || this.state.result[this.state.result.length-2] == '/' || this.state.result[this.state.result.length-2] == '*')) {
    this.setState({result: this.state.result.substring(0,this.state.result.length-1) + `${button}`});
   } 

  if(this.state.result == "error" && button!= '.') {
    this.setState({result: `${button}`});
  }
}

onPressDisplaySign(button) {
  this.signBoolean = false;
  this.dotBoolean = false;
  if(this.resultBoolean == true && this.state.result != "" && this.state.result != "error") {
    this.setState({result: this.state.result + `${button}`});
    this.resultBoolean = false;
  }
  if( this.state.result != "" && this.state.result != "error"){
    if(this.state.result[this.state.result.length-1] == '.'){
    this.setState({result: this.state.result.substring(0,this.state.result.length-1) + `${button}`});
    }
    else if(this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '*' || this.state.result[this.state.result.length-1] == '/'){
    this.setState({result: this.state.result.substring(0,this.state.result.length-1) + `${button}`})
    }
    else{
    this.setState({result: this.state.result + `${button}`});
    }
}
}

onPressClear() {
  this.setState({result: ""});
  this.dotBoolean = false;
  this.signBoolean = true;
}

onPressSubstring() {
  if (this.state.result[this.state.result.length-1] == '.'){
    this.dotBoolean = false;
  }
  if (this.state.result[this.state.result.length-1] == '-' || this.state.result[this.state.result.length-1] == '+' || this.state.result[this.state.result.length-1] == '/' || this.state.result[this.state.result.length-1] == '*') {
    this.signBoolean = true;
  }
  if (this.state.result.length == 2 && this.state.result[0] == '-') {
    this.setState({result: ""});
  } else {
    this.setState({result: this.state.result.substring(0,this.state.result.length-1)});
  }
  if(this.state.result == "error") {
    this.setState({result: ""})
  }
}

negativeNumbers() {
  console.log(this.signBoolean)
  if (this.state.result != "" && this.state.result != "error" &&  this.signBoolean == true) {
    this.result = eval(this.state.result).toString();
    if(this.result == "Infinity" || this.result =="-Infinity"){
      this.setState({result : "error"});
    } else {
      this.setState({result : (0 - this.result)});
    }
  }
  else if (this.state.result.includes(this.text) && this.text != "") {
    this.setState({result: "error"});
  }
}

render(){
  return(
<View style={dizayn.styles.container}>
  <View style={dizayn.styles.display}>
    <Text style={dizayn.styles.displayText}>
      {this.state.result}
    </Text>
  </View>
<View style={dizayn.styles.buttonContainer}>
  
  <View style={dizayn.styles.numberButtonsContainer}>
    <TouchableOpacity onPress={() => this.onPressClear()} style={dizayn.styles.numberButtons}>
    <Text style={dizayn.styles.a}>
      C
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.onPressSubstring()} style={dizayn.styles.numberButtons}>
    <Text style={dizayn.styles.a}>
      CE
    </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.negativeNumbers()} style={dizayn.styles.numberButtons}>
    <Text style={dizayn.styles.a}>
      +/-
    </Text>
    </TouchableOpacity>

    {this.arrayOfNumbers.map((value, index)=> (
    <TouchableOpacity onPress={() => this.onPressDisplayNumber(value)} style={dizayn.styles.numberButtons} key={index}>
      <Text style={dizayn.styles.b}>
        {value}
      </Text>
    </TouchableOpacity>))}

    <TouchableOpacity onPress={() => this.onPressDisplayNumber(`0`)} style={dizayn.styles.zeroButton}>
      <Text style={dizayn.styles.b}>
        0
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => this.onPressDisplayNumber(`.`)} style={dizayn.styles.numberButtons}>
      <Text style={dizayn.styles.b}>
        .
      </Text>
    </TouchableOpacity>
  </View>

  <View style={dizayn.styles.signButtonsContainer}>
    {this.arrayOfSigns.map((value,index) => (
      <TouchableOpacity onPress={() => this.onPressDisplaySign(value)} style={dizayn.styles.signButtons} key={index}>
        <Text style={dizayn.styles.c}>
          {value}
        </Text>
      </TouchableOpacity>
    ))}
    <TouchableOpacity onPress={() => this.onPressBuildResult()} style={dizayn.styles.equalityButton}>
      <Text style={dizayn.styles.c}>
        =
      </Text>
    </TouchableOpacity>
  </View>

</View> 
</View>
  )
}
}
export default Calc;

