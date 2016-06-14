// どっちの呼び出しが良いのかわからない
// const React = require('react');
// const MailInput = require('./MailInput');

import React from 'react';
import MailInput from './MailInput';

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.checkValue= this.checkValue.bind(this);

    this.state = {
      data: {
        mail: ''
        // url: null
      },
      // バリデーションエラー時のメッセージ {string}
      message: {
        mail: null
        // url: null
      },
      // フォームのバリデーションの状態 {boolean}
      status: {
        mail: null
        // url: null
      }
    }
  }
  checkValue(type, value, event) {
    // データを一時的に保持するための変数
    let data = {
      mail: this.state.data.mail,
      url: this.state.data.url
    };
    let message = {
      mail: this.state.message.mail
      // url: this.state.message.url
    };
    let status = {
      mail: this.state.status.mail
      // url: this.state.status.url
    };

    // name属性値によって処理を分岐
    switch(type) {
      // name属性値がmailだった場合
      case "mail":
        // 一時保存用変数に値をセット
        data.mail = value;
        if (event.target.validationMessage) {
          message.mail = event.target.validationMessage;
          status.mail = false;
        } else {
          message.mail = null;
          status.mail = true;
        }
        break;
      // name属性値がurlだった場合
      case "url":
        // 一時保存用変数に値をセット
        data.url = value;
        message.url = null;
        status.url = true;
        break;
    }
    // stateを更新
    this.setState({
      data: data,
      message: message,
      status: status
    });
  }
  render() {
    let mail = {
      mail: this.state.data.mail,
      error: this.state.message.mail,
      checkValue: this.checkValue
    };

    return (
      <ul className="form-list">
        <MailInput {...mail} onChange={this.checkValue} />
      </ul>
    );
  }
};


window.FormApp = FormApp;
