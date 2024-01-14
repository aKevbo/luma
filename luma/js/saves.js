function downloadCookies() {
    // Get all the cookies as a string
    var cookies = document.cookie;
    
    // Create a Blob containing the cookie data
    var blob = new Blob([cookies], { type: "text/plain" });
    
    // Create a temporary anchor element
    var a = document.createElement("a");
    
    // Set the anchor element's properties
    a.href = URL.createObjectURL(blob);
    a.download = "saves.lxryt";
    
    // Simulate a click on the anchor element to trigger the download
    a.click();
  }
  
  function chooseFile() {
    // Create an input element of type "file"
    var input = document.createElement("input");
    input.type = "file";
    
    // Set the accept attribute to allow only .lxryt files
    input.accept = ".lxryt";
    
    // Trigger the click event on the input element
    input.click();  
  }
  
  function uploadCookies() {
    // Retrieve the selected file
    var file = document.getElementById("uploadInput").files[0];
    
    // Create a FileReader object
    var reader = new FileReader();
    
    // Set up the onload event handler
    reader.onload = function(e) {
      // Get the cookie data from the file
      var cookies = e.target.result;
      
      // Set the cookies in the browser
      document.cookie = cookies;
      
      alert("Cookies uploaded successfully!");
    };
    
    // Read the file as text
    reader.readAsText(file);
  }  