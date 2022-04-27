/*
  Đây là code phần mã Caesar/Cipher 
  Language:Javascript
*/
function caesar_cipher(string,mode,key){
    for(key;key<26;key++){
    var text="",i;
    var num;
    if(mode=='ENCRYPTION'){//Đây là phần mã hóa-Encryption
        for (i of string){
          if(i==" "){
            text+=" ";
          }
          else{
            num=((i.charCodeAt()-65)+key)%26;//đưa nó về phần số xong -65 VD A là 65 , 65-65=0 đưa về vị trí trong bảng 26 Alphabet
            text+=(String.fromCharCode(num+65));
          }
        }
        console.log("key["+key+"] "+"ENCRYPTION : "+text);
    }
if(mode=='DECRYPTION'){//Đây là phần giải mã -Decryption
        for (i of string){
          if(i==" "){
            text+=" ";
          }
          else{
            num=((i.charCodeAt()+65)-key)%26;// phần này sẽ đưa về vị trí  26 bảng Alphabet
            text+=(String.fromCharCode(num+65));
          }
        }
        console.log("key["+key+"] "+"DYCRYPTION : "+text);
    }
}
}
caesar_cipher("RGWDTSRSIDKQDWGHWDQGIFYSHOGESQAYA",'DECRYPTION',1);
