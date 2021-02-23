import React from 'react'

import {Cards, Chart,CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

import logo from './images/image.png'

class App extends React.Component {
  
  state = {
      data:{},
      country:'',
  }
  
  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data:fetchedData})

  }

  handleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country})
  }

  render() {
    const {data,country} = this.state; //if dont declare this , must use <Cards data={this.state.data} /> instred
   
    return (
      <div className={styles.container} >
        <img className={styles.image} src={logo} alt="covid-19 logo" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}


export default App;
