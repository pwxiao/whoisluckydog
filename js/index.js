var $ = mdui.$;

const t = $("#input_number");
$("#change_number").on("input", (function() {
    t.val($(this).val());
}
))

// 监听 Select 的 change 事件  错误尝试 血泪史！！！

//  var inst = $('#quick-choice');  
//     inst.on('closed.mdui.select', function() {
//       // 获取 Select 的当前选中值
//       var selectedValue = inst.selectedValue;
  
//       // 将选中值设置为输入框的值
//       $("#input_number").val(3);
//     });


let selectDom = document.querySelector('select'); //获取下拉框元素
selectDom.onchange = function() {
	let index = this.options.selectedIndex;
	let value = this.options[index].value;
    t.val(value);
}

var textarea = document.getElementById("myStu");






document.getElementById("drawButton").addEventListener("click", function() {
    var inputNumber = document.getElementById("input_number").value;
    var totalNumber = 64;

    // 检查输入是否有效
    if (inputNumber && inputNumber > 0 && inputNumber <= totalNumber) {
      var randomNumbers = generateRandomNumbers(totalNumber);
      var result = randomNumbers.slice(0, inputNumber);

    //   var html = '';
    //   for (var i = 0; i < result.length; i++) {
    //     html += '<div class="mdui-chip">' +
    //       '<span class="mdui-chip-title" style="text-align: center;">' + result[i]+'彭文晓' + '</span>' +
    //       '</div>';
    //   }
    // $('#container').append(html);
    // mdui.mutation();



      document.getElementById("result").textContent =
        result.join("  ");
    } else {
        mdui.snackbar({
            message: "请输入有效的抽签人数（1到" + totalNumber + "之间",
          });



    }
  });

  // 生成随机数数组
  function generateRandomNumbers(totalNumber) {
    var numbers = Array.from({ length: totalNumber }, (_, index) => index + 1);
    for (var i = numbers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
  }
