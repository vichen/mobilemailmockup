'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Inbox } from './src/Components/Inbox';


class PxyzTakehome extends Component {

  render() {

    return (
      <Inbox/>
    );
  }
}


AppRegistry.registerComponent('PxyzTakehome', () => PxyzTakehome);
