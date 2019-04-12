var inputPerameter = $('#inputPerameter');
			var booleanValue = true,value;
			function test(){
				value = inputPerameter.val();
				if(value==''){
				booleanValue = true;
				}
				if(value.length>3){
					subValue = value.substring(-1,3);
					if(booleanValue&&subValue.length==3){
					if(subValue.substring(1,2)=='3'||subValue.substring(1,2)=='5'||subValue.substring(1,2)=='8'){	
					booleanValue = /^[1]{1}(([3]|[5]|[8]){1})([0-9]{1})$/.test(subValue);
					}else if(subValue.substring(1,2)=='4'){	
					booleanValue = /^[1]{1}[4]{1}(([5]|[7]){1})$/.test(subValue);	
					}else if(subValue.substring(1,2)=='7'){		
					booleanValue = /^[1]{1}[7]{1}(([0]|[1]|[3]|[5]|[6]|[7]|[8]){1})$/.test(subValue);		
					}else{
						booleanValue = false;
					}
				}
				}else{
				if(value.length==1){	
				booleanValue = /^[1]{1}$/.test(value);	
				}else if(value.length==2){
				booleanValue = /^[1]{1}(([3]|[4]|[5]|[7]|[8]){1})$/.test(value);	
				}else if(booleanValue&&value.length==3){
					if(value.substring(1,2)=='3'||value.substring(1,2)=='5'||value.substring(1,2)=='8'){	
					booleanValue = /^[1]{1}(([3]|[5]|[8]){1})([0-9]{1})$/.test(value);
					}else if(value.substring(1,2)=='4'){	
					booleanValue = /^[1]{1}[4]{1}(([5]|[7]){1})$/.test(value);	
					}else if(value.substring(1,2)=='7'){		
					booleanValue = /^[1]{1}[7]{1}(([0]|[1]|[3]|[5]|[6]|[7]|[8]){1})$/.test(value);		
					}else{
						booleanValue = false;
					}
				}	
				}
				if(!booleanValue||!/^\d*$/.test(value)||value.length<11){
					//显示错误标志
					$('.hint_str').css('display','block');
					$('.hint_str').html('请输入正确的手机号');
					$('.hint_str').css('color','#FFFFEE');
					$('.hint_str').css('font-size','12px');
				}else{
					//隐藏错误标志
					$('.hint_str').css('display','none');
				}
//				if(/^\d{11}$/.test(value)&&booleanValue){
//					//显示正确标志
//					$('.hint_str').css('display','block');
//					$('.hint_str').html('手机号正确');
//					$('.hint_str').css('color','lawngreen');
//				}
			}
{
    var email=document.getElementById('email');
    var oldValue=email.value;
    email.oninput=email.onpropertychange=function(e){
        var v=this.value,len= v.length;
        if(v[len-1]=='@' && oldValue.length<len){
            this.value=v+'163.com';
        }
        oldValue=this.value;
    }
}