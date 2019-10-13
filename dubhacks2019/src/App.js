import React from 'react';
import './App.css';
import MainPage from './MainPage.js';
import {Display} from './DisplayPage';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'HalloEuroboy';
    src: url('https://spectator-fonts.s3.amazonaws.com/HalloEuroboy.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @import url("https://p.typekit.net/p.css?s=1&k=cdu0unr&ht=tk&f=35475.35476.35477.35478.35479&a=7799304&app=typekit&e=css");

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/d34176/00000000000000003b9b043b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:600;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/fe293c/00000000000000003b9b043c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:600;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/1a9b5f/00000000000000003b9b043d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/cc97f2/00000000000000003b9b043e/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

@font-face {
font-family:"basic-sans";
src:url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/3f4c96/00000000000000003b9b043f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:300;
}
`;

const home = () => <MainPage/>;

const displaypage = () => (
  <Display url="https://cdn.pixabay.com/photo/2018/03/23/08/09/flat-3252983_960_720.png" labels={["Hello, my name is ", "Bob", "and I am ","8", " years old."]}/>
);

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/face" component={displaypage} />
        </Switch>

    </div>
  );
}
export default App;
