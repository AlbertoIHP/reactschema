
import axios from 'axios'
import { base } from './base'


class Example 
{

  index ( token )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.get( 'users' ).catch( error => console.log( error.response ) )
  }



  store ( user, token )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.post( 'users', user ).catch( error => console.log( error.response ) )
  }



  show ( id, token )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.get( 'users/'+id ).catch( error => console.log( error.response ) )
  }


  update ( user, id, token )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.put( 'users/'+id, user ).catch( error => console.log( error.response ) )
  }


  delete ( id, token )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

  	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

  	return http.delete( 'users/'+id ).catch( error => console.log( error.response ) )
  }


  exampleApi()
  {
    let http = axios.create({ baseURL: 'https://newsapi.org', timeout: 1000 });

    return http.get( 'v2/top-headlines?country=us&' + 'apiKey=326a00604a454818a82a1161ea085154' ).catch( error => console.log( error.response ) )    
  }


}

export const exampleService = new Example();
