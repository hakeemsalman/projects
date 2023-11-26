$(document).ready(function () {
  $(':radio').on('click', (event) => {
    if (event.currentTarget.id === 'custom') {
      $('#spec').show();
    } else {
      $('#spec').hide();
    }
  });

  $('.specification-section').hide();

  $('.tab-link').on('click', (e) => {
    if ($('#custom')[0].checked) {
      $('.tab-link').removeClass('c-active');
      e.currentTarget.classList.add('c-active');
      if (e.currentTarget.id === 'details') {
        $('.detail-section').show();
        $('.specification-section').hide();
      } else {
        $('.detail-section').hide();
        $('.specification-section').show();
      }
    }
  });
});

function handleRetailCheckBox() {
  let checkedCount = 0;

  $('.retail-checkbox').each(i => {
    if ($('.retail-checkbox')[i].checked) {
      checkedCount = checkedCount + 1;
    }
  })
  $('.retail-checkbox').each(index => {
    if ($('.retail-checkbox')[index].checked && $('.retail-checkbox').length !== checkedCount) {
      $('#retail-selectall').css('background-image', 'url("./assets/images/halfCheckboxFill.svg")');
      $('#retail-selectall')[0].checked = true;
    }
    if ($('.retail-checkbox')[index].checked && $('.retail-checkbox').length === checkedCount) {
      $('#retail-selectall').css('background-image', '');
      $('#retail-selectall')[0].checked = true;
    }
    if (!$('.retail-checkbox')[index].checked && 0 === checkedCount) {
      $('#retail-selectall').css('background-image', '');
      $('#retail-selectall')[0].checked = false;
    }
  })
  checkedCount = 0;
}

function handleStoreCheckBox() {
  let checkedCount = 0;

  $('.store-checkbox').each(i => {
    if ($('.store-checkbox')[i].checked) {
      checkedCount = checkedCount + 1;
      console.log('first if');
    }
  })
  $('.store-checkbox').each(index => {
    if ($('.store-checkbox')[index].checked && $('.store-checkbox').length !== checkedCount) {
      $('#store-selectall').css('background-image', 'url("/assets/images/halfCheckboxFill.svg")');
      $('#store-selectall')[0].checked = true;
    }
    if ($('.store-checkbox')[index].checked && $('.store-checkbox').length === checkedCount) {
      $('#store-selectall').css('background-image', '');
      $('#store-selectall')[0].checked = true;
    }
    if (!$('.store-checkbox')[index].checked && 0 === checkedCount) {
      console.log('else')
      $('#store-selectall').css('background-image', '');
      $('#store-selectall')[0].checked = false;
    }
  })
  checkedCount = 0;
}



function handleRetailCheckAll(e) {
  $('.retail-checkbox').each(index => {
    $('.retail-checkbox')[index].checked = true;
    $('#retail-selectall').css('background-image', '');
  })
  if (e.checked === false) {
    $('.retail-checkbox').each(index => {
      $('.retail-checkbox')[index].checked = false;
      $('#retail-selectall').css('background-image', '');
    })
  }
}
function handleStoreCheckAll(e) {
  $('.store-checkbox').each(index => {
    $('.store-checkbox')[index].checked = true;
    $('#store-selectall').css('background-image', '');
  })
  if (e.checked === false) {
    $('.store-checkbox').each(index => {
      $('.store-checkbox')[index].checked = false;
      $('#store-selectall').css('background-image', '');
    })
  }
}


function handleSubmit(e) {
  alert('Created fact tag successfully.');
  location.reload();
}

// Table Dropdown script 

function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

function selectOption(option, dropdownId) {
  var dropdownBtn = document.querySelector(`#${dropdownId} + .dropdown-btn`);
  dropdownBtn.textContent = option;
  toggleDropdown(dropdownId);
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  // console.log(event.target.classList);
  if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-btn img')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}



