<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests;
use Validator; 
use App\Admin; 
use Input;
use DB;
use Redirect;

class AdminController extends Controller
{
	function login(Request $req){ 

        $validator = Validator::make($req->all(), [
            
           'adminEmail' => [
                           'required',
                           'min:3',
                           'exists:admin_account,adminEmail'
    
                       ],
           'adminPassword' => [
                           'required',
                           'min:3',
                       ],
        
            ]);

        if ($validator->fails()) {
            return redirect('/')
                        ->withErrors($validator)
                        ->withInput();
        }

        $adminEmail= $req->adminEmail;
        $user = Admin::where('adminEmail', $adminEmail)->first();
        $hashedPasswordFromDb = $user->adminPassword;
        $isPassValid=  Hash::check($req->adminPassword, $hashedPasswordFromDb);

        if(!$isPassValid)  {
            return Redirect::back()->with('status', 'Username or password is wrong');
        }

        if($user->adminRoleId == 1){
            session(['admin' => $adminEmail]);
            session(['password' => true ]);
        }else if($user->adminRoleId == 2){
            session(['finance' => $adminEmail]);
            session(['password' => true ]);
        }else if($user->adminRoleId == 3){
            session(['management' => $adminEmail]);
            session(['password' => true ]);
        }
        
        return redirect('landing');

    }

    function logout(Request $req){
        $req->session()->flush();
        return redirect('/');
    }

    public function getIndex(){
		if(session('admin') != null) {
            return redirect('landing');
        }else{
            return redirect('login');
        }
		
    }
    
    public function ShowFormAccount($email){
		
		$Admin = Admin::where('adminEmail',$email)
								->get();

		return response()->json($Admin[0]);
    }
    
    public function GetDataAccountShow(){
		
		$Admin = Admin::get();

		$data = '';
		$i=1;
		foreach ( $Admin as $Admins )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$Admins->adminEmail.'</td>
					<td>'.$Admins->adminFirstName.'</td>
					<td>'.$Admins->adminLastName.'</td>
					<td width="30%"><a href="#" adminEmail="'.$Admins->adminEmail.'" class="btn btn-info btn-xs editAccount"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" adminEmail="'.$Admins->adminEmail.'" class="btn btn-danger btn-xs deleteAccount"><i class="fa fa-trash-o"></i> Delete </a>
						<a href="#" adminEmail="'.$Admins->adminEmail.'" class="btn btn-warning btn-xs manageAccount"><i class="fa fa-tasks"></i> Manage </a>
					</td>
				</tr>';
		
		return $data;
    }
    
    public function DeleteAccount($email){
		
		DB::table('admin')->where('adminEmail','=',$email)->delete();
		
		return Redirect::back()->with('message','Delete Admin Account Successfull !');
    }
    
    public function InsertOrUpdateAccount(Request $request){
		
		$data = array(
			'adminEmail' => Input::get('AccountEmail'),
			'adminPassword' => Hash::make(Input::get('AccountPassword')),
			'adminPhoneNumber' => '',
			'adminFirstName' => Input::get('AccountFirstName'),
			'adminLastName' => Input::get('AccountLastName'),
			'adminRoleId' => Input::get('AdminRole'),
		);
		$updateWhereClause = ["adminEmail" => $data['adminEmail']];		
		$updatedData = ["adminEmail" => $data['adminEmail'],"adminPassword" => $data['adminPassword'],"adminPhoneNumber" => $data['adminPhoneNumber'],"adminFirstName" => $data['adminFirstName'],"adminLastName" => $data['adminLastName'],"adminRoleId" => $data['adminRoleId']];		
		Admin::updateOrCreate($updateWhereClause, $updatedData);

		return Redirect::back()->with('message','Update Admin Account Successfull !');
	}

}