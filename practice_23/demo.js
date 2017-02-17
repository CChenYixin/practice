var timer = null,
    btns = document.getElementsByTagName('button'),
    root = document.getElementById('root'),
    lock = false,
    BFindex = 0;//广度优先遍历自增标识符


// 深度优先遍历
//我们只需要一个栈空间，来压栈就好了。因为深度优先遍历，遍历了根节点后，就开始遍历左子树，所以右子树肯定最后遍历。我们利用栈的性质，先将右子树压栈，然后在对左子树压栈。此时，左子树节点是在top上的，所以可以先去遍历左子树。

function traverseDF(node,nodeList){
    if(node){
        nodeList.push(node);
        for(var i= 0;i<node.children.length;i++){
            traverseDF(node.children[i],nodeList);
        }
    }
}

//广度优先遍历
//对于广度优先遍历二叉树，也就是按层次的去遍历。依次遍历根节点，然后是左孩子和右孩子。所以要遍历完当前节点的所有孩子，这样才是层次遍历嘛。根据左右孩子的顺序来输出，所以就是先进先出的原则，那么我们当然就想到了队列这个数据结构
function traverseBF(node, nodeList) {
    if (node) {
        nodeList.push(node);
        traverseBF(node.nextElementSibling, nodeList);//回传 node的下一个元素对象
        node = nodeList[BFindex++];
        traverseBF(node.firstElementChild, nodeList);
	}
}


//渲染
function traverseRender(nodeList,foundText){
	var i = 0;
	var len = nodeList.length;
	if (nodeList[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g,"") == foundText) {
		nodeList[i].className = "found";
		lock = false;
		clearInterval(timer);
	} else {
		nodeList[i++].className = "active";
	}
	lock = true;
	timer = setInterval(function(){
		if(i<len){
			nodeList[i-1].className = "";
            if (nodeList[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g,"") == foundText) {
                nodeList[i].className = "found";
                lock = false;
                clearInterval(timer);
			}else{
				nodeList[i++].className = "active";
			}
		}
		else{
			nodeList[i-1].className = "";
			lock = false;
			clearInterval(timer);
		}
	},500);
}

//遍历
function traverse(traverseIndex){
	var Nodelist = [];
	var foundList = [];
	switch(traverseIndex){
		case 0:
            traverseDF(root,Nodelist);
			break;
		case 1:
            BFindex = 0;
			traverseBF(root,Nodelist);
			break;
		case 2:
            var foundText = document.getElementsByTagName("input")[0].value;
			traverseDF(root,Nodelist);
			break;
		case 3:BFindex = 0;
            var foundText = document.getElementsByTagName("input")[0].value;
        	traverseBF(root,Nodelist);
		    break;
	}
	resetBG();
	setTimeout(traverseRender(Nodelist,foundText),500);
}

//绑定按钮事件
function init(){
	for(var i=0;i<btns.length;i++){
		( function (i) {
			btns[i].onclick = function(){
				if(lock === true){
					alert("正在遍历中!");
				}
				else{
					traverse(i);
				}
			};
		}(i));
	}
}

// 重置节点样式
function resetBG(){
	var nodeList = [];
	traverseDF(root,nodeList);
	for(var i=0;i<nodeList.length;i++){
		nodeList[i].className = "default";
	}
}

init();
