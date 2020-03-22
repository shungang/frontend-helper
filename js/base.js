//字符编码数值对应的存储长度：     
//UCS-2编码(16进制) UTF-8 字节流(二进制)    
//0000 - 007F       0xxxxxxx （1字节）     
//0080 - 07FF       110xxxxx 10xxxxxx （2字节）     
//0800 - FFFF       1110xxxx 10xxxxxx 10xxxxxx （3字节）    
String.prototype.getBytesLength = function() {
    var totalLength = 0;     
    var charCode;  
    for (var i = 0; i < this.length; i++) {  
        charCode = this.charCodeAt(i);  
        if (charCode < 0x007f)  {     
            totalLength++;     
        } else if ((0x0080 <= charCode) && (charCode <= 0x07ff))  {     
            totalLength += 2;     
        } else if ((0x0800 <= charCode) && (charCode <= 0xffff))  {     
            totalLength += 3;   
        } else{  
            totalLength += 4;   
        }          
    }  
    return totalLength;   
}

export default {}