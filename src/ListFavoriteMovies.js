import React, { Component } from 'react'

class ListFavoriteMovies extends Component {
  render() {
    console.log('Props', this.props)
    	return (
    	<ol className='movie-list'>
          { this.props.profiles.map((profile) => (
          	<li key={profile.id} className='profile-list-item'>
				<div
					className='profile-movie'
				></div>
			<div className='profile-details'>
				<p>{profile.name}</p>
			</div>
			</li>
		))}
        </ol>  
   		) 
  	} 
  }    

export default ListFavoriteMovies