import React from 'react';
import {Text} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

import BaseExamplePropTypes from './common/BaseExamplePropTypes';
import Page from './common/Page';
import Bubble from './common/Bubble';

const defaultCamera = {
  centerCoordinate: [-77.036532, 38.897318],
  zoomLevel: 16,
};

class ShowAndHideLayer extends React.Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  state = {
    show: true,
  };

  onPress = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const visibility = this.state.show ? 'visible' : 'none';
    return (
      <Page {...this.props}>
        <MapboxGL.MapView
          ref={c => (this._map = c)}
          onPress={this.onPress}
          style={{flex: 1}}
        >
          <MapboxGL.Camera defaultSettings={defaultCamera} />
          <MapboxGL.FillLayer id="building" style={{visibility}} />
          <MapboxGL.LineLayer id="building-outline" style={{visibility}} />
        </MapboxGL.MapView>
        <Bubble onPress={this.onPress}>
          <Text>{this.state.show ? 'Hide Buildings' : 'Show Buildings'}</Text>
        </Bubble>
      </Page>
    );
  }
}

export default ShowAndHideLayer;
