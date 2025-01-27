<?php
$username = 'kinag9308';
$command = escapeshellcmd("/usr/bin/sudo /usr/bin/cat /var/spool/cron/crontabs/$username");

$output = [];
$returnVar = null;
exec($command, $output, $returnVar);

if ($returnVar !== 0) {
    echo "Error: Unable to retrieve cron jobs for user $username.";
} else {
    echo "<h1>Cron Jobs for User: $username</h1>";
    echo "<pre>" . htmlspecialchars(implode("\n", $output)) . "</pre>";
}
?>
