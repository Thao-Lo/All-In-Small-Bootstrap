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

// FORM VALIDATION

const productValidator = new JustValidate('#product-form');
const productForm = document.getElementById('product-form');
const backToHomepage = document.getElementById('back-to-homepage');
const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

productValidator.addField("#upload-product-image",[
    {
        rule: 'minFilesCount',
        value: 1,
        errorMessage: 'Please upload an image',
      },
      {
        rule: 'files',
        errorMessage: 'Invalid file upload',
        value: {
          files: {
            extensions: ['jpeg', 'jpg', 'png','JPG','PNG','JPEG'],
            maxSize: 2097152,
            minSize: 10240,
            types: ['image/jpeg', 'image/jpg', 'image/png','image/JPEG','image/JPG', 'image/PNG'],
          },
        },
      },      
]).onSuccess((event) => {
    productForm.submit();
});


// function hasFormData() {    
//     for (const field of productForm.elements) {
//       // Check if the field is not a button and has a non-empty value
//       console.log('Field:', field);
//       console.log('Tag Name:', field.tagName);
//       console.log('Value:', field.value);
//       console.log('Disabled:', field.disabled);
//       console.log('Trimmed Value:', field.value.trim());
//       if (field.tagName !== 'button' && !field.disabled && 
//       (field.tagName !== 'form-select' || field.selectedIndex !== 0) && 
//       field.value.trim() !== '')  {
//         return true; // Return true if any field has data
//       }
//     }
//     return false; // Return false if no field has data
// }
//   // Add event listener to the link to go back to the home page
//   backToHomepage.addEventListener('click', function(event) {
   
//     if (hasFormData()) { 
//       event.preventDefault();      
//       console.log('Form has data!');
//       modal.show();
//     }else{
//       modal.hide();
//         console.log('Form has no data!');
//     }

//   });