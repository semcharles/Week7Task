import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  const users = [
    {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      twitterLink: <a href = "https://twitter.com/chrisnode">@chrisnode</a>,
      avatar: 'https://static01.nyt.com/images/2010/02/16/science/16elon01/16elon01-popup.jpg?quality=75&auto=webp&disable=upscale'
    },
 {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      twitterLink: <a href = "https://twitter.com/chrisnode">@morgan45</a>,
      avatar:
        'https://www.onetwolyrics.com/wp-content/uploads/2017/03/chris-morgan-biography-onetwolyrics.jpg'
    }
  ]
  return (
    <div className="App">
      
      
      <ProfileCard user = {users} />



    </div>
  );
}

export default App;
