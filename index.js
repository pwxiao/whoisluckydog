const myLucky = new LuckyCanvas.LuckyWheel('#my-lucky', {
    width: '300px',
    height: '300px',
    blocks: [{ padding: '10px', background: '#869cfa' }],
    prizes: [
      { background: '#b8c5f2', fonts: [{ text: '谢谢惠顾' , top: '10%'}] ,range: 300},
      { background: '#e9e8fe', fonts: [{ text: '武士刀' , top: '10%'}],range: 5 },
      { background: '#b8c5f2', fonts: [{ text: '伸缩唐刀' , top: '10%'}],range: 4 },
      { background: '#e9e8fe', fonts: [{ text: '大螺旋剑', top: '10%' }] ,range: 5},
      { background: '#b8c5f2', fonts: [{ text: '小螺旋剑' , top: '10%'}],range: 5 },
    // { background: '#b8c5f2', fonts: [{ text: '鬼武士模型', top: '10%' }] ,range: 1},
    // { background: '#e9e8fe', fonts: [{ text: '数码宝贝', top: '10%' }] ,range: 1},
     { background: '#b8c5f2', fonts: [{ text: '木制RM小车', top: '10%' }] ,range: 8},
    { background: '#b8c5f2', fonts: [{ text: '再来一次' , top: '10%'}] ,range:150},
    { background: '#e9e8fe', fonts: [{ text: '萝卜刀' , top: '10%'}] ,range: 10},
    ],

    buttons: [
      { radius: '40%', background: '#617df2' },
      { radius: '35%', background: '#afc8ff' },
      {
        radius: '30%', background: '#869cfa',
        pointer: true,
        fonts: [{ text: '开抽', top: '-10px' }]
      },
    ],
    defaultStyle: { fontSize: 20,wordWrap: true },
    start: function() {

       if (!this.counter) {
            this.counter = 1;
          } else {
            this.counter++;
          }


           myLucky.play()

                 setTimeout(_ => {
                   // 停止游戏
                   myLucky.stop()
                 }, 800)


    },
    end: function(prize) { // 游戏停止时触发
       var message = '恭喜你获得了: ' + prize.fonts[0].text;
       DialogHelper.showDialog(message,prize.fonts[0].text);
    }
  })
