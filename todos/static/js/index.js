function showToggle() {
    // Swap and toggle button inner text
    var button = document.getElementById('show');
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
      button.innerHTML = button.getAttribute("data-text-original");
      console.log('1');
    }
    else {
      button.setAttribute("data-text-original", button.innerHTML);
      button.innerHTML = button.getAttribute("data-text-swap");
      console.log('2');

    }

}
