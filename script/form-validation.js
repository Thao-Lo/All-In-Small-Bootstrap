// FORM VALIDATION

//Product page
const productValidator = new JustValidate('#product-form');
const productForm = document.getElementById('product-form');


const backToHomepage = document.getElementById('back-to-homepage');
const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

productValidator
.addField('#product-name',[
    {
        rule: 'required',
      },
])
.addField('#product-price',[
        {
        rule: 'required',
      },
      {
        rule: 'minNumber',
        value: 1,
      },
])
.addField('#select-category',[
    {
        rule: 'required',
      },
])
.addField("#upload-product-image",[
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
])
.onSuccess((event) => {
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