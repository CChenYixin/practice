/*参考了 soulclearm 的代码 ，学习封装和组件化的思想，将代码写到公共文件中调用*/

var FloatLayer = function(element) {
    this.ele = element;
    this.visible = false;
    this.maskEle = null;
    this.animateTime = 600;

    this.init();
};

FloatLayer.prototype = {

    show: function(){
        this.visible =true;
        //scale(sx, sy)定义 2D 缩放转换，浮层消失时的缩放效果
        this.ele.style.transform = 'translate(-50%, -50%) scale(1,1)';
        this.maskEle.style.visibility = 'visible';
        this.ele.style.left = '50%';
        this.ele.style.right = '50%';
    },

    hide: function(){
        this.visible = false;
        this.ele.style.transform = 'translate(-50%, -50%) scale(0,0)';
        var self =this;
        setTimeout(function(){
            self.maskEle.style.visibility = 'hidden';
        },this.animateTime);
    },


    init: function(){
        //创建遮罩
        this.maskEle = createEle('div');
        this.maskEle.style.width = window.screen.width + 'px';
        this.maskEle.style.height = window.screen.height + 'px';
        this.maskEle.style.backgroundColor = 'rgba(108,108,108,0.7)';
        this.maskEle.style.position = 'fixed';
        this.maskEle.style.left = '50%';
        this.maskEle.style.top = '50%';
        this.maskEle.style.transform = 'translate(-50%, -50%)';
        //判断当前遮罩状态
        this.maskEle.style.visibility = this.visible ? 'visible' : 'hidden';

        //浮层
        this.ele.style.position = 'absolute';
        this.ele.style.left = '50%';
        this.ele.style.top = '50%';
        this.ele.style.width = this.ele.clientWidth + 'px';
        this.ele.style.transform = 'translate(-50%, -50%) scale(0,0)';
        this.ele.style.transition = this.animateTime + 'ms transform';


        this.ele.parentNode.removeChild(this.ele);
        this.maskEle.appendChild(this.ele);
        document.body.appendChild(this.maskEle);

        //添加点击事件
        var self = this;
        addEvent(this.maskEle,'click',function(e){
            if(self.maskEle === this){
                self.hide();
            }
        });

        addEvent(this.ele,'click',function(e){
            e.stopPropagation();
        });

         this.setDragNode(this.ele.children[0]);
    },

     setDragNode: function(node){
         var preX,preY;
         var self = this;

         node.style.cursor = 'move';

         addEvent(node,'mousedown',function(event){
              var  disX = event.clientX - self.ele.offsetLeft,
                  disY = event.clientY - self.ele.offsetTop;
              var move = function(event) {
                 self.ele.style.left = event.clientX - disX + 'px';
                 self.ele.style.top = event.clientY - disY + 'px';
             };
              addEvent(document, 'mousemove', move);
              addEvent(document, 'mouseup', function() {
              removeEvent(document, 'mousemove', move);
             });
         });
     }
};

function createFloatLayer(ele) {
    return new FloatLayer(ele);
}
