// const React = require('react');
import React from 'react';

export default class BaseInput extends React.Component {
  // 共通スタイルの定義の仕方がわかんない
  // ValidStyle = {
  //   style: {
  //     invalid: {
  //       border: "2px solid #b71c1c"
  //     },
  //     valid: {
  //       border: "2px solid #ccc"
  //     }
  //   }
  // }

  constructor(props) {
    super(props);
  }
  // コールバック関数を定義
  handleChange(event) {
    // console.log('check');
    // フォームのname属性値を取得
    let type = event.target.name;
    // フォームの入力値を取得
    let val = event.target.value;
    // 親コンポーネントから受け取るcheckValue()メソッドを実行
    this.props.onChange(type, val, event);
  }
}
