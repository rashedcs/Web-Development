public function updatePayment(Request $request) {
    $id = $request->input('pid');
    $old = $request->input('old');

    //  dd($_POST);exit

    $result = '';
    for ($i = 1; $i<=5; $i++):
      $input = $request->file('image' . $i);
      if($request->hasFile('image' . $i)) :
        $dt = date_create();
        $time = date_format($dt, 'YmdHis');
        $image_name = $time . '-' . $image->getClientOriginalName();

        $input->move(base_path() . '/uploads/files/', $image_name);
        $var[] = $image_name;
      endif;

      if (sizeof($old) >= $i && $request->hasFile('image' . $i)):
        if (is_file(base_path() . '/uploads/files/' . $old[$i - 1])):
          unlink(base_path() . '/uploads/files/' . $old[$i - 1]);
        endif;

      elseif (sizeof($old) >= $i && (!$request->hasFile('image' . $i))):
        $var[] = $old[$i - 1];
      endif;
    endfor;
    
    $result = implode(",", $var);
    $data = array(
      'image' => $result,
    );

    DB::table('image')->where('id', $id)->update($data);
    Session::flash('message', '');
    return redirect('/');
}


        @foreach($row as $item)

        <?php
                                                    $var = $row->$item;
                                                    $arr = explode(",", $var);
                                                    $cnt = 0;
                                                    $lim = 5;
                                                    $old = array();
                                                    ?>

        @for ($i=0; $i<$lim; $i++) <input style="width:65%;float:left" class="btn btn-primary" type="file"
            name="attachemnt[]">
            <div style="width:5%;float:left">&nbsp;</div>
            @if(array_key_exists($i, $arr))
            <a name="old[] href="" style=" width:30%;float:left"><span class='fa fa-file'
                    style="color: #337ab7;font-size: 10px;">{{$arr[$i]}}</span></a>
            <!-- <button class="btn btn-default" type="button">Go!</button> -->
            <input type="hidden" name="old[]" value="{{$arr[$i]}}">

            @endif
            <div class="clearfix" style='margin-bottom: 10px;'></div>
            @endfor

            @endforeach



            Route::post('updateimg', 'YourController@ImageUpdate');
