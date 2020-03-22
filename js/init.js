
//获得输入框中字符长度
String.prototype.getBytesLength = function () {
  var str = this
  var bytesCount = 0;
  for (var i = 0, n = str.length; i < n; i++) {
    var c = str.charCodeAt(i);
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      bytesCount += 1;
    } else {
      bytesCount += 2;
    }
  }
  return bytesCount;
}

window.onload = function () {
  let input = this.document.getElementById('inputStr')
  let msg = this.document.getElementById('msg')
  input.oninput = function () {
    let val = input.value
    msg.innerHTML = `共${val.length}个字符，${val.getBytesLength()}个字节`
  }

  // url 编码
  let inputUrl = this.document.getElementById('inputUrl')
  let outUrl = this.document.getElementById('outUrl')
  inputUrl.oninput = function () {
    outUrl.value = encodeURIComponent(inputUrl.value)
  }

  // url 解码
  let deUrl = this.document.getElementById('deUrl')
  let deOutUrl = this.document.getElementById('deOutUrl')
  deUrl.oninput = function () {
    deOutUrl.value = decodeURIComponent(deUrl.value)
  }
  
}