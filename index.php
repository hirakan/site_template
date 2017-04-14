<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>title</title>
<meta name="description" content="">
<meta name="keywords" content="">
<?php include($_SERVER["DOCUMENT_ROOT"] .'/block/head_tag.php'); ?>
</head>
<body class="drawer drawer--right">
<?php include($_SERVER["DOCUMENT_ROOT"] .'/block/header.php'); ?>
  <!-- content -->
    <div class="jumbotron text-center">
      <h1>Hello, world!</h1>
    <img src="/img/test.jpg" alt="" class="img-circle">
    </div>
    <div class="container-fluid">
      <div class="row">
    <div class="col-xs-2" style="background:#CCC; height:250px;">xs2</div>
    <div class="col-xs-6" style="background:#999;  height:250px;">xs6</div>
    <div class="col-xs-4" style="background:#CCC; height:250px; ">xs4</div>  
</div><!--row-->
<div class="row">
  <div style="background:#bbb; height:250px;">指定なし</div>
  <div class="col-xs-12 visible-xs" style="background:#aaa; height:250px;">指定なし</div>
</div>
      <div class="row">
    <div class="col-md-2" style="background:#bbb; height:250px;">md2</div>
    <div class="col-md-6 col-sm-6" style="background:#888;  height:250px;">md6</div>
    <div class="col-md-4 col-sm-6" style="background:#DDD; height:250px; ">md4</div>  
</div><!--row-->
<div class="row">
    <div class="col-xs-3" style="background:#ddd; height:250px;">カラム3</div>
    <div class="col-xs-3" style="background:#666; height:250px;">カラム3</div>
    <div class="col-xs-3" style=" height:250px;">
<div class="row">
  <div class="col-xs-3"　style="background: #aaa;">ネスト</div>
  <div class="col-xs-3">ネスト</div>
  <div class="col-xs-3"　style="background: #aaa;">ネスト</div>
  <div class="col-xs-3">ネスト</div>
</div>
    </div>  
</div><!--row-->
    </div>
    <!-- /.container-fluid -->

    <div class="container">
      <h1>Grid system</h1>
      <div class="row">
        <div class="col-xs-9" style="border:solid 1px #000;height:650px;">
          <div class="row">
            <div class="col-xs-12" style="background:#CCC;height:200px;"><h3>新着情報</h3></div>
          </div>
          <div class="row">
            <div class="col-xs-6" style="background:#999;height:150px;">
              <h3>商品A</h3>
            </div>
            <div class="col-xs-3"style="background:#CCC;height:150px;">
              <h3>商品B</h3>
            </div>
            <div class="col-xs-3"style="background:#999;height:150px;">
              <h3>商品C</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 "style="background:#CCC;height:150px;">
              <h3>商品D</h3>
            </div>
            <div class="col-md-offset-4 col-xs-4"style="background:#999;">
              <h3>商品E</h3>
              <img src="/img/test2.jpg" class="img-fluid" alt="">
            </div>

          </div>

        </div><!--col-xs-9-->
        <div class="col-xs-3"style="border:solid 1px #000;height:650px;">
          <h2>sidebar</h2>
        </div><!--col-xs-3-->
      </div>
    </div>


<?php include($_SERVER["DOCUMENT_ROOT"] .'/block/footer.php'); ?>
<?php include($_SERVER["DOCUMENT_ROOT"] .'/block/footer_tag.php'); ?>
</body>
</html>