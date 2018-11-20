import React from 'react';
import './ImageLinkform.css';

const ImageLinkform = ({onInputChange, onButtomSubmit}) => {
	return (
		<div>
			<p className='f4' >
				{'This Magic Mask detect faces in your pictures. Git it a try'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f5 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-gray'
					onClick={onButtomSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkform;
