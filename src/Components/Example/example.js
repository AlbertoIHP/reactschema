import React, { Component } from 'react';
import './example.css';


//Component for navigate throw routes
import { browserHistory } from 'react-router';

//Services
import { exampleService } from '../../Services/Example.service'


class Example extends Component 
{

  constructor( props )
  {
  	super( props )
  	this.state =
  	{
  		title: 'Cambia el valor de title del state.',
      news: []
  	}
  }

  async componentDidMount()
  {
    let res = await exampleService.exampleApi()
    console.log( res.data )

    await this.setState( pre => {
      pre.news = res.data.articles
      return pre
    })
  }


  //As JS is an asynchronus language, we should control the flow of our application with async function, and await sentences for async process
  async changeTitle( title )
  {
  	await this.setState( pre => {
  		pre.title = title
  		return pre
  	})
  }


  renderNews()
  {
    return this.state.news.map( singleNew => {
      return (
          <p>
            Author: { singleNew.author }
            Description: { singleNew.description }
            <hr/>
          </p>
        )
    } )
  }


  render() 
  {
    return (
      <div className="container">
        <p>
           Esto es un ejemplo de componente con react en la ruta ( /example )

           <br/>

          <input type="text" value={this.state.title} onChange={ ( val ) =>  this.changeTitle( val.target.value ) } />

           <br/>

          Este es el contenido de title del state: { this.state.title }


          { this.renderNews() }

        </p>
      </div>
    );
  }
}

export default Example;
