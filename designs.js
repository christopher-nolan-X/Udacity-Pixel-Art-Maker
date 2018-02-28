function makeGrid() {
	// clear existing grid
	$( '#pixelCanvas' ).empty();

	// set height and width variables to input values
	let height = $( '#inputHeight' ).val();
	let width = $( '#inputWeight' ).val();

	// generate height x width size grid
	for (let row = 1; row <= height; row++) {
		$( '#pixelCanvas' ).append( '<tr class="row' + row + '"></tr>');
		// select newly generated tr
		let rowSelector = $( '.row' + row );
		for (let col = 1; col <= width; col++) {
			rowSelector.append( '<td class="r' + row + 'c' + col + '"></td>');
		}
	}
	// prevent submit button from reloading DOM
	return false;
}


// create grid when user clicks submit button
$( '#sizePicker :submit' ).on('click', makeGrid);

let color;

// store hex code in color when user changes color in colorPicker
$( '#colorPicker' ).on('change', function() {
	color = $( '#colorPicker' ).val();
})

// change background-color of cell when user clicks
$( '#pixelCanvas' ).on('click', 'td', function() {
	$(this).css('background-color', color);
})