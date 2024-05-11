<?php
// Get the URL parameter from the query string
$url = $_GET['url'];

// Fetch the content of the external website
$content = file_get_contents($url);

// Output the fetched content
echo $content;
?>
