function inOrder(node){
    if(node.left){
        inOrder(node.left)     
    }
    console.log(node.data)

    if(node.right){
        inOrder(node.right)
    }  
 
}

function findOrAdd(rootNode, newNode){
    if(newNode.data < rootNode.data){
        if(!rootNode.left){
            rootNode.left = newNode
            return newNode
        }else{
            findOrAdd(rootNode.left, newNode)
               
        }
    }else if(newNode.data > rootNode.data){
        if(!rootNode.right){
            rootNode.right = newNode
            return newNode
        }else{
            findOrAdd(rootNode.right, newNode)    
        }
    }
    return true
}

function max(node){
    if(node.right){
       return max(node.right)
    }

    return node

}

function min(node){
    if(node.left){
       return min(node.left)
    }
    return node
    
}
