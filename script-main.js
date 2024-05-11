function openFileExplorer() {
    document.getElementById('fileExplorer').style.display = 'block';
  }

  function toggleStartMenu() {
    var startMenu = document.getElementById('startMenu');
    if (startMenu.style.display === 'block') {
      startMenu.style.display = 'none';
    } else {
      startMenu.style.display = 'block';
    }
  }

  function openNotepad() {
    alert('Opening Notepad...');
    // You can replace this alert with actual functionality to open Notepad
  }

  function openCalculator() {
    alert('Opening Calculator...');
    // You can replace this alert with actual functionality to open Calculator
  }

  function openBrowser() {
    var browserWindow = document.getElementById('browserWindow');
    browserWindow.style.display = 'block';
  }

  function closeBrowser() {
    var browserWindow = document.getElementById('browserWindow');
    browserWindow.style.display = 'none';
    // Reset the URL input field when closing the browser
    document.getElementById('urlInput').value = '';
  }

  function goToUrl() {
    var url = document.getElementById('urlInput').value;
    document.getElementById('browserFrame').src = 'fetch.php?url=' + encodeURIComponent(url);
  }

  function goBack() {
    document.getElementById('browserFrame').contentWindow.history.back();
  }

  function goForward() {
    document.getElementById('browserFrame').contentWindow.history.forward();
  }

  function reloadPage() {
    document.getElementById('browserFrame').contentWindow.location.reload();
  }