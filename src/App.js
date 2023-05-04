import React from 'react';
import './App.css';
import { 
  ClassCounter, 
  HookCounter, 
  HookCounterTwo, 
  HookCounter3, 
  HookCounterFour, 
  ClassCounterTwo, 
  HookCounterOne, 
  ClassCounterOne,
  HookMouse,
  MouseContainer,
  ClassMouse,
  IntervalClassCounter,
  IntervalHookCounter,
  DataFetching,
  DataFetchingP2,
  DataFetchingP3,
  ReducerFile,
} from './components/index';
import ComponentFileC from './components/childComponents/ComponentFileC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

  return (
    <div className="App">
      <div className='App-header'>
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter3 /> */}
        {/* <HookCounterFour /> */}
        {/* <ClassCounterTwo /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <ClassMouse /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        {/* <DataFetching /> */}
        {/* <DataFetchingP2 /> */}
        {/* <DataFetchingP3 /> */}

        {/* <UserContext.Provider value={'Shafique Abbasi'}>
          <ChannelContext.Provider value={'Codevolution'}>
            <ComponentFileC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}

        <ReducerFile />
      </div>
    </div>
  );
}

export default App;

// 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 github code generated use for 1 month today 1 May