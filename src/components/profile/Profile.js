import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Profile extends Component {



	render() {
		let value = {
			name: '',
			public_repos: '',
			public_gists: '',
			followers: '',
			following: '',
			login: '',
			location: '',
			email: ''
		};
		for (let key in this.props)
		{
			value=this.props[key];
		}
		return (

			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">{this.props.name}</h3>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-md-4">
								<img src={value.avatar_url} className="thumbnail" style={{ width: "100%" }} />
							</div>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-12">
										<span className="label label-primary">{value.public_repos} Repos</span>
										<span className="label label-success">{value.public_gists} Public Gists</span>
										<span className="label label-info">{value.followers} Followers</span>
										<span className="label label-danger">{value.following} Following</span>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-md-12">
										<ul className="list-group">
											<li className="list-group-item"><strong>Username: </strong> {value.login}</li>
											<li className="list-group-item"><strong>Location: </strong> {value.location}</li>
											<li className="list-group-item"><strong>Email Address: </strong> {value.email}</li>
										</ul>
									</div>
								</div>
								<br />
								<a className="btn btn-primary" target="_blank" href={value.html_url}>Visit Profile</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}