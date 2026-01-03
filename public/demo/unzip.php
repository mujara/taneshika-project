<?php

$zip = new ZipArchive();

if ($zip->open('./hoge.zip') === true) {
	if ($zip->extractTo('./') === true) {
		$zip->close();
	} else {
		exit('Extract Error');
	}
} else {
	exit('Open Error');
}

echo 'Unzip Complete';

?>