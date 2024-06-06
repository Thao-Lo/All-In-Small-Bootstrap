

const categoryValidator = new JustValidate('#category-form');
const categoryForm = document.getElementById('category-form');

categoryValidator
.addField('#category-name',[
    {
        rule: 'required',
      },
])
.addField('#category-priority',[
    {
    rule: 'required',
  },
  {
    rule: 'minNumber',
    value: 1,
  },
  {
    rule: 'maxNumber',
    value: 10,
  },
])
.onSuccess((event) => {
    categoryForm.submit();
});