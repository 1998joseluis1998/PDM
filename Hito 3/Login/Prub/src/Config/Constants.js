import {Dimensions} from 'react-native';

const config={
HEADER_HEIGHT:Dimensions.get('window').height,
SCREEN_WIDTH:Dimensions.get('window').width,
SCREEN_HEIGHT:Dimensions.get('window').height - 45,
};

const string ={
  PASSWORD:'password',
  USERNAME:'USERNAME',
  TITLE_BUTTON:'LOG IN',
  EMAIL:'EMAIL',
};

export default{
  CONFIG:config,
  STRING:string,
}
