pagination
========   
첫 문서 등록일시 : 2020-03-23 09:50   
[1. 현재 page를 기준으로 하는 방식][id]
[id]:#1page
[2. page값을 고정으로 정하는 방식][id2]
[id2]:#2page


###1. 현재 page를 기준으로 하는 방식   

```
<?php

//현재 page 값이 startpage가 되는 페이지네이션 방식

$name = $_GET['name'];

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "board";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//pagination

$LIST_SIZE = 5;
$COUNT_PAGE = 5;

$page = $_GET['page'] ? intval($_GET['page']) : 1;

$page_sql = "SELECT COUNT(*) AS totalcount FROM $name";
$page_result = $conn->query($page_sql);
$page_row = $page_result->fetch_array(MYSQLI_ASSOC);

$totalpage = floor($page_row['totalcount'] / $LIST_SIZE);

if($page_row['totalcount'] % $LIST_SIZE > 0){
  $totalpage++;
}

if($totalpage < $page){
  $page = $totalpage;
  $redirect = "<script>location.href='board.php?name=$name&page=$page'</script>";
  echo $redirect;
}

$start_page = (($page - 1) / $COUNT_PAGE) * $COUNT_PAGE + 1;
$end_page = $start_page + $COUNT_PAGE -1;
$next_page = $page + $COUNT_PAGE;

if ($end_page > $totalpage) {
  $end_page = $totalpage;
}

//$prev_page = max($start_page - $MORE_PAGE - 1, 1);
//$next_page = min($end_page + $MORE_PAGE + 1, $page_count);

$offset = ( $page - 1 ) * $LIST_SIZE;
$sql = "SELECT * FROM $name ORDER BY id DESC LIMIT $offset, $LIST_SIZE";

$result = $conn->query($sql);
?>

```

###2. page값을 고정으로 정하는 방식   

```
<?php

//STARTPAGE가 1이고 COUNTPAGE가 5면 NEXTPAGE에 6을 가르키는 페이지네이션 방식

if(!isset($_GET['page'])){
  $page = 1;
}
else{
  $page = $_GET['page'];
}

$name = $_GET['name'];

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "board";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//pagination

$LIST_SIZE = 5;
$COUNT_PAGE = 5;


$page_sql = "SELECT COUNT(*) AS totalcount FROM $name";
$page_result = $conn->query($page_sql);
$page_row = $page_result->fetch_array(MYSQLI_ASSOC);

$totalpage = floor($page_row['totalcount'] / $LIST_SIZE);

if($page_row['totalcount'] % $LIST_SIZE > 0){
  $totalpage++;
}

if($totalpage < $page && $totalpage > 1){
  $page = $totalpage;
  $redirect = "<script>location.href='board.php?name=$name&page=$page'</script>";
  echo $redirect;
}

$start_page = 1;
$end_page = $COUNT_PAGE;
$prev_page = $COUNT_PAGE - 1;
$next_page = $COUNT_PAGE + 1;

$page_index = floor($totalpage / $COUNT_PAGE);
$page_array = [];

for($j =1; $j <= $page_index; $j++){
  $page_array[$j] = ($COUNT_PAGE * $j) + 1;

  if($page >= $page_array[$j]){
    $start_page = $page_array[$j];
    $end_page = $start_page + $COUNT_PAGE - 1;
    $prev_page = $start_page - 1;
    $next_page = $start_page + $COUNT_PAGE;
  }
}


if ($end_page > $totalpage) {
  $end_page = $totalpage;
}

$offset = ( $page - 1 ) * $LIST_SIZE;
$sql = "SELECT * FROM $name ORDER BY id DESC LIMIT $offset, $LIST_SIZE";

$result = $conn->query($sql);
?>
```