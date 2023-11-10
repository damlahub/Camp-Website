    document.addEventListener("DOMContentLoaded", function() {
      const modal = document.getElementById("modal");
    
      showModal();
    
      window.closeModal = function() {
        modal.style.display = "none";
      };
    });
    
    function showModal() {
      const modal = document.getElementById("modal");
      modal.style.display = "block";
    }
    