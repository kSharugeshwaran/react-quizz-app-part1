import React, { Component } from 'react'
import Quiz from './mainpage'

export default class Last extends Component {
    constructor(props)
    {
        super(props)
        this.state  = {
            showMainPage: false
        }
    }
    Show = () => {
        this.setState({showMainPage : true})
    }
  render() {
    return (
      <>
      {this.state.showMainPage ? <Quiz /> : (
        <div className='resultPage'>
            <h1>Result</h1>
            <div className='dis'>
                <h3>You need more practice</h3>
                <h2>Your score is 20%</h2>
                <div className='stats'>
                    <p>Total number of questions</p>
                    <p>15</p>
                    <p>Number of attempted questions</p>
                    <p>9</p>
                    <p>number of correct answers</p>
                    <p>3</p>
                    <p>Number of wrong answers</p>
                    <p>6</p>
                </div>
            </div>
            <div className='decide'>
                <button>T R Y A G A I N</button>
                <button onClick={this.Show}>B A C K T O H O M E</button>
            </div>
        </div>
      )}
      </>
    )
  }
}
