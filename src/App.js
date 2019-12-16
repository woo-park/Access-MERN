import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// renaming as router - bc of long name
import Artwork from './components/Artwork';
import Mywork from './components/Mywork';

import {StateProvider} from './components/Context';
import {StateContext} from './components/Context';
import example_image from './components/assets/alt-tag-example.png';


import Sketch from './components/P5Wrapper';
function App() {


  return (
    <StateProvider>
        <Router>
            <div className="App">

                <Nav />
                <Sketch />

                <Switch>
                    <Route exact path="/about" component={About} />
                    {/*anything that comes after won't work unless we have 'exact' keyword placed*/}

                    <Route exact path="/" component={Home} />

                    <Route exact path="/gallery" component={Gallery} />

                    <Route path="/artwork/:id" component={Artwork} />

                    <Route path="/mywork" component={Mywork} />



                </Switch>
            </div>
        </Router>
    </StateProvider>
  );
}


const Home = () => (
  <div className="myComponent">
    <h1>Welcome!</h1>

    <div>
        <p>The goal of this page is to make artworks more accessible to all. In the gallery, you have the access to the Met Gallery. You can look up any artworks that meet your interest. After finding artworks, you can start add description to the images. Your work will be saved, and the whole community will have the access to these descriptions, just like how you can check out other participants' contributions. Take a look at the completed to see community-generated alt tags.</p>
    </div>

    <h2>Here are some instructions on how to generate a good Alt tags</h2>

    <div className='paras'>
      <p>Be specific. Describe the artwork to yourself. </p>
      <p>Some say that alt tags should be kept short. But, not here! It can be as long as you want.</p>
      <p>Full sentence is better than keywords. But, keywords are still helpful as well. </p>
      <p>"image of" and "picture of" in alt tags are not so helpful for the community. </p>
    </div>

    <img src={example_image} ></img>
    <div className='paras'>
      <p>Okay alt text: alt="man on escalator"</p>
      <p>Better alt text:  alt="man walking down a long escalator"</p>
      <p>Even better alt text:  alt="Asian man wearing a black backpack holds on to the rail and walks down the escalator. The person is on focus while others are blurred out."</p>
    </div>

  </div>
)
//this is returning a component not a function, so MUST USE ()


/*
// <MyComponent greeting = {true}>

class MyComponent extends React.Component {
  render() {
    return <h1>{this.props.greeting ? 'hiii' : 'bye' }bye</h1>
  }
}
ReactDOM.render(<div><MyComponent /><MyComponent greeting = {true}/></div>, document.getElementById('root'));

// stat is data controlled wholly by the component wheras props is passed down from the renderer
// changing state causes a re-rener of your component
// to initialize state:
// constructor(props) {
// super(pros);
// this.state = {prop, val}
// }
// to change state

// do not do this => this.state.prop = newVal
// this.setState({prop: newVal})
// react may batch changes to state: updating state may be async

// it paasses in previous state....
// this.setState((state, props)=>({prop: newValBasedOnState}))    /hmmm

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return(
      // or remove the this.handleClick in constructor and place ()=>... in {}
      <div onClick= {this.handleClick} className='clicker'>
        {this.state.count}
      </div>
    );
  }
}
ReactDOM.render(<Clicker />, document.getElementById('root'));

const clickers = [0,1,2,3].map((each, i)=>(
  return <Clicker key='i' start='each'>
))
ReactDOM.render(clickers, document.getElementById('root'));

// //styling
// .clicker {
//   width:3em;
//   height:2em;
//   font-size:2em;
//   padding:1em;
    // text-align:center;
//   border:0.25em solid black
// }


//another way to make componenet
function MyComponent(props) {
  function handleClick() {
    alert()
  }
  return <h1 onClick={handleClick}>Functional: {props.greeting ? 'hi':'bye'}</h1>


}



// create a class => which becomes  componenent
// name it with CamelCase
//extend React.Component
// one method required ... render
// rnder it dictates how to show / compose this component
class App extends React.Component {
  render() {
    return (<div>
        <h1>Hello</h1>
        <div>this is a componenet:{5 * 76}</div>
      </div>)
  }
}
ReactDOM.render(<div><App /><App /></div>, document.body);

// ReactDOM.render(<h1 className='foo'>this is my header</h1>, document.body);

*/
export default App;
