import ColorToggleButton from '../src/components/button/Button';
import './App.css';
import BoxComponent from './components/largebutton/LargeButton';
import BasicCard from './components/footer/footer';
import Card from './components/description/Description'
import RegistrationButton from './components/registrationButton/registrationButton';
import PrimarySearchAppBar from './components/header/header';
import SearchAppBar from './components/header/header1';
import FolderList from './components/list/list';
import PostCard from './components/Card/card';
import PostCardWithPicture from './components/Card/cardWithPicture'
import ProfileBanner from './components/banner/ProfileBanner';


function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <ColorToggleButton />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <BoxComponent />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <BasicCard />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <RegistrationButton />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <PrimarySearchAppBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SearchAppBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FolderList />
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <PostCard />
      <br></br>
      <br></br>
      <br></br>
      <PostCardWithPicture />
      <br></br>
      <br></br>
      <br></br>
      <ProfileBanner />
    </div>
  );
}

export default App;
