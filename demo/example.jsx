import React from 'react';
import { render } from 'react-dom';
import BasicDragDemo from './BasicDragDemo';
import DragFoodToAnimalsDemo from './DragFoodToAnimals/DragFoodToAnimalsDemo';
import DragThingsToBoxesDemo from './DragThingsToBoxes/DragThingsToBoxesDemo';
import DragElementWithClickHandlers from './DragElementWithClickHandlers';

const App = () => (
	<div>
		<DragThingsToBoxesDemo/>
		<hr />
		<DragFoodToAnimalsDemo/>
		<hr />
		<BasicDragDemo />
		<hr />
		<DragElementWithClickHandlers />
	</div>
);

render(<App />, document.getElementById('app'));
