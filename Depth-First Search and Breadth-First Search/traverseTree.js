//given tree t return array of breadth first search
function traverseTree(t) {
    if(t){
        let d = [];
        let q = [];
        let n = t;

        q.push(n);

        while(q.length){
          n = q.shift();
          d.push(n.value);

          if(n.left){
            q.push(n.left);
          }

          if(n.right){
            q.push(n.right);
          }
        }

        return d;
    } else {
        return [];
    }
}
