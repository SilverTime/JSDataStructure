function BinarySearchTree() {     //create a tree obj
    var Node = function (key) {      //a node and it's elements
        this.left = null;
        this.key = key;
        this.right = null;
    };
    var root = null;

//    插入
    /*
    * 插入
    * 1.构造一个新节点
    * 2.判断是否是树根
    * 3.判断大小，构造私有方法进行递归插入
    * 从根向下判断插入位置
    * */

    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    /*中序遍历*/
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    };
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }
}

var tree = new BinarySearchTree();
[3, 4, 5, 6, 34, 21, 7, 8, 14, 15, 10].forEach(function (item) {
    tree.insert(item);
});
tree.inOrderTraverse(function (val) {
    console.log(val)
});

