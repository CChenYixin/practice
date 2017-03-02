var inputText = document.getElementsByClassName('inputtext')[0];
var tip = document.getElementById('tip');
var button = document.getElementsByTagName('input')[1];

//字符长度
var strLength = function(str){
    var len = 0;
    for(var i=0;i<str.length;i++){
        charCode =  str.charCodeAt(i);
        if(charCode >= 0 && charCode <= 128){
            len +=1;
        }else{
            len +=2;
        }
    }
       return len;
};
//验证
function validate(){
    var content = inputText.value.trim();
    if(strLength(content) === 0){
        tip.innerHTML = '名称不能为空！';
        tip.className = 'on';
        inputText.className += ' warn';
    }else if( strLength(content)>=4 && strLength(content)<=16 ){
        tip.innerHTML = '格式正确';
    }else{
        tip.innerHTML ='字符数应为4-16位';
        tip.className = 'on';
        inputText.className='warn';
    }
}

//绑定
button.onclick =function(){
    validate();
};
