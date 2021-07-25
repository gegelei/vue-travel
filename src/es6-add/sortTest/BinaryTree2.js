// 参考：（有误）https://www.cnblogs.com/caimuguodexiaohongmao/p/11123933.html

// 正解：https://blog.csdn.net/zlejan/article/details/106818982

class Node {
  constructor(key) {
    this.key = key// 节点值
    this.left = null// 左指针
    this.right = null// 右指针
  }
}

// 二叉树
class BinaryTree {
  constructor() {
    this.root = null// 根节点·
  }

  insert(key) {// api--插入
    const newNode = new Node(key)
    if (this.root === null) {// 设置根节点
      this.root = newNode
    } else {
      method.insertNode(this.root, newNode)
    }
  }

  // callback为访问节点时执行的操作
  inorderTraversal() {// api--中序遍历
    method.inorderTraversalNode(this.root)
  }
}

// method
method = {
  insertNode(root, newNode) {
    if (newNode.key < root.key) {// 进入左子树
      if (root.left === null) {// 左子树为空
        root.left = newNode
      } else {// 左子树已存在
        method.insertNode(root.left, newNode)
      }
    } else {// 进入右子树
      if (root.right === null) {// 右子树为空
        root.right = newNode
      } else {// 右子树已存在
        method.insertNode(root.right, newNode)
      }
    }
  },

  inorderTraversalNode(node) {
    if (node) {// 当前节点
      method.inorderTraversalNode(node.left)// 遍历左子树
      console.log(node.key)
      method.inorderTraversalNode(node.right)// 遍历右子树
    }
  },
}

// 实例化二叉树
const binaryTree = new BinaryTree()

// key值
const keys = [19, 8, 15, 24, 45, 12, 5, 8]

// 生成排序二叉树
keys.forEach(key => binaryTree.insert(key))

binaryTree.inorderTraversal()
