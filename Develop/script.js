var TimeBlocksFormEl = $('#timeblocks-form');
var apppointmentsListEl = $('#appointments-list');
var hour = moment().hour(Number);

function handleFormSubmit(event) {
  event.preventDefault();

  var timeblocksItem = $('input[name="shopping-input"]').val();

  if (!timeblocksItem) {
    console.log('No scheduled!');
    return;
  }

  var appointmentsListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  appointmentsListItemEl.text(timeblocksItem);

  appointmentsListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  appointmentsListEl.append(appointmentsListItemEl);

  $('input[name="timeblock-input"]').val('');
}

function handleRemoveItem(event) {
  
  var btnClicked = $(event.target);
  btnClicked.parent('li').remove();
}

class of `delete-item-btn`
appointmentsListEl.on('click', '.delete-item-btn', handleRemoveItem);
appointmentsFormEl.on('submit', handleFormSubmit);