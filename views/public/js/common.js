
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
   $("#exampleModalToggle").on("shown.bs.modal", function(){
    $(this).find("input").first().focus()
  })
  
  
  //<!------------------------ carousel1:script:start ------------------------>

    let items = document.querySelectorAll(' #carousel1  .carousel-item ')
    // let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
      const minPerSlide = 6
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })

//<!------------------------ carousel1:script:end ------------------------>


////////////////addproduct jquery//////////////////////

$("#formselect").on("change",function(){
  var getvalue=$('#formselect').val();
  $('#category').val(getvalue);
});