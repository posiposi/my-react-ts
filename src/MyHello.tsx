import React from 'react'
import { MyName } from './Types/myHello'

export default function MyHello({ myName }: MyName) {
  return (
    <React.Fragment>
      <div>Hello! {myName}!</div>
      <button>テスト用ボタン</button>
    </React.Fragment>
  )
}
