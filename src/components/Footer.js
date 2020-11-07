import React from 'react';

const Footer = () => {
	const gitHubLink = 'https://github.com/andrews1022/string-formatter-react';
	const twitterLink = 'https://twitter.com/andrew_devsrc';

	return (
		<footer className='footer'>
			<p className='footer__text'>
				© {new Date().getFullYear()} all rights reserved. designed and built and andrew shearer
			</p>
			<div className='footer__icon-row'>
				<a href={gitHubLink} target='_blank' rel='noopener noreferrer'>
					<i className='footer__icon fab fa-github'></i>
				</a>
				<a href={twitterLink} target='_blank' rel='noopener noreferrer'>
					<i className='footer__icon fab fa-twitter'></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
