
function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('.product-quantity');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('.product-quantity');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

$('.product-quantity').on('click', '.button-plus', function (e) {
    incrementValue(e);   
});

$('.product-quantity').on('click', '.button-minus', function (e) {
    decrementValue(e);
});




// Get the input element
const uploadImage = document.getElementById('upload-product-image');
const imagePreview = document.getElementById('review-image');

// Add an event listener to detect file upload
uploadImage.addEventListener('change', function() {
  // Get the selected file
   const file = uploadImage.files[0];

  // Create a FileReader object
  const reader = new FileReader();

  // Set up the reader's onload event handler
  reader.onload = function(e) {
    // Get the image data URL
    const imageDataUrl = e.target.result;

    // Display the uploaded image   
    imagePreview.src = imageDataUrl;
  };

  // Read the selected file as Data URL
  reader.readAsDataURL(file);
});


//modal for add category as an option in add product page
    // const selectCategory = document.getElementById('select-category');
    // const addNewCategoryModal = document.getElementById('staticBackdrop-categogory');

    // selectCategory.addEventListener('change', function() {
    //   if (this.value === 'add-new') {
    //     let categoryModal = new bootstrap.Modal(addNewCategoryModal);
    //     categoryModal.show();
    //     this.value = ''; 
    //   }
    // });
  