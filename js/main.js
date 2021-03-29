$(document).ready(function () {
	$('#first-button').click(function () {
		$('#first-block').toggleClass('first-block-img');
	});

	$('#second-button').click(function () {
		$('#second-block').toggleClass('second-block-img');
	});

	$('#change-button').click(function () {
		// alert("Что ты наделал !!!");
		swal({
			title: 'ТРЕВОГА !!!',
			text: 'Что ты наделал !?',
			icon: 'warning',
			buttons: ['А может не нажимать???', 'ЖМИ УЖЕ...'],
		}).then((pressed) => {
			if (pressed) {
				swal('Замену сохраняю');
			} else {
				swal('', 'Ага, испугался ! Ладно, отменяю )', { button: 'ВОЗВРАТ' });
				$('#first-block').toggleClass('first-block-img second-block-img');
				$('#second-block').toggleClass('first-block-img second-block-img');
			}
		});
		$('#first-block').toggleClass('first-block-img second-block-img');
		$('#second-block').toggleClass('first-block-img second-block-img');
	});
});
