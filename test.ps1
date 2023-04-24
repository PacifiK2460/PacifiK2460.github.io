# Load "socks5.txt" and for every line in the file, run the command "curl.exe --socks5 <line> https://api.ipify.org" and the proxyes that work will be saved in "working.txt"

$proxyes = Get-Content socks5.txt

foreach ($proxy in $proxyes) {
    $result = curl.exe --socks5 $proxy https://api.ipify.org
    if ($result -ne $null) {
        $result | Out-File -Append working.txt
    }
}

echo "Done!"