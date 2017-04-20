import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 357 }],
    'overflowX': 'hidden',
    'fontFamily': '"Helvetica Neue", Helvetica, "Hiragino Kaku Gothic Pro", "Lucida Grande", Verdana, Arial, Meiryo, "メイリオ", sans-serif'
  },
  'panel': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundImage': 'url("../images/background_sky.jpg")'
  },
  'panel-body': {
    'height': [{ 'unit': 'px', 'value': 400 }],
    'overflow': 'auto'
  },
  'chatBox': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden'
  },
  'chatBalloon': {
    'display': 'inline-block',
    'borderRadius': '10px',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'backgroundColor': 'white'
  },
  'bot': {
    'float': 'left',
    'display': 'inline-block'
  },
  'usr': {
    'float': 'right',
    'backgroundColor': 'Lime'
  },
  'inputText': {
    'textAlign': 'right'
  }
});
