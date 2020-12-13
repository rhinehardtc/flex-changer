import React, {useState} from 'react';

function App() {

  const [direction, setDirection] = useState('');
  const [wrap, setWrap] = useState('');
  const [flow, setFlow] = useState('');
  const [align, setAlign] = useState('');
  const [justify, setJustify] = useState('');

  const [basis1, setBasis1] = useState('');
  const [grow1, setGrow1] = useState('');
  const [shrink1, setShrink1] = useState('');

  const [basis2, setBasis2] = useState('');
  const [grow2, setGrow2] = useState('');
  const [shrink2, setShrink2] = useState('');

  const [basis3, setBasis3] = useState('');
  const [grow3, setGrow3] = useState('');
  const [shrink3, setShrink3] = useState('');


  let demoStyle = {
    flexDirection: direction, 
    flexWrap: wrap, 
    flexFlow: flow, 
    alignItems: align,
    justifyContent: justify,
  };

  let itemStyle1 = {
    flexBasis: basis1,
    flexGrow: grow1,
    flexShrink: shrink1,
  }

  let itemStyle2 = {
    flexBasis: basis2,
    flexGrow: grow2,
    flexShrink: shrink2,
  }

  let itemStyle3 = {
    flexBasis: basis3,
    flexGrow: grow3,
    flexShrink: shrink3,
  }

  return (
    <>
    <h1>Flex-Changer</h1>
    <div className="App">
      <div className="flex_settings">
        <div className="input_div">
          flex-direction: <input className="flex_input" onChange={(e) => setDirection(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-wrap: <input className="flex_input" onChange={(e) => setWrap(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-flow: <input className="flex_input" onChange={(e) => setFlow(e.target.value)}></input>
        </div>
        <div className="input_div">
          align-items: <input className="flex_input" onChange={(e) => setAlign(e.target.value)}></input>
        </div>
        <div className="input_div">
          justify-content: <input className="flex_input" onChange={(e) => setJustify(e.target.value)}></input>
        </div>

        Box 1
        <div className="input_div">
          flex-basis: <input className="flex_input" onChange={(e) => setBasis1(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-grow: <input className="flex_input" onChange={(e) => setGrow1(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-shrink: <input className="flex_input" onChange={(e) => setShrink1(e.target.value)}></input>
        </div>

        Box 2
        <div className="input_div">
          flex-basis: <input className="flex_input" onChange={(e) => setBasis2(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-grow: <input className="flex_input" onChange={(e) => setGrow2(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-shrink: <input className="flex_input" onChange={(e) => setShrink2(e.target.value)}></input>
        </div>

        Box 3
        <div className="input_div">
          flex-basis: <input className="flex_input" onChange={(e) => setBasis3(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-grow: <input className="flex_input" onChange={(e) => setGrow3(e.target.value)}></input>
        </div>
        <div className="input_div">
          flex-shrink: <input className="flex_input" onChange={(e) => setShrink3(e.target.value)}></input>
        </div>
      </div>

      <div className="demo_flex_container" style={demoStyle}>
        <div className="one_div" style={itemStyle1}>1</div>
        <div className="two_div" style={itemStyle2}>2</div>
        <div className="three_div" style={itemStyle3}>3</div>
      </div>
    </div>
    </>
  );
}

export default App;
