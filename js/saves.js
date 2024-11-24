// Function to download all cookies from the current page as a .lxryt file
function downloadCookies() {
  // Get all the cookies as a single string
  var cookies = document.cookie;
  
  // Create a Blob containing the cookie data
  var blob = new Blob([cookies], { type: "text/plain" });
  
  // Create a temporary anchor element for downloading
  var a = document.createElement("a");
  
  // Set the anchor element's properties for download
  a.href = URL.createObjectURL(blob);
  a.download = "saves.lxryt";
  
  // Trigger the download by simulating a click
  a.click();
}

// Function to open a file picker, allowing only .lxryt files to be selected
function chooseFile() {
  // Create a file input element
  var input = document.createElement("input");
  input.type = "file";
  
  // Restrict accepted files to .lxryt extension
  input.accept = ".lxryt";
  
  // Open the file picker by simulating a click
  input.click();  
}

// Function to upload cookies from a .lxryt file
function uploadCookies() {
  // Get the selected file from an input element with ID "uploadInput"
  var file = document.getElementById("uploadInput").files[0];
  
  // Create a FileReader to read the file contents
  var reader = new FileReader();
  
  // Set up the file reader's onload event
  reader.onload = function(e) {
      // Get the cookie data from the file
      var cookies = e.target.result;
      
      // Set the cookies in the current document
      document.cookie = cookies;
      
      // Display a confirmation alert
      alert("Cookies uploaded successfully!");
  };
  
  // Read the file as text to access the cookie data
  reader.readAsText(file);
}
