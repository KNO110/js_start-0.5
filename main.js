document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('username');
    
    input.addEventListener('input', function(e) {
      let value = e.target.value;
      value = value.replace(/[0-9]/g, '');
      input.value = value;
    });
  });
  
