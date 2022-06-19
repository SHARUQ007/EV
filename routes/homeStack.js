import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Stations from '../screens/Stations';
import Battery from '../screens/battery';
import Directions from '../screens/directions';
import AddStations from '../screens/addStations';
import EVStore from '../screens/EVStore';

const screens = {
  Home: {
    screen: Home,
  },
  Stations: {
    screen: Stations,
  },
  Battery: {
    screen: Battery,
  },
  Directions: {
    screen: Directions,
  },
  StationReviews: {
    screen: AddStations,
  },
  EVStore: {
    screen: EVStore,
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


